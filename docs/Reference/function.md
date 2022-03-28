---
sidebar_position: 1
slug: '/function'
---

# IaSQL PostgreSQL Functions

| name       | signature                     | description                                                           | sample usage                   |
| -----------| ----------------------------- | --------------------------------------------------------------------- | ------------------------------ |
| apply      | `iasql_apply()`               | Create, delete or update the cloud resources in a hosted db           | `SELECT iasql_apply()`         |
| plan_apply | `iasql_plan_apply()`          | Preview of the resources in the db to be modified on the next `apply` | `SELECT iasql_plan_apply()`    |
| sync       | `iasql_sync()`                | Synchronize the hosted db with the current state of the cloud account | `SELECT iasql_sync()`          |
| plan_sync  | `iasql_plan_sync()`           | Preview of the resources in the db to be modified on the next `sync`  | `SELECT iasql_plan_sync()`     |
| install    | `iasql_install(variadic text[])`   | Install mods(s) in hosted db  | `SELECT iasql_install('aws_vpc@0.0.1', 'aws_ec2@0.0.1')`   |
| uninstall  | `iasql_uninstall(variadic text[])` | Uninstall mod(s) in hosted db | `SELECT iasql_uninstall('aws_vpc@0.0.1', 'aws_ec2@0.0.1')` |
