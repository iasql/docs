---
sidebar_position: 5
slug: '/private-ecr'
---

# Publish a container image to a private repository in AWS ECR

If you are creating an ECS task that is hosted on AWS Fargate, or on an external instance, and is pulling a container image from an Amazon ECR private repository you will need to have a ECS execution role.

Follow these instructions to create one: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html

Once you create the role, make sure the `aws_ecr` module has been added to your database with `SELECT iasql_install('aws_ecr');` and pass the ECS role ARN when inserting a row into the [ECS task definition](https://dbdocs.io/iasql/iasql?table=task_definition&schema=public&view=table_structure).