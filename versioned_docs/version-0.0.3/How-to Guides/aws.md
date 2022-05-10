---
sidebar_position: 1
slug: '/aws'
---

# Manage an AWS Account

IaSQL requires cloud credentials to manage and provision resources which can be provided in one of two ways.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Option 1: Connect an account directly" label="Option 1: Connect an account directly" default>

  Connecting an AWS account directly will redirect you to the AWS console to create a new [IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html) with its credentials. Please make sure you are logged in to the correct AWS account. Please do not modify the fields in the cloud formation template or the account will be misconfigured.

  <img width={440} src={require('@site/static/screenshots/connect-direct.png').default} />

  </TabItem>
  <TabItem value="Option 2: Provide the credentials manually" label="Option 2: Provide the credentials manually">

  First, make sure you have an [IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html) in AWS or create one with **Programmatic access** through the [console/UI](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console) or [CLI](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_cliwpsapi). Ensure that the IAM role has sufficient permissions to deploy and manage all your infrastructure resources.

  There are two parts to each [access key](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys), which you’ll see in the IAM console/CLI after you create it, an id and a secret.

  <img width={440} src={require('@site/static/screenshots/connect-manual.png').default} />

  ## View existing AWS CLI credentials

  The [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) creates a plaintext credentials file on your machine that contains the AWS access keys that the CLI has access to. The file is named `credentials` and is located inside the `.aws/` directory in your home directory.

  ```bash
  $ cat ~/.aws/credentials

  [default]
  aws_access_key_id = <YOUR_ACCESS_KEY_ID>
  aws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>
  ```

  </TabItem>
</Tabs>

## Add the necessary cloud services to the hosted database

Connect to your database and use the `iasql_install` IaSQL PostgreSQL [function](/function) which is already loaded into your database to install different [modules](/module) and start managing different parts of your cloud account. Many different clients can be used to [connect](/connect) to a PostgreSQL database.

:::note

To see the available modules use the `modules_list` [function](/function) which will return a virtual table

:::

```sql
SELECT * from iasql_install(
   'aws_iam',
   'aws_cloudwatch',
   'aws_ecr',
   'aws_ecs_fargate',
   'aws_elb',
   'aws_security_group',
   'aws_vpc'
);
```