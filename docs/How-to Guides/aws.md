---
sidebar_position: 2
slug: '/aws'
---

# Manage an AWS Account

IaSQL requires cloud credentials to manage and provision resources. First, make sure you have an [IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html) in the [AWS console](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console) with **Programmatic access** and ensure it has sufficient permissions to deploy and manage your program’s resources. 

There are two parts to each [access key](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys), which you’ll see in the IAM console after you create it, an id and a secret. If you have previously installed and configured the AWS CLI, you can pick those credentials.

## View AWS CLI credentials

The [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) creates a plaintext credentials file on your machine that contains your existing AWS access keys. The file is named `credentials` and is located inside the `.aws/` directory in your home directory.

```bash
$ cat ~/.aws/credentials

[default]
aws_access_key_id = <YOUR_ACCESS_KEY_ID>
aws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>
```