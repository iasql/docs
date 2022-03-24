---
sidebar_position: 1
slug: '/function'
---

# IaSQL PostgreSQL Functions

| name      | signature                | description                                                           | sample usage                   |
| ----------| ------------------------ | --------------------------------------------------------------------- | ------------------------------ |
| apply     | `iasql_apply()`          | Create, delete or update the cloud resources in a hosted db           | `SELECT iasql_apply()`         |
| plan      | `iasql_plan()`           | Preview of the resources in the db to be modified on the next `apply` | `SELECT iasql_plan()`          |
| sync      | `iasql_sync()`           | Synchronize the hosted db with the current state of the cloud account | `SELECT iasql_sync()`          |
| install   | `iasql_install(text)`    | Install one mod in hosted db        | `SELECT iasql_install('aws_vpc@0.0.1')`                          |
|           | `iasql_install(text[])`  | Install several mods in hosted db   | `SELECT iasql_install(array['aws_vpc@0.0.1', 'aws_ec2@0.0.1')])` |
| uninstall | `iasql_uninstall(text)`  | Uninstall one mod in hosted db      | `SELECT iasql_install('aws_vpc@0.0.1')`                          |
|           | `iasql_uninstall(text[])`| Uninstall several mods in hosted db | `SELECT iasql_install(array['aws_vpc@0.0.1', 'aws_ec2@0.0.1')])` |
