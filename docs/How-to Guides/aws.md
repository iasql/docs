---
sidebar_position: 2
slug: '/aws'
---

# Manage an AWS Account

IaSQL requires cloud credentials to manage and provision resources. First, make sure you have an [IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html) in AWS or create one with **Programmatic access** through the [console/UI](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console) or [CLI](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_cliwpsapi). Ensure that the IAM role has sufficient permissions to deploy and manage all your infrastructure resources.

There are two parts to each [access key](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys), which you’ll see in the IAM console/CLI after you create it, an id and a secret.

![](/screenshots/credentials.png)

## View existing AWS CLI credentials

The [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) creates a plaintext credentials file on your machine that contains the AWS access keys that the CLI has access to. The file is named `credentials` and is located inside the `.aws/` directory in your home directory.

```bash
$ cat ~/.aws/credentials

[default]
aws_access_key_id = <YOUR_ACCESS_KEY_ID>
aws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>
```

## Directly connect an AWS account to an IaSQL database

![](/screenshots/connect-direct.png)
