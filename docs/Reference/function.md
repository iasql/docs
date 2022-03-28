---
sidebar_position: 1
slug: '/function'
---

# IaSQL PostgreSQL Functions

| name       | signature                     | description                                                           | sample usage                   |
| -----------| ----------------------------- | --------------------------------------------------------------------- | ------------------------------ |
| apply      | `iasql_apply()`               | Create, delete or update the cloud resources in a hosted db           | `SELECT * FROM iasql_apply()`         |
| plan_apply | `iasql_plan_apply()`          | Preview of the resources in the db to be modified on the next `apply` | `SELECT * FROM iasql_plan_apply()`    |
| sync       | `iasql_sync()`                | Synchronize the hosted db with the current state of the cloud account | `SELECT * FROM iasql_sync()`          |
| plan_sync  | `iasql_plan_sync()`           | Preview of the resources in the db to be modified on the next `sync`  | `SELECT * FROM iasql_plan_sync()`     |
| install    | `iasql_install(variadic text[])`   | Install mods(s) in hosted db  | `SELECT * FROM iasql_install('aws_vpc@0.0.1', 'aws_ec2@0.0.1')`   |
| uninstall  | `iasql_uninstall(variadic text[])` | Uninstall mod(s) in hosted db | `SELECT * FROM iasql_uninstall('aws_vpc@0.0.1', 'aws_ec2@0.0.1')` |
