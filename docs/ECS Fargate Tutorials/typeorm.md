---
sidebar_position: 1
slug: '/typeorm'
---

# IaSQL on TypeORM (SQL ORM)

In this tutorial we will run [TypeORM SQL migrations](https://typeorm.io/#/migrations) on top of IaSQL to deploy a Node.js HTTP server within a docker container on your AWS account using ECS, ECR and ELB. The container image will be hosted as a public repository in ECR and deployed to ECS using Fargate.

:::tip

All the code from this tutorial can be found in this [repository folder](https://github.com/iasql/ecs-fargate-examples/tree/main/typeorm) which you can use to create a new Github repository for your IaSQL project.

:::

## Start managing an AWS account with a hosted IaSQL db

<Tabs>
  <TabItem value="Option 1: Connect an account directly" label="Option 1: Connect an account directly" default>

  Connecting an AWS account directly will redirect you to the AWS console to create a new [IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html) for IaSQL with its respective credentials. Please do not modify the fields in the cloud formation template or the account will be misconfigured.

  <img width={440} src={require('@site/static/screenshots/connect-direct.png').default} />

  You will be able to see your PostgreSQL connection information when the cloud formation stack creation completes.

  </TabItem>
  <TabItem value="Option 2: Provide the credentials manually" label="Option 2: Provide the credentials manually">

   First, make sure you have an [IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html) in AWS or create one with **Programmatic access** through the [console/UI](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console) or [CLI](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_cliwpsapi). Ensure that the IAM role has sufficient permissions to deploy and manage all your infrastructure resources.

   There are two parts to each [access key](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys), which you’ll see in the IAM console/CLI after you create it, an id and a secret. Input these in the connect account modal:

   <img width={440} src={require('@site/static/screenshots/connect-manual.png').default} />

  If you use the [AWS CLI](https://docs.aws.amazon.com/cli/), you can look at the [credentials configured locally](https://docs.aws.amazon.com/sdkref/latest/guide/file-location.html). In macOS and Linux this is as simple as:

  ```bash
  $ cat ~/.aws/credentials
  [default]
  aws_access_key_id = <YOUR_ACCESS_KEY_ID>
  aws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>
  ```
  You will be able to see your PostgreSQL connection information when you press Connect.

  </TabItem>
</Tabs>

<img width={440} src={require('@site/static/screenshots/credentials.png').default} />

Make sure to copy the PostgreSQL connection string as you will not see it again.

## Add the necessary cloud services to the hosted database

1. Many different clients can be used to [connect](/connect) to a PostgreSQL database. For this tutorial, we'll use the standard `psql` CLI client. If you need to install `psql`, follow the instructions for your corresponding OS [here](https://www.postgresql.org/download/).

2. The `up` part of the first migration calls the `iasql_install` SQL function to install [modules](/module) into the hosted database.

```sql title="my_project/infra/src/migration/1646683871211-Install.js"
SELECT * from iasql_install(
   'aws_cloudwatch',
   'aws_ecr',
   'aws_ecs_fargate',
   'aws_elb',
   'aws_security_group',
   'aws_vpc'
);
```

If the function call is successful, it will return a virtual table with a record for each new table in your database under `created_table_name` and the number of existing resources or records imported from the account under `record_count`.

```sql
       module_name        |      created_table_name       | record_count
--------------------------+-------------------------------+--------------
 aws_cloudwatch@0.0.1     | log_group                     |            0
 aws_ecr@0.0.1            | public_repository             |            0
 aws_ecr@0.0.1            | repository                    |            1
 aws_ecr@0.0.1            | repository_policy             |            0
 aws_security_group@0.0.1 | security_group                |            2
 aws_security_group@0.0.1 | security_group_rule           |            0
 aws_vpc@0.0.1            | vpc                           |            1
 aws_vpc@0.0.1            | subnet                        |            3
 aws_elb@0.0.1            | load_balancer                 |            0
 aws_elb@0.0.1            | target_group                  |            0
 aws_elb@0.0.1            | listener                      |            0
 aws_elb@0.0.1            | load_balancer_security_groups |            0
 aws_ecs_fargate@0.0.1    | cluster                       |            0
 aws_ecs_fargate@0.0.1    | service                       |            0
 aws_ecs_fargate@0.0.1    | task_definition               |            0
 aws_ecs_fargate@0.0.1    | container_definition          |            0
 aws_ecs_fargate@0.0.1    | service_security_groups       |            0
(17 rows)
```

## Connect to the hosted db and provision cloud resources in your AWS account

1. Get a local copy of the [ECS Fargate examples repository](https://github.com/iasql/ecs-fargate-examples)

```bash
git clone git@github.com:iasql/ecs-fargate-examples.git my_project
cd my_project
git filter-branch --subdirectory-filter typeorm
```

2. Install the Node.js project dependencies under the `my_project/infra` folder

```bash
cd infra
npm i
```

3. (Optional) Set the desired project name that your resources will be named after by changing the `name` in the `my_project/infra/package.json`. If the name is not changed, `quickstart` will be used.

:::note

The `project-name` can only contain alphanumeric characters and hyphens(-) because it will be used to name the load balancer

:::

3. Create a [`ormconfig.json`](https://typeorm.io/#/using-ormconfig/using-ormconfigjson) with the connection parameters provided on db creation. In this case:

```json title="my_project/infra/ormconfig.json" {2-7}
{
   "type": "postgres",
   "host": "db.iasql.com",
   "username": "d0va6ywg",
   "password": "nfdDh#EP4CyzveFr",
   "database": "_4b2bb09a59a411e4",
   "ssl": true,
   "extra": {
      "ssl": {
         "rejectUnauthorized": false
      }
   },
   "logging": false,
   "migrations": [
      "src/migration/**/*.js"
   ],
   "cli": {
      "migrationsDir": "src/migration"
   }
}
```

4. Run the existing TypeORM migrations on the hosted IaSQL db by invoking `typeorm` CLI

```bash
npx typeorm migration:run
```

5. The `up` part of the second, and last, migration will apply the changes described in the hosted db to your cloud account which will take a few minutes waiting for AWS

```sql title="my_project/infra/1646683871219-Initial.js"
...
SELECT * from iasql_apply();
```

If the function call is successful, it will return a virtual table with a record for each cloud resource that has been created, deleted or updated.

```sql
 action |    table_name       |   id   |      description      
--------+---------------------+--------+-----------------------
 create | public_repository   |      2 | quickstart-repository
 create | cluster             |      2 | 2
 create | task_definition     |      2 | 2
 create | service             |      2 | 2
 create | listener            |      2 | 2
 create | load_balancer       |      2 | 2
 create | target_group        |      2 | 2
 create | security_group      |      5 | 5
 create | security_group_rule |      3 | 3
 create | security_group_rule |      4 | 4
```

## Login, build and push your code to the container registry

1. Grab your new `ECR URI` from the hosted DB
```bash
QUICKSTART_ECR_URI=$(psql -At postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4 -c "
SELECT repository_uri
FROM aws_public_repository
WHERE repository_name = '<project-name>-repository-us-east-1';")
```

2. Login to AWS ECR using the AWS CLI. Run the following command and using the correct `<ECR-URI>` and AWS `<profile>`

```bash
aws ecr-public get-login-password --region us-east-1 --profile <profile> | docker login --username AWS --password-stdin ${QUICKSTART_ECR_URI}
```

:::note

The region *must* be `us-east-1` for public repositories.

:::

3. Build your image locally

```bash
docker build -t <project-name>-repository app
```

4. Tag your image

```bash
docker tag <project-name>-repository:latest ${QUICKSTART_ECR_URI}:latest
```

5. Push your image

```bash
docker push ${QUICKSTART_ECR_URI}:latest
```

6. Grab your load balancer DNS and access your service!
```bash
QUICKSTART_LB_DNS=$(psql -At postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4 -c "
SELECT dns_name
FROM aws_load_balancer
WHERE load_balancer_name = '<project-name>-load-balancer';")
```

7. Connect to your service!

```
curl ${QUICKSTART_LB_DNS}:8088/health
```

## Clean up the created cloud resources

1. Delete all the docker images in the repository

```bash
aws ecr-public batch-delete-image \
      --repository-name <project-name>-repository \
      --profile <profile> \
      --image-ids imageTag=latest
```

2. Reverse the latest migration, which in this case only requires invoking the following command once:

```bash
npx typeorm migration:revert
```

3. The `down` part of the second, and last, migration is called which reverts the changes and calls the `iasql_apply` function:

```sql title="my_project/infra/1646683871219-Initial.js"
...
SELECT * from iasql_apply();
```

If the function call is successful, it will return a virtual table with a record for each cloud resource that has been created, deleted or updated.

```sql
 action |     table_name      |   id   |                                                         description                                                         
--------+---------------------+--------+-----------------------------------------------------------------------------------------------------------------------------
 delete | cluster             | [NULL] | arn:aws:ecs:sa-east-1:658401754851:cluster/quickstart-cluster
 delete | task_definition     | [NULL] | arn:aws:ecs:sa-east-1:658401754851:task-definition/quickstart-td:1
 delete | service             | [NULL] | arn:aws:ecs:sa-east-1:658401754851:service/quickstart-cluster/quickstart-service
 delete | listener            | [NULL] | arn:aws:elasticloadbalancing:sa-east-1:658401754851:listener/app/quickstart-load-balancer/3925cdb9acada7c1/7a459d6259dac5c9
 delete | load_balancer       | [NULL] | arn:aws:elasticloadbalancing:sa-east-1:658401754851:loadbalancer/app/quickstart-load-balancer/3925cdb9acada7c1
 delete | target_group        | [NULL] | arn:aws:elasticloadbalancing:sa-east-1:658401754851:targetgroup/quickstart-target/826f804f496d0a90
 delete | security_group      | [NULL] | sg-0015b0e07bd10b7d2
 delete | security_group      | [NULL] | sg-e0df1095
 delete | security_group_rule | [NULL] | sgr-06aa0915b15fd23a9
 delete | security_group_rule | [NULL] | sgr-02e2096ac9e77a5bf

```