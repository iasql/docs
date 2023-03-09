"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5245],{518:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"0.0.13","label":"0.0.13","banner":"unmaintained","badge":true,"className":"docs-version-0.0.13","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Getting Started","href":"/0.0.13/","docId":"getting-started"},{"type":"category","label":"Sample Queries","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"AWS EC2","href":"/0.0.13/ec2","docId":"sample-queries/aws_ec2"}]},{"type":"category","label":"How-to Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Manage an AWS Account","href":"/0.0.13/aws","docId":"how-to/aws"},{"type":"link","label":"Connecting to PostgreSQL","href":"/0.0.13/connect","docId":"how-to/connect"}]},{"type":"category","label":"ECS Fargate Tutorials","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"IaSQL on TypeORM (SQL ORM)","href":"/0.0.13/typeorm","docId":"fargate-tutorials/typeorm"},{"type":"link","label":"IaSQL on Flyway (SQL)","href":"/0.0.13/flyway","docId":"fargate-tutorials/flyway"},{"type":"link","label":"IaSQL on Prisma (Javascript)","href":"/0.0.13/prisma","docId":"fargate-tutorials/prisma"},{"type":"link","label":"IaSQL on Django (Python)","href":"/0.0.13/django","docId":"fargate-tutorials/django"}]},{"type":"category","label":"Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Database","href":"/0.0.13/database","docId":"concepts/db"},{"type":"link","label":"Module","href":"/0.0.13/module","docId":"concepts/module"}]},{"type":"category","label":"Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"IaSQL PostgreSQL Functions","href":"/0.0.13/function","docId":"reference/function"}]}]},"docs":{"concepts/db":{"id":"concepts/db","title":"Database","description":"An IaSQL Database feels a lot like a Postgres database. Because that is what it is: a 100% standard Postgres database with zero extensions, and anything you can do with a Postgres database you can do with an IaSQL database.","sidebar":"tutorialSidebar"},"concepts/module":{"id":"concepts/module","title":"Module","description":"The concept of modules comes from programming languages, and is a distinct block of code that is well-isolated from other code and can be loaded with other modules and used together for some other purpose, like modular building blocks that you may have played with as a kid.","sidebar":"tutorialSidebar"},"fargate-tutorials/django":{"id":"fargate-tutorials/django","title":"IaSQL on Django (Python)","description":"In this tutorial we will run Django SQL migrations on top of IaSQL to deploy a HTTP server within a docker container on your AWS account using ECS, ECR and ELB. The container image will be hosted as a public repository in ECR and deployed to ECS using Fargate.","sidebar":"tutorialSidebar"},"fargate-tutorials/flyway":{"id":"fargate-tutorials/flyway","title":"IaSQL on Flyway (SQL)","description":"In this tutorial we will run Flyway SQL migrations on top of IaSQL to deploy a Node.js HTTP server within a docker container on your AWS account using Fargate ECS, IAM, ECR and ELB. The container image will be hosted as a private repository in ECR and deployed to ECS using Fargate.","sidebar":"tutorialSidebar"},"fargate-tutorials/prisma":{"id":"fargate-tutorials/prisma","title":"IaSQL on Prisma (Javascript)","description":"In this tutorial we will use a script that uses Prisma to instrospect the schema of an IaSQL database and deploy a Node.js HTTP server within a docker container on your AWS account using Fargate ECS, IAM, ECR and ELB. The container image will be hosted as a private repository in ECR and deployed to ECS using Fargate.","sidebar":"tutorialSidebar"},"fargate-tutorials/typeorm":{"id":"fargate-tutorials/typeorm","title":"IaSQL on TypeORM (SQL ORM)","description":"In this tutorial we will run TypeORM SQL migrations on top of IaSQL to deploy a Node.js HTTP server within a docker container on your AWS account using Fargate ECS, IAM, ECR and ELB. The container image will be hosted as a private repository in ECR and deployed to ECS using Fargate.","sidebar":"tutorialSidebar"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"IaSQL is an open-source SaaS to manage cloud infrastructure using a unmodified PostgreSQL database by maintaining a 2-way connection between the hosted database and your AWS account. The rows in the database tables represent the infrastructure in your cloud account. Our dashboard provisions a PostgreSQL database for you and configures it to manage an AWS account and region. The database is automatically backfilled with all your existing cloud resources. Which tables are loaded into an IaSQL database is configured based on what IaSQL modules are installed in a db. Every IaSQL module represents a cloud service like awsec2 or awselb. Once the desired modules are installed with the install IaSQL PostgreSQL function, run INSERT or UPDATE queries on the database by using the PG connection string displayed when you first set up in the dashboard with your preferred PostgreSQL client. Finally run the iasql_apply PostgreSQL function to provision infrastructure in your cloud account based on the IaSQL db.","sidebar":"tutorialSidebar"},"how-to/aws":{"id":"how-to/aws","title":"Manage an AWS Account","description":"IaSQL requires cloud credentials to manage and provision resources which can be provided in one of two ways.","sidebar":"tutorialSidebar"},"how-to/connect":{"id":"how-to/connect","title":"Connecting to PostgreSQL","description":"The required information to connect to a PostgreSQL IaSQL database will provided when you connect an AWS account when provisioning the database. IaSQL does not store your database password so it will only be displayed when the database is provisioned. If you lose the password, you can recreate the database by disconnecting and connecting your account again using the same region and AWS credentials.","sidebar":"tutorialSidebar"},"reference/function":{"id":"reference/function","title":"IaSQL PostgreSQL Functions","description":"| name               | signature                          | description                                                           | sample usage                                          |","sidebar":"tutorialSidebar"},"sample-queries/aws_ec2":{"id":"sample-queries/aws_ec2","title":"AWS EC2","description":"Create and update instances","sidebar":"tutorialSidebar"}}}')}}]);