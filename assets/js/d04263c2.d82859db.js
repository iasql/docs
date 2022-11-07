"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7428],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return _}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),_=r,m=d["".concat(l,".").concat(_)]||d[_]||u[_]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function _(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2101:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return _},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1,slug:"/typeorm"},l="IaSQL on TypeORM (SQL ORM)",c={unversionedId:"ECS Fargate Tutorials/typeorm",id:"version-0.0.11/ECS Fargate Tutorials/typeorm",title:"IaSQL on TypeORM (SQL ORM)",description:"In this tutorial we will run TypeORM SQL migrations on top of IaSQL to deploy a Node.js HTTP server within a docker container on your AWS account using Fargate ECS, IAM, ECR and ELB. The container image will be hosted as a private repository in ECR and deployed to ECS using Fargate.",source:"@site/versioned_docs/version-0.0.11/ECS Fargate Tutorials/typeorm.md",sourceDirName:"ECS Fargate Tutorials",slug:"/typeorm",permalink:"/0.0.11/typeorm",draft:!1,tags:[],version:"0.0.11",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/typeorm"},sidebar:"tutorialSidebar",previous:{title:"Connecting to PostgreSQL",permalink:"/0.0.11/connect"},next:{title:"IaSQL on Flyway (SQL)",permalink:"/0.0.11/flyway"}},p={},u=[{value:"Start managing an AWS account with a hosted IaSQL db",id:"start-managing-an-aws-account-with-a-hosted-iasql-db",level:2},{value:"Add the necessary cloud services to the hosted database",id:"add-the-necessary-cloud-services-to-the-hosted-database",level:2},{value:"Connect to the hosted db and provision cloud resources in your AWS account",id:"connect-to-the-hosted-db-and-provision-cloud-resources-in-your-aws-account",level:2},{value:"Login, build and push your code to the container registry",id:"login-build-and-push-your-code-to-the-container-registry",level:2},{value:"Clean up the created cloud resources",id:"clean-up-the-created-cloud-resources",level:2}],d={toc:u};function _(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iasql-on-typeorm-sql-orm"},"IaSQL on TypeORM (SQL ORM)"),(0,o.kt)("p",null,"In this tutorial we will run ",(0,o.kt)("a",{parentName:"p",href:"https://typeorm.io/#/migrations"},"TypeORM SQL migrations")," on top of IaSQL to deploy a Node.js HTTP server within a docker container on your AWS account using Fargate ECS, IAM, ECR and ELB. The container image will be hosted as a private repository in ECR and deployed to ECS using Fargate."),(0,o.kt)("p",null,"The code for this tutorial can be found in this part of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iasql/ecs-fargate-examples/blob/main/typeorm/infra/src/migration/1646683871219-Initial.js"},"repository")),(0,o.kt)("h2",{id:"start-managing-an-aws-account-with-a-hosted-iasql-db"},"Start managing an AWS account with a hosted IaSQL db"),(0,o.kt)("p",null,"First, make sure you have an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html"},"IAM user")," in AWS or create one with ",(0,o.kt)("strong",{parentName:"p"},"Programmatic access")," through the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console"},"console/UI")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_cliwpsapi"},"CLI"),". Ensure that the IAM role has sufficient permissions to deploy and manage all your infrastructure resources."),(0,o.kt)("p",null,"There are two parts to each ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys"},"access key"),", which you\u2019ll see in the IAM console/CLI after you create it, an id and a secret. Input these in the connect account modal:"),(0,o.kt)("img",{width:440,src:n(8564).Z}),(0,o.kt)("p",null,"If you use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/"},"AWS CLI"),", you can look at the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdkref/latest/guide/file-location.html"},"credentials configured locally"),". In macOS and Linux this is as simple as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat ~/.aws/credentials\n[default]\naws_access_key_id = <YOUR_ACCESS_KEY_ID>\naws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>\n")),(0,o.kt)("p",null,"You will be able to see your PostgreSQL connection information when you press Connect."),(0,o.kt)("img",{width:440,src:n(42).Z}),(0,o.kt)("p",null,"Make sure to copy the PostgreSQL connection string as you will not see it again."),(0,o.kt)("h2",{id:"add-the-necessary-cloud-services-to-the-hosted-database"},"Add the necessary cloud services to the hosted database"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Many different clients can be used to ",(0,o.kt)("a",{parentName:"p",href:"/connect"},"connect")," to a PostgreSQL database. For this tutorial, we'll use the standard ",(0,o.kt)("inlineCode",{parentName:"p"},"psql")," CLI client. If you need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"psql"),", follow the instructions for your corresponding OS ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"here"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"up")," part of the first migration calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"iasql_install")," SQL function to install ",(0,o.kt)("a",{parentName:"p",href:"/module"},"modules")," into the hosted database."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="my_project/infra/src/migration/1646683871211-Install.js"',title:'"my_project/infra/src/migration/1646683871211-Install.js"'},"SELECT * from iasql_install(\n   'aws_iam',\n   'aws_cloudwatch',\n   'aws_ecr',\n   'aws_ecs_fargate',\n   'aws_elb',\n   'aws_security_group',\n   'aws_vpc'\n);\n")),(0,o.kt)("p",null,"If the function call is successful, it will return a virtual table with a record for each new table in your database under ",(0,o.kt)("inlineCode",{parentName:"p"},"created_table_name")," and the number of existing resources or records imported from the account under ",(0,o.kt)("inlineCode",{parentName:"p"},"record_count"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"       module_name        |      created_table_name       | record_count\n--------------------------+-------------------------------+--------------\n aws_cloudwatch@0.0.1     | log_group                     |            0\n aws_iam@0.0.1            | role                          |            0\n aws_ecr@0.0.1            | public_repository             |            0\n aws_ecr@0.0.1            | repository                    |            1\n aws_ecr@0.0.1            | repository_policy             |            0\n aws_security_group@0.0.1 | security_group                |            2\n aws_security_group@0.0.1 | security_group_rule           |            0\n aws_vpc@0.0.1            | vpc                           |            1\n aws_vpc@0.0.1            | subnet                        |            3\n aws_elb@0.0.1            | load_balancer                 |            0\n aws_elb@0.0.1            | target_group                  |            0\n aws_elb@0.0.1            | listener                      |            0\n aws_elb@0.0.1            | load_balancer_security_groups |            0\n aws_ecs_fargate@0.0.1    | cluster                       |            0\n aws_ecs_fargate@0.0.1    | service                       |            0\n aws_ecs_fargate@0.0.1    | task_definition               |            0\n aws_ecs_fargate@0.0.1    | container_definition          |            0\n aws_ecs_fargate@0.0.1    | service_security_groups       |            0\n(17 rows)\n")),(0,o.kt)("h2",{id:"connect-to-the-hosted-db-and-provision-cloud-resources-in-your-aws-account"},"Connect to the hosted db and provision cloud resources in your AWS account"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get a local copy of the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iasql/ecs-fargate-examples"},"ECS Fargate examples repository"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:iasql/ecs-fargate-examples.git my_project\ncd my_project\ngit filter-branch --subdirectory-filter typeorm\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install the Node.js project dependencies under the ",(0,o.kt)("inlineCode",{parentName:"li"},"my_project/infra")," folder")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd infra\nnpm i\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"(Optional) Set the desired project name that your resources will be named after by changing the ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"my_project/infra/package.json"),". If the name is not changed, ",(0,o.kt)("inlineCode",{parentName:"li"},"quickstart")," will be used.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"project-name")," can only contain alphanumeric characters and hyphens(-) because it will be used to name the load balancer")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("a",{parentName:"li",href:"https://typeorm.io/#/using-ormconfig/using-ormconfigjson"},(0,o.kt)("inlineCode",{parentName:"a"},"ormconfig.json"))," with the connection parameters provided on db creation. In this case:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="my_project/infra/ormconfig.json" {2-7}',title:'"my_project/infra/ormconfig.json"',"{2-7}":!0},'{\n   "type": "postgres",\n   "host": "db.iasql.com",\n   "username": "d0va6ywg",\n   "password": "nfdDh#EP4CyzveFr",\n   "database": "_4b2bb09a59a411e4",\n   "ssl": true,\n   "extra": {\n      "ssl": {\n         "rejectUnauthorized": false\n      }\n   },\n   "logging": false,\n   "migrations": [\n      "src/migration/**/*.js"\n   ],\n   "cli": {\n      "migrationsDir": "src/migration"\n   }\n}\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Run the existing TypeORM migrations on the hosted IaSQL db by invoking ",(0,o.kt)("inlineCode",{parentName:"li"},"typeorm")," CLI")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx typeorm migration:run\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"up")," part of the second, and last, migration will run the following ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iasql/ecs-fargate-examples/blob/main/typeorm/infra/src/migration/1646683871219-Initial.js"},"code"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="my_project/infra/1646683871219-Initial.js"',title:'"my_project/infra/1646683871219-Initial.js"'},"const pkg = require('../../package.json');\n// TODO replace with your desired project name\nconst PROJECT_NAME = pkg.name;\n\n// AWS ELASTIC CONTAINER REPOSITORY (ECR)\nconst region = !process.env.AWS_REGION ? '' : `-${process.env.AWS_REGION}`;\nconst REPOSITORY = `${PROJECT_NAME}-repository`;\n\n// AWS IAM\nconst TASK_ROLE_NAME = `ecsTaskExecRole-${region}`;\nconst TASK_ASSUME_POLICY = JSON.stringify({\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n      {\n          \"Sid\": \"\",\n          \"Effect\": \"Allow\",\n          \"Principal\": {\n              \"Service\": \"ecs-tasks.amazonaws.com\"\n          },\n          \"Action\": \"sts:AssumeRole\"\n      }\n  ]\n});\nconst TASK_POLICY_ARN = 'arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy';\n\n// AWS CLOUDWATCH\nconst LOG_GROUP = `${PROJECT_NAME}-log-group`\n\n// AWS FARGATE + ELASTIC CONTAINER SERVICE (ECS)\n// https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html\nconst TASK_DEF_RESOURCES = 'vCPU2-8GB'; // task_definition_cpu_memory enum\nconst TASK_DEF_FAMILY = `${PROJECT_NAME}-td`;\nconst SERVICE_DESIRED_COUNT = 1;\nconst IMAGE_TAG = 'latest';\nconst CONTAINER = `${PROJECT_NAME}-container`;\nconst CONTAINER_MEM_RESERVATION = 8192; // in MiB\nconst PROTOCOL = 'TCP';\nconst CLUSTER = `${PROJECT_NAME}-cluster`;\nconst SERVICE = `${PROJECT_NAME}-service`;\n\n// AWS SECURITY GROUP + VPC\nconst SECURITY_GROUP = `${PROJECT_NAME}-security-group`;\nconst PORT = 8088;\n\n// AWS ELASTIC LOAD BALANCER\nconst TARGET_GROUP = `${PROJECT_NAME}-target`;\nconst LOAD_BALANCER = `${PROJECT_NAME}-load-balancer`;\n\nmodule.exports = class Initial1646683871219 {\n\n  async up(queryRunner) {\n    // security group\n    await queryRunner.query(`\n      BEGIN;\n        INSERT INTO security_group (description, group_name)\n        VALUES ('${PROJECT_NAME} security group', '${SECURITY_GROUP}');\n\n        INSERT INTO security_group_rule (is_egress, ip_protocol, from_port, to_port, cidr_ipv4, description, security_group_id)\n        SELECT false, 'tcp', ${PORT}, ${PORT}, '0.0.0.0/0', '${SECURITY_GROUP}', id\n        FROM security_group\n        WHERE group_name = '${SECURITY_GROUP}';\n\n        INSERT INTO security_group_rule (is_egress, ip_protocol, from_port, to_port, cidr_ipv4, description, security_group_id)\n        SELECT true, '-1', -1, -1, '0.0.0.0/0', '${SECURITY_GROUP}', id\n        FROM security_group\n        WHERE group_name = '${SECURITY_GROUP}';\n      COMMIT;\n    `);\n\n    // load balancer\n    await queryRunner.query(`\n      BEGIN;\n        INSERT INTO target_group\n            (target_group_name, target_type, protocol, port, health_check_path)\n        VALUES\n            ('${TARGET_GROUP}', 'ip', 'HTTP', ${PORT}, '/health');\n\n        INSERT INTO load_balancer\n            (load_balancer_name, scheme, load_balancer_type, ip_address_type)\n        VALUES\n            ('${LOAD_BALANCER}', 'internet-facing', 'application', 'ipv4');\n\n        INSERT INTO load_balancer_security_groups\n            (load_balancer_name, security_group_id)\n        VALUES\n            ('${LOAD_BALANCER}',\n              (SELECT id FROM security_group WHERE group_name = '${SECURITY_GROUP}' LIMIT 1));\n\n        INSERT INTO listener\n            (load_balancer_name, port, protocol, action_type, target_group_name)\n        VALUES\n            ('${LOAD_BALANCER}',\n              ${PORT}, 'HTTP', 'forward', '${TARGET_GROUP}');\n      COMMIT;\n    `);\n\n    // container (ECR + ECS)\n    await queryRunner.query(`\n      BEGIN;\n        INSERT INTO log_group (log_group_name) VALUES ('${LOG_GROUP}');\n\n        INSERT INTO repository (repository_name) VALUES ('${REPOSITORY}');\n\n        INSERT INTO cluster (cluster_name) VALUES('${CLUSTER}');\n\n        INSERT INTO role (role_name, assume_role_policy_document, attached_policies_arns)\n        VALUES ('${TASK_ROLE_NAME}', '${TASK_ASSUME_POLICY}', array['${TASK_POLICY_ARN}']);\n\n        INSERT INTO task_definition (\"family\", task_role_name, execution_role_name, cpu_memory)\n        VALUES ('${TASK_DEF_FAMILY}', '${TASK_ROLE_NAME}', '${TASK_ROLE_NAME}', '${TASK_DEF_RESOURCES}');\n\n        INSERT INTO container_definition (\"name\", essential, repository_name, task_definition_id, tag, memory_reservation, host_port, container_port, protocol, log_group_name)\n        VALUES (\n          '${CONTAINER}', true,\n          '${REPOSITORY}',\n          (select id from task_definition where family = '${TASK_DEF_FAMILY}' and status is null limit 1),\n          '${IMAGE_TAG}', ${CONTAINER_MEM_RESERVATION}, ${PORT}, ${PORT}, '${PROTOCOL.toLowerCase()}', '${LOG_GROUP}'\n        );\n      COMMIT;\n    `);\n\n    // create ECS service and associate it to security group\n    await queryRunner.query(`\n      BEGIN;\n        INSERT INTO service (\"name\", desired_count, assign_public_ip, subnets, cluster_name, task_definition_id, target_group_name)\n        VALUES (\n          '${SERVICE}', ${SERVICE_DESIRED_COUNT}, 'ENABLED',\n          (select array(select subnet_id from subnet inner join vpc on vpc.id = subnet.vpc_id where is_default = true limit 3)),\n          '${CLUSTER}',\n          (select id from task_definition where family = '${TASK_DEF_FAMILY}' order by revision desc limit 1),\n          '${TARGET_GROUP}'\n        );\n\n        INSERT INTO service_security_groups (service_name, security_group_id)\n        VALUES (\n          '${SERVICE}',\n          (select id from security_group where group_name = '${SECURITY_GROUP}' limit 1)\n        );\n      COMMIT;\n    `);\n\n    // apply the changes\n    await queryRunner.query(`\n      SELECT * FROM iasql_apply();\n    `);\n  }\n\n  // order matters\n  async down(queryRunner) {\n    // delete ECS service\n    await queryRunner.query(`\n      BEGIN;\n        DELETE FROM service_security_groups\n        USING service\n        WHERE name = '${SERVICE}';\n\n        DELETE FROM service WHERE name = '${SERVICE}';\n      COMMIT;\n    `);\n\n    // delete ECS + ECR\n    await queryRunner.query(`\n      BEGIN;\n        DELETE FROM container_definition\n        USING task_definition\n        WHERE container_definition.task_definition_id = task_definition.id and task_definition.family = '${TASK_DEF_FAMILY}';\n\n        DELETE FROM task_definition WHERE family = '${TASK_DEF_FAMILY}';\n\n        DELETE FROM role WHERE role_name = '${TASK_ROLE_NAME}';\n\n        DELETE FROM cluster WHERE cluster_name = '${CLUSTER}';\n\n        DELETE FROM repository WHERE repository_name = '${REPOSITORY}';\n\n        DELETE FROM log_group WHERE log_group_name = '${LOG_GROUP}';\n      COMMIT;\n    `);\n\n    // delete ELB\n    await queryRunner.query(`\n      BEGIN;\n        DELETE FROM listener\n        WHERE load_balancer_name = '${LOAD_BALANCER}' AND target_group_name = '${TARGET_GROUP}';\n\n        DELETE FROM load_balancer_security_groups\n        WHERE load_balancer_name = '${LOAD_BALANCER}';\n\n        DELETE FROM load_balancer\n        WHERE load_balancer_name = '${LOAD_BALANCER}';\n\n        DELETE FROM target_group\n        WHERE target_group_name = '${TARGET_GROUP}';\n      COMMIT;\n    `);\n\n    // delete security groups\n    await queryRunner.query(`\n      BEGIN;\n        DELETE FROM security_group_rule\n        USING security_group\n        WHERE security_group.id = security_group_rule.security_group_id AND security_group.group_name = '${SECURITY_GROUP}';\n\n        DELETE FROM security_group WHERE group_name = '${SECURITY_GROUP}';\n      COMMIT;\n    `);\n  }\n}\n")),(0,o.kt)("p",null,"The last part of the migration will apply the changes described in the hosted db to your cloud account which will take a few minutes waiting for AWS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="my_project/infra/1646683871219-Initial.js"',title:'"my_project/infra/1646683871219-Initial.js"'},"SELECT * from iasql_apply();\n")),(0,o.kt)("p",null,"If the function call is successful, it will return a virtual table with a record for each cloud resource that has been created, deleted or updated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"}," action |    table_name       |   id   |      description      \n--------+---------------------+--------+-----------------------\n create | public_repository   |      2 | quickstart-repository\n create | cluster             |      2 | 2\n create | task_definition     |      2 | 2\n create | service             |      2 | 2\n create | listener            |      2 | 2\n create | load_balancer       |      2 | 2\n create | target_group        |      2 | 2\n create | security_group      |      5 | 5\n create | security_group_rule |      3 | 3\n create | security_group_rule |      4 | 4\n")),(0,o.kt)("h2",{id:"login-build-and-push-your-code-to-the-container-registry"},"Login, build and push your code to the container registry"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Grab your new ",(0,o.kt)("inlineCode",{parentName:"li"},"ECR URI")," from the hosted DB")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"QUICKSTART_ECR_URI=$(psql -At postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4 -c \"\nSELECT repository_uri\nFROM repository\nWHERE repository_name = '<project-name>-repository';\")\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Login to AWS ECR using the AWS CLI. Run the following command and using the correct ",(0,o.kt)("inlineCode",{parentName:"li"},"<ECR-URI>")," and AWS ",(0,o.kt)("inlineCode",{parentName:"li"},"<profile>"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws ecr get-login-password --region ${AWS_REGION} --profile <profile> | docker login --username AWS --password-stdin ${QUICKSTART_ECR_URI}\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Build your image locally")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t <project-name>-repository app\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Tag your image")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker tag <project-name>-repository:latest ${QUICKSTART_ECR_URI}:latest\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Push your image")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker push ${QUICKSTART_ECR_URI}:latest\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Grab your load balancer DNS and access your service!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"QUICKSTART_LB_DNS=$(psql -At postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4 -c \"\nSELECT dns_name\nFROM load_balancer\nWHERE load_balancer_name = '<project-name>-load-balancer';\")\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Connect to your service!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl ${QUICKSTART_LB_DNS}:8088/health\n")),(0,o.kt)("h2",{id:"clean-up-the-created-cloud-resources"},"Clean up the created cloud resources"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Delete all the docker images in the repository")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws ecr batch-delete-image \\\n      --repository-name <project-name>-repository \\\n      --profile <profile> \\\n      --image-ids imageTag=latest\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Reverse the latest migration, which in this case only requires invoking the following command once:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx typeorm migration:revert\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"down")," part of the second, and last, migration is called which reverts the changes and calls the ",(0,o.kt)("inlineCode",{parentName:"li"},"iasql_apply")," function:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="my_project/infra/1646683871219-Initial.js"',title:'"my_project/infra/1646683871219-Initial.js"'},"...\nSELECT * from iasql_apply();\n")),(0,o.kt)("p",null,"If the function call is successful, it will return a virtual table with a record for each cloud resource that has been created, deleted or updated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"}," action |     table_name      |   id   |                                                         description                                                         \n--------+---------------------+--------+-----------------------------------------------------------------------------------------------------------------------------\n delete | cluster             | [NULL] | arn:aws:ecs:sa-east-1:658401754851:cluster/quickstart-cluster\n delete | task_definition     | [NULL] | arn:aws:ecs:sa-east-1:658401754851:task-definition/quickstart-td:1\n delete | service             | [NULL] | arn:aws:ecs:sa-east-1:658401754851:service/quickstart-cluster/quickstart-service\n delete | listener            | [NULL] | arn:aws:elasticloadbalancing:sa-east-1:658401754851:listener/app/quickstart-load-balancer/3925cdb9acada7c1/7a459d6259dac5c9\n delete | load_balancer       | [NULL] | arn:aws:elasticloadbalancing:sa-east-1:658401754851:loadbalancer/app/quickstart-load-balancer/3925cdb9acada7c1\n delete | target_group        | [NULL] | arn:aws:elasticloadbalancing:sa-east-1:658401754851:targetgroup/quickstart-target/826f804f496d0a90\n delete | security_group      | [NULL] | sg-0015b0e07bd10b7d2\n delete | security_group      | [NULL] | sg-e0df1095\n delete | security_group_rule | [NULL] | sgr-06aa0915b15fd23a9\n delete | security_group_rule | [NULL] | sgr-02e2096ac9e77a5bf\n delete | role                | [NULL] | ecsTaskExecRole\n\n")))}_.isMDXComponent=!0},8564:function(e,t,n){t.Z=n.p+"assets/images/connect-manual-e63b01dcc9e09dc833a0bdb76389a108.png"},42:function(e,t,n){t.Z=n.p+"assets/images/credentials-c7276030daeda6ddbe3e6c8d01118a72.png"}}]);