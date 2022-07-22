---
sidebar_position: 2
slug: '/apply-and-sync'
---

# A Walkthrough of the IaSQL `apply` and `sync` Behavior

This is an overview of how the `iasql-engine` detects changes in your database and/or cloud and performs operations to make them the same (in one direction or the other). This assumes knowledge in software development in general and some familiarity with the `iasql-engine` codebase in particular, though it links to relevant pieces when they are being discussed.

<!-- TODO: Diagrams, diagrams, diagrams! -->

## Terminology

* **CRUD** - *C*reate *R*ead *U*pdate *D*elete. The four basic operations to manipulate data.
* **Entities** - Object-oriented representations of database table(s) *and* cloud services
* **Mappers** - A collection of CRUD functions for an entity to manipulate an entity from the database into the equivalent cloud service object *or* from that cloud service into the database.
* **Identity** - Some usually simple unique piece of data that can distinguish one entity from another
* **Differ** - A function that can determine if two entities are actually different
* **Promise** - A special type of object that is a reference to an asynchronous task that will eventually execute and will either pass or fail at some point in time in the future.
* **Dependency Graph** - A graph data structure used to determine what things need to be done before the node in question can be executed
* **Module** - A collection of closely-related functions/objects/data that can be installed and uninstalled independently, though they may or may not depend on other modules
* **Eventual Consistency** - A technique where desired operations are executed asynchronously and the time/order of achieving the final desired outcome is not known/knowable ahead of time.

## `apply` and `sync` at a High Level

The most basic architectural diagram is simply your IaSQL database and your cloud account with the `iasql-engine` in between.

```
   ______
  /      \       _______            __
  |\____/|      |       |       ___/  \__
  |  DB  | <==> | IaSQL | <==> /  Cloud  \
  |      |      |_______|      \_    _   /
  \______/                       \__/ \_/
```

When you `apply` you take any changes from the database, feed them into the engine, and then it creates the necessary API calls on the cloud to make those changes to the cloud, and when you `sync` you take any changes from the cloud, convert them into database records, and update the database with the new information.

In both cases, though, the engine needs to be aware of what already exists on the other side in order to make only the calls necessary to produce the desired mutation on the other side.

Traditional IaC tools like Terraform use an internal statefile for this purpose, but this is folly. If there is ever an unexpected change, such as from an outage (or the manual mitigation of an outage) this statefile will not represent the other side correctly so the mutations it attempts will be incorrect causing the change to fail.

IaSQL's engine, on the other hand, is completely stateless. It acquires the state of both the database and the cloud when asked to perform a change in either direction and then determines the work it will do based on the *true state* of both.

This is done in an eventually consistent Read-Diff-Execute loop.

## Read-Diff-Execute Loop

The [`apply`](https://github.com/iasql/iasql-engine/blob/main/src/services/iasql.ts#L310) and [`sync`](https://github.com/iasql/iasql-engine/blob/main/src/services/iasql.ts#L527) functions are very similar dual `do-while` loops that execute the following steps:

1. For every `mapper` that exists in the database, load all database records into their associated `entities` using the database Read function from the `mapper`.
2. Repeat this process for the cloud, by using the cloud Read functions from the `mapper`s.
3. For each `mapper`, generate the IDs for all database and cloud entities and intersect these two sets to produce three new sets: entities only in the database, entities only in the cloud, and entities in both.
4. For the set of entities in both, execute an entity diffing function using the `mapper`'s `equals` method to determine which of the entities in both database and cloud are the same, and which have differences. Then discard the entities that are the same, leaving a set of entities that have changed.
5. Convert these sets into actions to take. Specifically, argument-less functions that when called return a new Promise to perform the action, so it may be called again if failed but *suspected* to be able to succeed in the future. The way the sets are converted into tasks depends on whether this is an `apply` or a `sync`. On `apply` entities only in the database become cloud creates, while entities only in the cloud become cloud deletes, and entities changed become cloud updates. For `sync` entities only in the database become database deletes, entities only in the cloud become database creates, and entities changed become database updates.
6. Try to [run all of these promises and keep track of which ones succeeded and which failed](https://github.com/iasql/iasql-engine/blob/main/src/services/lazy-dep.ts#L13). If there are any errors, and the number of errors is *different* from the last execution, then re-schedule the errored-out tasks and try to run them again, until either the failure mode is consistent or every task has succeeded. This approach allows the implicit dependency graph between tasks to execute settle out naturally without needing an explicit dependency graph. (The module dependency graph and operation types are used to roughly sort them, but because some AWS services have cycles in their dependencies, a traditional DAG-to-list algorithm can't be relied on).
7. If this is `apply` reload only the *cloud* state, while if this is `sync` reload only the *database* state, and repeat from step 3. If there is no more work detected to be done, then repeat again from step 1. If there is *again* no work to be done, we're finally finished. This last "step" is tricky and why it's a double `do-while` loop to implement things. Read on below for more on why this is.

### Why does Step 7 exist?

If we were updating/synchronizing between two different databases, Step 7 is 100% not necessary and you can handle everything without any looping (beyond the task transient error handling loop in step 6).

This is because in the database everything is mutable. But the cloud is not exactly like that. Some cloud entities cannot be changed after they have been created. They can only be replaced. You also can't just issue a delete and then an insert, because other entities that depend on the entity you're trying to replace are still there and the delete operation on your current entity will not eliminate those other entities, but will instead error out.

What you need to do is only create a new entity that matches the database, and then on the next loop it will notice that it should delete the entity that isn't in the database and the *other* entities will notice that they are associated with the wrong entity and trigger their own update or replace to swap to the new entity you just created. These tasks will potentially clash with each other but the error-retrying-loop should eventually execute them in the correct order and you're done.

That explains one loop, so why the other? Because of create-only entities that *also* have unique constraints on one or more properties. The AWS Security Group qualifies as one of these. Once you create a security group and set its description, you can't change it, but in IaSQL you certain can do so. If you update the description, which is not unique, but leave the name alone, which is unique, you can't just create a replacement security group with the same name. So the security group mapper has to do something gnarly here. When it creates the replacement, it mutates the name to a randomly generated one and then mutates the internal cache of the DB record to match that randomly generated name.

Now when it does this replace, it first sees that it is supposed to mutate the security group description without mutating the name but alters the name in its cache and executes a cloud create with this new, fake record. Then the inner loop runs and entities connected to the security group "realize" they are on the wrong security group and switch to this new, temporary security group, while the old security group with the correct name is marked as cloud-only so it is deleted. Then the inner loop completes with no difference between the database *cache* and the cloud, so it goes back to the outer loop, which re-loads the *actual* database state and it checks again and sees that there's a security group in the database that is not in the cloud and a security group in the cloud that is not in the database, and that these other entities are connected to the wrong security group, so it creates tasks to create a security group, delete a security group, and switch security groups. The error-retrying-loop will execute these tasks some unknown number of times, but the successes will always be in the same order -> create security group -> switch other entities to that security group -> delete the temporary security group.

This dance is necessary to give users in IaSQL the ability to migrate from *any* cloud state to the state they have defined in their database. This is IaSQL's superpower: bringing a greater reliability to producing the cloud state the developer specifies, so they can worry about more important things.

## Mapper Footguns

This section is meant for anyone currently developing in IaSQL, so it will change much more frequently compared to the sections above.

* TypeORM sometimes violates the entity types you have provided, especially around nullable types, where the entity may be something like `foo?: string` which implies `string | undefined` but TypeORM will treat it as `string | null`. This can trip you up in the `equals` function as `Object.is` distinguishes between `undefined` and `null` so you will run into infinite `update` loops where it is detecting a difference but there is no actionable change to be had. (Similarly sometimes arrays are actually unordered sets, so comparing array element-by-element is incorrect and you need to check each element is inside of the other array, regardless of order, and some strings are actually JSON or other human-editable data formats and non-significant-whitespace differences can also cause `update` loops.
* Deeply-nested entities get translated into many tables in TypeORM, and unique constraints on those tables can cause lots of pain with the entities that were generated from the cloud APIs, as they don't have the the database-only columns that let TypeORM know when the entity already exists in the database. Unfortunately for now you have to manually find these duplicates and then patch your sub-entity with these DB-only fields or the DB CRUD operations will blow up in your face.
* Picking the right field for the `@cloudId` in order to both: 1) properly distinguish records in the cloud and 2) still support distinguishing records in the database can sometimes be a difficult job, particularly if the only real candidate is a cloud-generated property.
* Records that are actually really read-only from the cloud and can't actually be mutated by end users (but are still useful to have to make inserts/updates of other entities safer via join logic) need to have weirdly "backwards" cloud CRUD functions that grab the cloud cache record and re-save it to the database (or delete the user-inserted entity outright).
* The create-only/create-only-with-unique-columns entities currently require 100% type-unsafe actions to manipulate the DB cache. There are other sections of the codebase where type safety / guarding by the compiler is broken, but this is the worst/most-dangerous one.
* When an entity depends on another entity, it is *best* to join it on a database ID rather any string ID preferred by the cloud. This is because then updates to that string ID are automatically picked up by the mappers of the other entities to perform an update automatically with minimal fuss for the user of IaSQL *and* reduced iterations inside of the engine itself. The second-best choice is to use a string ID that is defined by the user, not the cloud, so if they want to change that identifier, they will at least get a database foreign key error from it and have to themselves first un-join the entities in question, make the change, and then join them back. Making the join column a cloud-generated ID means any time there's a `replace`-style update occurring anything that joins on it will simply *break* and IaSQL will not be able to figure out how to stitch things back together so **don't do that.**

There are probably many other footguns at the moment, feel free to update this with any you can think of!




