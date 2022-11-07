"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1490],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2163:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],l={sidebar_position:2,slug:"/flyway"},i="IaSQL on Flyway (SQL)",c={unversionedId:"ECS Fargate Tutorials/flyway",id:"version-0.0.11/ECS Fargate Tutorials/flyway",title:"IaSQL on Flyway (SQL)",description:"In this tutorial we will run Flyway SQL migrations on top of IaSQL to deploy a Node.js HTTP server within a docker container on your AWS account using Fargate ECS, IAM, ECR and ELB. The container image will be hosted as a private repository in ECR and deployed to ECS using Fargate.",source:"@site/versioned_docs/version-0.0.11/ECS Fargate Tutorials/flyway.md",sourceDirName:"ECS Fargate Tutorials",slug:"/flyway",permalink:"/0.0.11/flyway",draft:!1,tags:[],version:"0.0.11",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/flyway"},sidebar:"tutorialSidebar",previous:{title:"IaSQL on TypeORM (SQL ORM)",permalink:"/0.0.11/typeorm"},next:{title:"IaSQL on Prisma (Javascript)",permalink:"/0.0.11/prisma"}},p={},u=[{value:"Start managing an AWS account with a hosted IaSQL db",id:"start-managing-an-aws-account-with-a-hosted-iasql-db",level:2},{value:"Add the necessary cloud services to the hosted database",id:"add-the-necessary-cloud-services-to-the-hosted-database",level:2},{value:"Connect to the hosted db and provision cloud resources in your AWS account",id:"connect-to-the-hosted-db-and-provision-cloud-resources-in-your-aws-account",level:2},{value:"Login, build and push your code to the container registry",id:"login-build-and-push-your-code-to-the-container-registry",level:2},{value:"Delete managed cloud resources",id:"delete-managed-cloud-resources",level:2}],d={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iasql-on-flyway-sql"},"IaSQL on Flyway (SQL)"),(0,o.kt)("p",null,"In this tutorial we will run ",(0,o.kt)("a",{parentName:"p",href:"https://flywaydb.org/documentation/concepts/migrations"},"Flyway SQL migrations")," on top of IaSQL to deploy a Node.js HTTP server within a docker container on your AWS account using Fargate ECS, IAM, ECR and ELB. The container image will be hosted as a private repository in ECR and deployed to ECS using Fargate."),(0,o.kt)("p",null,"The code for this tutorial lives in this part of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iasql/ecs-fargate-examples/blob/main/flyway/migrations/V2__init.sql"},"repository")),(0,o.kt)("h2",{id:"start-managing-an-aws-account-with-a-hosted-iasql-db"},"Start managing an AWS account with a hosted IaSQL db"),(0,o.kt)("p",null,"First, make sure you have an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html"},"IAM user")," in AWS or create one with ",(0,o.kt)("strong",{parentName:"p"},"Programmatic access")," through the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console"},"console/UI")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_cliwpsapi"},"CLI"),". Ensure that the IAM role has sufficient permissions to deploy and manage all your infrastructure resources."),(0,o.kt)("p",null,"There are two parts to each ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys"},"access key"),", which you\u2019ll see in the IAM console/CLI after you create it, an id and a secret. Input these in the connect account modal:"),(0,o.kt)("img",{width:440,src:a(8564).Z}),(0,o.kt)("p",null,"If you use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/"},"AWS CLI"),", you can look at the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdkref/latest/guide/file-location.html"},"credentials configured locally"),". In macOS and Linux this is as simple as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat ~/.aws/credentials\n[default]\naws_access_key_id = <YOUR_ACCESS_KEY_ID>\naws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>\n")),(0,o.kt)("p",null,"You will be able to see your PostgreSQL connection information when you press Connect."),(0,o.kt)("img",{width:440,src:a(42).Z}),(0,o.kt)("p",null,"Make sure to copy the PostgreSQL connection string as you will not see it again."),(0,o.kt)("h2",{id:"add-the-necessary-cloud-services-to-the-hosted-database"},"Add the necessary cloud services to the hosted database"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Many different clients can be used to ",(0,o.kt)("a",{parentName:"p",href:"/connect"},"connect")," to a PostgreSQL database. For this tutorial, we'll use the standard ",(0,o.kt)("inlineCode",{parentName:"p"},"psql")," CLI client. If you need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"psql"),", follow the instructions for your corresponding OS ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"here"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The first migration calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"iasql_install")," SQL function to install ",(0,o.kt)("a",{parentName:"p",href:"/module"},"modules")," into the hosted database."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="my_project/migrations/V1__install.sql"',title:'"my_project/migrations/V1__install.sql"'},"SELECT * from iasql_install(\n   'aws_iam',\n   'aws_cloudwatch',\n   'aws_ecr',\n   'aws_ecs_fargate',\n   'aws_elb',\n   'aws_security_group',\n   'aws_vpc'\n);\n")),(0,o.kt)("p",null,"If the function call is successful, it will return a virtual table with a record for each new table in your database under ",(0,o.kt)("inlineCode",{parentName:"p"},"created_table_name")," and the number of existing resources or records imported from the account under ",(0,o.kt)("inlineCode",{parentName:"p"},"record_count"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"       module_name        |      created_table_name       | record_count\n--------------------------+-------------------------------+--------------\n aws_cloudwatch@0.0.1     | log_group                     |            0\n aws_iam@0.0.1            | role                          |            0\n aws_ecr@0.0.1            | public_repository             |            0\n aws_ecr@0.0.1            | repository                    |            1\n aws_ecr@0.0.1            | repository_policy             |            0\n aws_security_group@0.0.1 | security_group                |            2\n aws_security_group@0.0.1 | security_group_rule           |            0\n aws_vpc@0.0.1            | vpc                           |            1\n aws_vpc@0.0.1            | subnet                        |            3\n aws_elb@0.0.1            | load_balancer                 |            0\n aws_elb@0.0.1            | target_group                  |            0\n aws_elb@0.0.1            | listener                      |            0\n aws_elb@0.0.1            | load_balancer_security_groups |            0\n aws_ecs_fargate@0.0.1    | cluster                       |            0\n aws_ecs_fargate@0.0.1    | service                       |            0\n aws_ecs_fargate@0.0.1    | task_definition               |            0\n aws_ecs_fargate@0.0.1    | container_definition          |            0\n aws_ecs_fargate@0.0.1    | service_security_groups       |            0\n(17 rows)\n")),(0,o.kt)("h2",{id:"connect-to-the-hosted-db-and-provision-cloud-resources-in-your-aws-account"},"Connect to the hosted db and provision cloud resources in your AWS account"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get a local copy of the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iasql/ecs-fargate-examples"},"ECS Fargate examples repository"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:iasql/ecs-fargate-examples.git my_project\ncd my_project\ngit filter-branch --subdirectory-filter flyway\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install the Node.js project dependencies under the ",(0,o.kt)("inlineCode",{parentName:"li"},"my_project/infra")," folder")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd infra\nnpm i\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("a",{parentName:"li",href:"https://flywaydb.org/documentation/configuration/configfile"},(0,o.kt)("inlineCode",{parentName:"a"},"flyway.conf"))," with the connection parameters provided on db creation. In this case:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="my_project/flyway.conf" {1-4}',title:'"my_project/flyway.conf"',"{1-4}":!0},"flyway.url=jdbc:postgresql://db.iasql.com/_4b2bb09a59a411e4\nflyway.user=d0va6ywg\nflyway.password=nfdDh#EP4CyzveFr\nflyway.locations=filesystem:migrations\nflyway.failOnMissingLocations=true\n\n# Run all migrations by seting the baseline version for v0\n# https://flywaydb.org/documentation/configuration/parameters/baselineVersion\nflyway.baselineVersion=0.0\nflyway.baselineOnMigrate=true\nflyway.validateMigrationNaming=true\n# Flyway supports placeholder replacement with configurable prefixes and suffixes.\n# By default it looks for Ant-style placeholders like ${myplaceholder} in SQL syntax\nflyway.placeholders.region=us-east-2\nflyway.placeholders.project_name=quickstart\nflyway.placeholders.task_def_resources=vCPU2-8GB\nflyway.placeholders.image_tag=latest\nflyway.placeholders.container_mem_reservation=8192\nflyway.placeholders.port=8088\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"(Optional) Set the desired project name that your resources will be named after by changing ",(0,o.kt)("inlineCode",{parentName:"li"},"flyway.placeholders.projectName")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"my_project/flyway.conf"),". If the name is not changed, ",(0,o.kt)("inlineCode",{parentName:"li"},"quickstart")," will be used.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"project-name")," can only contain alphanumeric characters and hyphens(-) because it will be used to name the load balancer")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"flyway")," CLI following the ",(0,o.kt)("a",{parentName:"p",href:"https://flywaydb.org/documentation/usage/commandline/"},"corresponding instructions")," for your OS")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the existing Flyway migrations on the hosted IaSQL db by invoking the ",(0,o.kt)("inlineCode",{parentName:"p"},"flyway")," CLI"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"flyway migrate\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iasql/ecs-fargate-examples/blob/main/flyway/migrations/V2__init.sql"},"second migration")," will run the following SQL code. Flyway supports placeholder replacement with configurable prefixes and suffixes. By default it looks for Ant-style placeholders like ",(0,o.kt)("inlineCode",{parentName:"li"},"${myplaceholder}")," in SQL syntax")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="my_project/migrations/V2__init.sql"',title:'"my_project/migrations/V2__init.sql"'},"-- we use transactions to make sure we don't leave cruft behind in case an insert fails\n-- make sure the correct iasql modules are installed or the tables won't exist\n\n-- AWS SECURITY GROUPS\nBEGIN;\n  INSERT INTO security_group (description, group_name)\n  VALUES ('${project_name} security group', '${project_name}-security-group');\n\n  INSERT INTO security_group_rule (is_egress, ip_protocol, from_port, to_port, cidr_ipv4, description, security_group_id)\n  SELECT false, 'tcp', ${port}, ${port}, '0.0.0.0/0', '${project_name}-security-group', id\n  FROM security_group\n  WHERE group_name = '${project_name}-security-group';\n\n  INSERT INTO security_group_rule (is_egress, ip_protocol, from_port, to_port, cidr_ipv4, description, security_group_id)\n  SELECT true, '-1', -1, -1, '0.0.0.0/0', '${project_name}-security-group', id\n  FROM security_group\n  WHERE group_name = '${project_name}-security-group';\nCOMMIT;\n\n-- AWS ELASTIC LOAD BALANCER\nBEGIN;\n  INSERT INTO target_group\n      (target_group_name, target_type, protocol, port, health_check_path)\n  VALUES\n      ('${project_name}-target', 'ip', 'HTTP', ${port}, '/health');\n\n  INSERT INTO load_balancer\n      (load_balancer_name, scheme, load_balancer_type, ip_address_type)\n  VALUES\n      ('${project_name}-load-balancer', 'internet-facing', 'application', 'ipv4');\n\n  INSERT INTO load_balancer_security_groups\n      (load_balancer_name, security_group_id)\n  VALUES\n      ('${project_name}-load-balancer',\n        (SELECT id FROM security_group WHERE group_name = '${project_name}-security-group' LIMIT 1)\n      );\n\n  INSERT INTO listener\n      (load_balancer_name, port, protocol, action_type, target_group_name)\n  VALUES\n      ('${project_name}-load-balancer',\n        ${port}, 'HTTP', 'forward', '${project_name}-target');\nCOMMIT;\n\n-- ELASTIC CONTAINER REPOSITORY (ECR) + ELASTIC CONTAINER SERVICE (ECS) + CLOUDWATCH\n-- https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html\nBEGIN;\n  INSERT INTO log_group (log_group_name) VALUES ('${project_name}-log-group');\n\n  INSERT INTO repository (repository_name) VALUES ('${project_name}-repository');\n\n  INSERT INTO cluster (cluster_name) VALUES('${project_name}-cluster');\n\n  INSERT INTO role (role_name, assume_role_policy_document, attached_policies_arns)\n  VALUES ('ecsTaskExecRole${region}', '{\"Version\":\"2012-10-17\",\"Statement\":[{\"Sid\":\"\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":\"ecs-tasks.amazonaws.com\"},\"Action\":\"sts:AssumeRole\"}]}', array['arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy']);\n\n  INSERT INTO task_definition (\"family\", task_role_name, execution_role_name, cpu_memory)\n  VALUES ('${project_name}-td', 'ecsTaskExecRole${region}', 'ecsTaskExecRole${region}', '${task_def_resources}');\n\n  INSERT INTO container_definition (\"name\", essential, repository_name, task_definition_id, tag, memory_reservation, host_port, container_port, protocol, log_group_name)\n  VALUES (\n    '${project_name}-container', true,\n    '${project_name}-repository',\n    (select id from task_definition where family = '${project_name}-td' and status is null limit 1),\n    '${image_tag}', ${container_mem_reservation}, ${port}, ${port}, 'tcp', '${project_name}-log-group'\n  );\nCOMMIT;\n\n-- create ECS service and associate it to security group\nBEGIN;\n  INSERT INTO service (\"name\", desired_count, assign_public_ip, subnets, cluster_name, task_definition_id, target_group_name)\n  VALUES (\n    '${project_name}-service', 1, 'ENABLED',\n    (select array(select subnet_id from subnet inner join vpc on vpc.id = subnet.vpc_id where is_default = true limit 3)),\n    '${project_name}-cluster',\n    (select id from task_definition where family = '${project_name}-td' order by revision desc limit 1),\n    '${project_name}-target'\n  );\n\n  INSERT INTO service_security_groups (service_name, security_group_id)\n  VALUES (\n    '${project_name}-service',\n    (select id from security_group where group_name = '${project_name}-security-group' limit 1)\n  );\nCOMMIT;\n")),(0,o.kt)("p",null,"Finally, it will apply the changes described in the hosted db to your cloud account which will take a few minutes waiting for AWS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="my_project/migrations/V2__init.sql"',title:'"my_project/migrations/V2__init.sql"'},"SELECT * from iasql_apply();\n")),(0,o.kt)("p",null,"If the function call is successful, it will return a virtual table with a record for each cloud resource that has been created, deleted or updated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"}," action |    table_name       |   id   |      description      \n--------+---------------------+--------+-----------------------\n create | public_repository   |      2 | quickstart-repository\n create | cluster             |      2 | 2\n create | task_definition     |      2 | 2\n create | service             |      2 | 2\n create | listener            |      2 | 2\n create | load_balancer       |      2 | 2\n create | target_group        |      2 | 2\n create | security_group      |      5 | 5\n create | security_group_rule |      3 | 3\n create | security_group_rule |      4 | 4\n create | role                |        | ecsTaskExecRole\n")),(0,o.kt)("h2",{id:"login-build-and-push-your-code-to-the-container-registry"},"Login, build and push your code to the container registry"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Grab your new ",(0,o.kt)("inlineCode",{parentName:"li"},"ECR URI")," from the hosted DB")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"QUICKSTART_ECR_URI=$(psql -At 'postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4' -c \"\nSELECT repository_uri\nFROM repository\nWHERE repository_name = '<project-name>-repository';\")\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Login to AWS ECR using the AWS CLI. Run the following command and using the correct ",(0,o.kt)("inlineCode",{parentName:"li"},"<ECR-URI>")," and AWS ",(0,o.kt)("inlineCode",{parentName:"li"},"<profile>"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws ecr get-login-password --region ${AWS_REGION} --profile <profile> | docker login --username AWS --password-stdin ${QUICKSTART_ECR_URI}\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Build your image locally")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t <project-name>-repository app\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Tag your image")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker tag <project-name>-repository:latest ${QUICKSTART_ECR_URI}:latest\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Push your image")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker push ${QUICKSTART_ECR_URI}:latest\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Grab your load balancer DNS and access your service!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"QUICKSTART_LB_DNS=$(psql -At postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4 -c \"\nSELECT dns_name\nFROM load_balancer\nWHERE load_balancer_name = '<project-name>-load-balancer';\")\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Connect to your service!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl ${QUICKSTART_LB_DNS}:8088/health\n")),(0,o.kt)("h2",{id:"delete-managed-cloud-resources"},"Delete managed cloud resources"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"If you did not create a new account this section will delete ",(0,o.kt)("strong",{parentName:"p"},"all")," records managed by IaSQL, including the ones that previously existed in the account under any of the used modules. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT * FROM iasql_plan_apply()")," after ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT delete_all_records();")," and before ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT iasql_apply();")," to get a preview of what would get deleted. To undo ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT delete_all_records();"),", simply run ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT iasql_sync();")," which will synchronize the database with the cloud's state.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Delete all the docker images in the repository")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws ecr batch-delete-image \\\n      --region ${AWS_REGION} \\\n      --repository-name <project-name>-repository \\\n      --profile <profile> \\\n      --image-ids imageTag=latest\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Delete all iasql records invoking the void ",(0,o.kt)("inlineCode",{parentName:"li"},"delete_all_records")," function:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:"title=\"psql 'postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4' -c\"",title:'"psql',"'postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4'":!0,'-c"':!0},"SELECT delete_all_records();\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Apply the changes described in the hosted db to your cloud account")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:"title=\"psql 'postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4' -c\"",title:'"psql',"'postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4'":!0,'-c"':!0},"SELECT * from iasql_apply();\n")),(0,o.kt)("p",null,"If the function call is successful, it will return a virtual table with a record for each cloud resource that has been created, deleted or updated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"}," action |     table_name      |   id   |                                                         description                                                         \n--------+---------------------+--------+-----------------------------------------------------------------------------------------------------------------------------\n delete | cluster             | [NULL] | arn:aws:ecs:sa-east-1:658401754851:cluster/quickstart-cluster\n delete | task_definition     | [NULL] | arn:aws:ecs:sa-east-1:658401754851:task-definition/quickstart-td:1\n delete | service             | [NULL] | arn:aws:ecs:sa-east-1:658401754851:service/quickstart-cluster/quickstart-service\n delete | listener            | [NULL] | arn:aws:elasticloadbalancing:sa-east-1:658401754851:listener/app/quickstart-load-balancer/3925cdb9acada7c1/7a459d6259dac5c9\n delete | load_balancer       | [NULL] | arn:aws:elasticloadbalancing:sa-east-1:658401754851:loadbalancer/app/quickstart-load-balancer/3925cdb9acada7c1\n delete | target_group        | [NULL] | arn:aws:elasticloadbalancing:sa-east-1:658401754851:targetgroup/quickstart-target/826f804f496d0a90\n delete | security_group      | [NULL] | sg-0015b0e07bd10b7d2\n delete | security_group      | [NULL] | sg-e0df1095\n delete | security_group_rule | [NULL] | sgr-06aa0915b15fd23a9\n delete | security_group_rule | [NULL] | sgr-02e2096ac9e77a5bf\n delete | role                | [NULL] | ecsTaskExecRole\n\n")))}m.isMDXComponent=!0},8564:function(e,t,a){t.Z=a.p+"assets/images/connect-manual-e63b01dcc9e09dc833a0bdb76389a108.png"},42:function(e,t,a){t.Z=a.p+"assets/images/credentials-c7276030daeda6ddbe3e6c8d01118a72.png"}}]);