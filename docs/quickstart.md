---
sidebar_position: 3
slug: '/quickstart'
---

# Quickstart

In this tutorial we will run [TypeORM SQL migrations](https://typeorm.io/#/migrations) on top of IaSQL to deploy a Node.js HTTP server within a docker container on your AWS account using ECS, ECR and ELB. The container image will be hosted as a public repository in ECR and deployed to ECS using Fargate.

:::tip

All the code from this tutorial can be found in this [template repository](https://github.com/iasql/quickstart) which you can use to [create a new Github repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) for your IaSQL project.

:::

## Setup programmatic access for your AWS account

1. Follow the steps in this [guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-prereqs.html#getting-started-prereqs-iam) to sign up to AWS, create an IAM user account and create credentials for it.

2. Now we will create a credentials file for the IAM role you just created. The file must be named `credentials` and is located underneath `.aws/` directory in your home directory.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Option 1: Use the CLI" label="Option 1: Use the CLI" default>

  To create this file using the CLI, [install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html). If you’re using Homebrew on macOS, you can use [awscli](https://formulae.brew.sh/formula/awscli) via `brew install awscli`.

  After installing the CLI, configure it with your IAM credentials using the `aws configure` command:

  ```bash
  $ aws configure
  AWS Access Key ID [None]: <YOUR_ACCESS_KEY_ID>
  AWS Secret Access Key [None]: <YOUR_SECRET_ACCESS_KEY>
  Default region name [None]:
  Default output format [None]:
  ```
  Now you’ve created the `~/.aws/credentials` file and populated it with the expected settings.

  </TabItem>
  <TabItem value="Option 2: Create manually" label="Option 2: Create manually">

  You can also create the `~/.aws/credentials` shared credentials file manually:

  ```bash
  [default]
  aws_access_key_id = <YOUR_ACCESS_KEY_ID>
  aws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>
  ```

  </TabItem>
</Tabs>

## Start managing your AWS account with an IaSQL db

1. [Install](/install) the IaSQL service CLI

2. Provision a new PG db to manage your AWS account by running `iasql new`. The CLI will prompt you to enter a name for the db, pick an AWS region and pick an AWS profile if you have more than one.

```bash
$ iasql new
✔ IaSQL db name · startup
✔ Pick AWS region · us-east-1
✔ Default AWS CLI credentials found. Do you wish to use those? · yes
✔ Pick AWS Profile · default
✔ Done
┌─────────────────┬───────────────────┬──────────┬──────────────────┐
│ Database Server │ Database Name     │ Username │ Password         │
├─────────────────┼───────────────────┼──────────┼──────────────────┤
│ db.iasql.com    │ _4b2bb09a59a411e4 │ d0va6ywg │ nfdDh#EP4CyzveFr │
└─────────────────┴───────────────────┴──────────┴──────────────────┘
✔ As a PG connection string · postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4
! This is the only time we will show you these credentials, be sure to save them.
```

## Add the necessary cloud services to your database

Immediately after showing you the connection information, you will be prompted to install modules into your database. Select the following: `aws_cloudwatch`, `aws_ecr`, `aws_ecs`, `aws_elb`, `aws_security_group`, and `aws_vpc`.

```bash
? Use arrows to move, space to (de)select modules and enter to submit ›
  [✔] aws_cloudwatch@0.0.1
  [ ] aws_ec2@0.0.1
  [✔] aws_ecr@0.0.1
  [✔] aws_ecs@0.0.1
  [✔] aws_elb@0.0.1
  [ ] aws_rds@0.0.1
  [✔] aws_security_group@0.0.1
❯ [✔] aws_vpc@0.0.1
✔ Confirm installation · yes
✔ Done
```

If you ever need to install more modules, you can do so with `iasql install` and to uninstall modules you no longer need, use `iasql uninstall`

:::note

Short command to install these modules if you accidentally didn't select any on DB creation.

```bash
$ iasql install --db startup aws_cloudwatch aws_ecr aws_ecs aws_elb aws_security_group aws_vpc

✔ Confirm installation · yes
✔ Done
```

:::

## Connect to your db and provision cloud resources

1. Get a local copy of the [quickstart repository](https://github.com/iasql/quickstart/blob/main/quickstart.sql)

```bash
git clone git@github.com:iasql/quickstart.git
cd quickstart
```

2. Install the `typeorm` CLI and the Node.js project that uses TypeORM under the `quickstart/infra` folder

```bash
cd infra
npm i
npm -g i typeorm
```

3. (Optional) Set the desired project name that your resources will be named after by changing the `name` in the `quickstart/infra/package.json`. If the name is not changed, `quickstart` will be used.

:::note

The `project-name` can only contain alphanumeric characters and hyphens(-) because it will be used to name the load balancer

:::

3. Create a [`ormconfig.json`](https://typeorm.io/#/using-ormconfig/using-ormconfigjson) with the connection parameters provided on db creation. In this case:

```json title="quickstart/infra/ormconfig.json" {2-7}
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
}
```

4. Run the existing TypeORM migration on your IaSQL db by invoking `typeorm` CLI

```bash
typeorm migration:run
```

5. Apply the changes described in the db to your cloud account

```bash
$ iasql apply startup
✔ Press enter to confirm apply · yes
TaskDefinition has 1 record to create
┌────┬──────────────────┬──────────────────┬──────────────────┬──────────┬─────────────┬──────────────────┬─────────────┬────────┬─────────────────┬───────────┐
│ id │ taskDefinitionA+ │ containers       │ family           │ revision │ taskRoleArn │ executionRoleArn │ networkMode │ status │ reqCompatibili+ │ cpuMemory │
├────┼──────────────────┼──────────────────┼──────────────────┼──────────┼─────────────┼──────────────────┼─────────────┼────────┼─────────────────┼───────────┤
│ 1  │                  │ quickstart+      │ quickstart+      │ 1        │             │                  │ awsvpc      │ ACTIVE │ FARGATE         │ 2vCPU-8GB │
└────┴──────────────────┴──────────────────┴──────────────────┴──────────┴─────────────┴──────────────────┴─────────────┴────────┴─────────────────┴───────────┘
AwsPublicRepository has 1 record to create
┌────┬────────────────────────────┬───────────────┬────────────┬───────────────┬───────────┐
│ id │ repositoryName             │ repositoryArn │ registryId │ repositoryUri │ createdAt │
├────┼────────────────────────────┼───────────────┼────────────┼───────────────┼───────────┤
│ 1  │ quickstart-repository      │               │            │               │           │
└────┴────────────────────────────┴───────────────┴────────────┴───────────────┴───────────┘
AwsSecurityGroupRule has 2 records to create
┌────┬─────────────────────┬────────────────────────────────┬──────────┬────────────┬──────────┬────────┬───────────┬──────────┬──────────────┬─────────────┐
│ id │ securityGroupRuleId │ securityGroup                  │ isEgress │ ipProtocol │ fromPort │ toPort │ cidrIpv4  │ cidrIpv6 │ prefixListId │ description │
├────┼─────────────────────┼────────────────────────────────┼──────────┼────────────┼──────────┼────────┼───────────┼──────────┼──────────────┼─────────────┤
│ 1  │                     │ quickstart-security-group      │ false    │ tcp        │ 8088     │ 8088   │ 0.0.0.0/0 │          │              │             │
│ 2  │                     │ quickstart-security-group      │ true     │ -1         │ -1       │ -1     │ 0.0.0.0/0 │          │              │             │
└────┴─────────────────────┴────────────────────────────────┴──────────┴────────────┴──────────┴────────┴───────────┴──────────┴──────────────┴─────────────┘
AwsSecurityGroup has 1 record to create
┌────┬────────────────────────────────┬────────────────────────────────┬─────────┬─────────┬──────────────┬────────────────────┐
│ id │ description                    │ groupName                      │ ownerId │ groupId │ vpcId        │ securityGroupRules │
├────┼────────────────────────────────┼────────────────────────────────┼─────────┼─────────┼──────────────┼────────────────────┤
│ 2  │ quickstart-security-group      │ quickstart-security-group      │         │         │ vpc-26f5734d │ ,                  │
└────┴────────────────────────────────┴────────────────────────────────┴─────────┴─────────┴──────────────┴────────────────────┘
AwsTargetGroup has 1 record to create
┌────┬───────────┬───────────┬───────────┬──────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┐
│ id │ targetGr+ │ targetGr+ │ ipAddres+ │ protocol │ port │ vpc       │ healthC+ │ healthC+ │ healthC+ │ healthC+ │ healthC+ │ unhealt+ │ healthC+ │ protoco+ │
├────┼───────────┼───────────┼───────────┼──────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┼──────────┼──────────┼──────────┼──────────┤
│ 1  │ quicksta+ │           │ ipv4      │ HTTP     │ 8088 │ vpc-26f5+ │ HTTP     │          │          │          │          │          │ /health  │ HTTP1    │
└────┴───────────┴───────────┴───────────┴──────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┴──────────┴──────────┴──────────┴──────────┘
AwsListener has 1 record to create
┌────┬─────────────┬───────────────────────────────┬──────┬──────────┬────────────────┐
│ id │ listenerArn │ loadBalancer                  │ port │ protocol │ defaultActions │
├────┼─────────────┼───────────────────────────────┼──────┼──────────┼────────────────┤
│ 1  │             │ quickstart-load-balancer      │ 8088 │ HTTP     │ forward        │
└────┴─────────────┴───────────────────────────────┴──────┴──────────┴────────────────┘
Cluster has 1 record to create
┌────┬─────────────────────────┬────────────┬───────────────┐
│ id │ clusterName             │ clusterArn │ clusterStatus │
├────┼─────────────────────────┼────────────┼───────────────┤
│ 3  │ quickstart-cluster      │            │               │
└────┴─────────────────────────┴────────────┴───────────────┘
Service has 1 record to create
┌────┬─────────────────────────┬─────┬────────┬─────────────────────────┬──────┬──────────────┬────────────┬────────────────────┬─────────┬───────────────┐
│ id │ name                    │ arn │ status │ cluster                 │ task │ desiredCount │ launchType │ schedulingStrategy │ network │ loadBalancers │
├────┼─────────────────────────┼─────┼────────┼─────────────────────────┼──────┼──────────────┼────────────┼────────────────────┼─────────┼───────────────┤
│ 1  │ quickstart-service      │     │        │ quickstart-cluster      │      │ 1            │ FARGATE    │ REPLICA            │ ENABLED │               │
└────┴─────────────────────────┴─────┴────────┴─────────────────────────┴──────┴──────────────┴────────────┴────────────────────┴─────────┴───────────────┘
AwsLoadBalancer has 1 record to create
┌────┬───────────┬───────────┬─────────┬───────────┬──────────┬──────────┬────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┐
│ id │ loadBala+ │ loadBala+ │ dnsName │ canonica+ │ created+ │ scheme   │ state  │ loadBal+ │ vpc      │ subnets  │ availab+ │ securit+ │ ipAddre+ │ custome+ │
├────┼───────────┼───────────┼─────────┼───────────┼──────────┼──────────┼────────┼──────────┼──────────┼──────────┼──────────┼──────────┼──────────┼──────────┤
│ 1  │ quicksta+ │           │         │           │          │ interne+ │ active │ applica+ │ vpc-26f+ │ arn:aws+ │ us-east+ │ quickst+ │ ipv4     │          │
└────┴───────────┴───────────┴─────────┴───────────┴──────────┴──────────┴────────┴──────────┴──────────┴──────────┴──────────┴──────────┴──────────┴──────────┘
```

## Login, build and push your code to the container registry

1. Install `psql` in your command line by following the instructions for your corresponding OS [here](https://www.postgresql.org/download/). Remember that many different clients can be used to [connect](/connect) to a PostgreSQL database.

2. Grab your new `ECR URI` from your DB
```bash
psql postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4 -c "
SELECT repository_uri
FROM aws_public_repository
WHERE repository_name = '<project-name>-repository';"
```

3. Login to AWS ECR using the AWS CLI. Run the following command and using the correct `<ECR-URI>` and AWS `<profile>`

```bash
aws ecr-public get-login-password --region us-east-1 --profile <profile> | docker login --username AWS --password-stdin <ECR-URI>
```

:::note

The region *must* be `us-east-1` for public repositories.

:::

4. Build your image locally

```bash
docker build -t <project-name>-repository app
```

5. Tag your image

```bash
docker tag <project-name>-repository:latest <ECR-URI>:latest
```

6. Push your image

```bash
docker push <ECR URI>:latest
```

7. Grab your load balancer DNS and access your service!
```bash
psql postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4 -c "
SELECT dns_name
FROM aws_load_balancer
WHERE load_balancer_name = '<project-name>-load-balancer';"
```

8. Connect to your service!

```
curl <DNS-NAME>:8088/health
```

## Clean up your environment

1. Delete all the docker images in the repository

```bash
aws ecr-public batch-delete-image \
      --repository-name <project-name>-repository \
      --profile <profile> \
      --image-ids imageTag=latest
```

2. Reverse the latest migration, which in this case only requires invoking the following command once:

```bash
typeorm migration:revert
```

3. Apply the changes described in the db to your cloud account

```bash
$ iasql apply startup
✔ Press enter to confirm apply · yes
...
```
