"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[105],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3603:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),o=["components"],i={sidebar_position:2,slug:"/prisma"},l="IaSQL on Prisma (Javascript)",c={unversionedId:"fargate-tutorials/prisma",id:"fargate-tutorials/prisma",title:"IaSQL on Prisma (Javascript)",description:"In this tutorial we will use a script that uses Prisma to instrospect the schema of an IaSQL database and deploy a Node.js HTTP server within a docker container on your AWS account using Fargate ECS, IAM, ECR and ELB. The container image will be hosted as a private repository in ECR and deployed to ECS using Fargate.",source:"@site/docs/fargate-tutorials/prisma.md",sourceDirName:"fargate-tutorials",slug:"/prisma",permalink:"/next/prisma",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/prisma"},sidebar:"tutorialSidebar",previous:{title:"IaSQL on Flyway (SQL)",permalink:"/next/flyway"},next:{title:"IaSQL on Django (Python)",permalink:"/next/django"}},p={},d=[{value:"Start managing an AWS account with a hosted IaSQL db",id:"start-managing-an-aws-account-with-a-hosted-iasql-db",level:2},{value:"Add the necessary cloud services to the hosted database",id:"add-the-necessary-cloud-services-to-the-hosted-database",level:2},{value:"Connect to the hosted db and provision cloud resources in your AWS account",id:"connect-to-the-hosted-db-and-provision-cloud-resources-in-your-aws-account",level:2},{value:"Login, build and push your code to the container registry",id:"login-build-and-push-your-code-to-the-container-registry",level:2},{value:"Delete managed cloud resources",id:"delete-managed-cloud-resources",level:2}],u={toc:d};function m(e){var t=e.components,i=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"iasql-on-prisma-javascript"},"IaSQL on Prisma (Javascript)"),(0,s.kt)("p",null,"In this tutorial we will use a script that uses ",(0,s.kt)("a",{parentName:"p",href:"https://www.prisma.io"},"Prisma")," to instrospect the schema of an IaSQL database and deploy a Node.js HTTP server within a docker container on your AWS account using Fargate ECS, IAM, ECR and ELB. The container image will be hosted as a private repository in ECR and deployed to ECS using Fargate."),(0,s.kt)("p",null,"The code for this tutorial lives in in this part of the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/iasql/ecs-fargate-examples/blob/main/prisma/infra/index.js"},"repository")),(0,s.kt)("h2",{id:"start-managing-an-aws-account-with-a-hosted-iasql-db"},"Start managing an AWS account with a hosted IaSQL db"),(0,s.kt)("p",null,"First, make sure you have an ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html"},"IAM user")," in AWS or create one with ",(0,s.kt)("strong",{parentName:"p"},"Programmatic access")," through the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console"},"console/UI")," or ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_cliwpsapi"},"CLI"),". Ensure that the IAM role has sufficient permissions to deploy and manage all your infrastructure resources."),(0,s.kt)("p",null,"There are two parts to each ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys"},"access key"),", which you\u2019ll see in the IAM console/CLI after you create it, an id and a secret. Input these in the connect account modal:"),(0,s.kt)("img",{width:440,src:a(8564).Z}),(0,s.kt)("p",null,"If you use the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/"},"AWS CLI"),", you can look at the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdkref/latest/guide/file-location.html"},"credentials configured locally"),". In macOS and Linux this is as simple as:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat ~/.aws/credentials\n[default]\naws_access_key_id = <YOUR_ACCESS_KEY_ID>\naws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>\n")),(0,s.kt)("p",null,"You will be able to see your PostgreSQL connection information when you press Connect."),(0,s.kt)("img",{width:440,src:a(42).Z}),(0,s.kt)("p",null,"Make sure to copy the PostgreSQL connection string as you will not see it again."),(0,s.kt)("h2",{id:"add-the-necessary-cloud-services-to-the-hosted-database"},"Add the necessary cloud services to the hosted database"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Many different clients can be used to ",(0,s.kt)("a",{parentName:"p",href:"/next/connect"},"connect")," to a PostgreSQL database. For this tutorial, we'll use the standard ",(0,s.kt)("inlineCode",{parentName:"p"},"psql")," CLI client. If you need to install ",(0,s.kt)("inlineCode",{parentName:"p"},"psql"),", follow the instructions for your corresponding OS ",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"here"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The first migration calls the ",(0,s.kt)("inlineCode",{parentName:"p"},"iasql_install")," SQL function to install ",(0,s.kt)("a",{parentName:"p",href:"/next/module"},"modules")," into the hosted database."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql",metastring:"title=\"psql 'postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4' -c\"",title:'"psql',"'postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4'":!0,'-c"':!0},"SELECT * from iasql_install(\n   'aws_iam',\n   'aws_cloudwatch',\n   'aws_ecr',\n   'aws_ecs_fargate',\n   'aws_elb',\n   'aws_security_group',\n   'aws_vpc'\n);\n")),(0,s.kt)("p",null,"If the function call is successful, it will return a virtual table with a record for each new table in your database under ",(0,s.kt)("inlineCode",{parentName:"p"},"created_table_name")," and the number of existing resources or records imported from the account under ",(0,s.kt)("inlineCode",{parentName:"p"},"record_count"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"       module_name        |      created_table_name       | record_count\n--------------------------+-------------------------------+--------------\n aws_cloudwatch@0.0.1     | log_group                     |            0\n aws_iam@0.0.1            | role                          |            0\n aws_ecr@0.0.1            | public_repository             |            0\n aws_ecr@0.0.1            | repository                    |            1\n aws_ecr@0.0.1            | repository_policy             |            0\n aws_security_group@0.0.1 | security_group                |            2\n aws_security_group@0.0.1 | security_group_rule           |            0\n aws_vpc@0.0.1            | vpc                           |            1\n aws_vpc@0.0.1            | subnet                        |            3\n aws_elb@0.0.1            | load_balancer                 |            0\n aws_elb@0.0.1            | target_group                  |            0\n aws_elb@0.0.1            | listener                      |            0\n aws_elb@0.0.1            | load_balancer_security_groups |            0\n aws_ecs_fargate@0.0.1    | cluster                       |            0\n aws_ecs_fargate@0.0.1    | service                       |            0\n aws_ecs_fargate@0.0.1    | task_definition               |            0\n aws_ecs_fargate@0.0.1    | container_definition          |            0\n aws_ecs_fargate@0.0.1    | service_security_groups       |            0\n(17 rows)\n")),(0,s.kt)("h2",{id:"connect-to-the-hosted-db-and-provision-cloud-resources-in-your-aws-account"},"Connect to the hosted db and provision cloud resources in your AWS account"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Get a local copy of the ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/iasql/ecs-fargate-examples"},"ECS Fargate examples repository"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:iasql/ecs-fargate-examples.git my_project\ncd my_project\ngit filter-branch --subdirectory-filter prisma\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Install the Node.js project dependencies under the ",(0,s.kt)("inlineCode",{parentName:"li"},"my_project/infra")," folder")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd infra\nnpm i\n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Modify the ",(0,s.kt)("a",{parentName:"li",href:"https://www.prisma.io/docs/guides/development-environment/environment-variables"},(0,s.kt)("inlineCode",{parentName:"a"},".env file"))," that prisma expects with the connection parameters provided on db creation. In this case:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="my_project/infra/.env"',title:'"my_project/infra/.env"'},'DATABASE_URL="postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4"\n')),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"(Optional) Set the desired project name that your resources will be named after by changing the ",(0,s.kt)("inlineCode",{parentName:"li"},"name")," in the ",(0,s.kt)("inlineCode",{parentName:"li"},"my_project/infra/package.json"),". If the name is not changed, ",(0,s.kt)("inlineCode",{parentName:"li"},"quickstart")," will be used.")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"project-name")," can only contain alphanumeric characters and hyphens(-) because it will be used to name the load balancer")),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"Per the ",(0,s.kt)("a",{parentName:"li",href:"https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-node-postgres"},"Prisma quickstart to add an existing project"),", create a basic ",(0,s.kt)("inlineCode",{parentName:"li"},"schema.prisma")," file.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="my_project/infra/prisma/schema.prisma"',title:'"my_project/infra/prisma/schema.prisma"'},'datasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n')),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},"Pull, or introspect, the schema from your database which will autopopulate the rest of the ",(0,s.kt)("inlineCode",{parentName:"li"},"schema.prisma")," file")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npx prisma db pull\n")),(0,s.kt)("ol",{start:7},(0,s.kt)("li",{parentName:"ol"},"Now install and generate the Prisma client in accordance to the introspected ",(0,s.kt)("inlineCode",{parentName:"li"},"schema.prisma"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npx prisma generate\n")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"If you install or uninstall IaSQL ",(0,s.kt)("a",{parentName:"p",href:"/next/module"},"modules")," the database schema will change and you will need to run steps 5 through 7 to\nintrospect the correct schema once again.")),(0,s.kt)("ol",{start:8},(0,s.kt)("li",{parentName:"ol"},"Run the existing script using the Prisma entitites")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"node index.js\n")),(0,s.kt)("p",null,"This will run the following ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/iasql/ecs-fargate-examples/blob/main/prisma/infra/index.js"},"code")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="my_project/migrations/index.js"',title:'"my_project/migrations/index.js"'},"const { PrismaClient, load_balancer_scheme_enum, task_definition_cpu_memory_enum } = require('@prisma/client')\n\nconst pkg = require('./package.json');\n// TODO replace with your desired project name\nconst PROJECT_NAME = pkg.name;\n\nconst CONTAINER_MEM_RESERVATION = 8192; // in MiB\nconst PORT = 8088;\n\nconst prisma = new PrismaClient()\n\nasync function main() {\n  /* AWS SECURITY GROUPS */\n  const sg = await prisma.security_group.create({\n    data: {\n      description: `${PROJECT_NAME} security group`, group_name: `${PROJECT_NAME}-security-group`,\n    },\n  });\n  // TODO replace cidr with string or prisma to support cidr so we can use entity\n  await prisma.$executeRawUnsafe(`\n    INSERT INTO security_group_rule (is_egress, ip_protocol, from_port, to_port, cidr_ipv4, description, security_group_id)\n    VALUES (false, 'tcp', ${PORT}, ${PORT}, '0.0.0.0/0', '${PROJECT_NAME}-security-group', ${sg.id});\n  `);\n  await prisma.$executeRawUnsafe(`\n    INSERT INTO security_group_rule (is_egress, ip_protocol, from_port, to_port, cidr_ipv4, description, security_group_id)\n    VALUES (true, '-1', -1, -1, '0.0.0.0/0', '${PROJECT_NAME}-security-group', ${sg.id});\n  `);\n\n  // AWS ELASTIC LOAD BALANCER\n  const tg = await prisma.target_group.create({\n    data: {\n      target_group_name: `${PROJECT_NAME}-target`,\n      target_type: 'ip',\n      protocol: 'HTTP',\n      port: PORT,\n      health_check_path: '/health'\n    },\n  });\n  const lb = await prisma.load_balancer.create({\n    data: {\n      load_balancer_name: `${PROJECT_NAME}-load-balancer`,\n      scheme: load_balancer_scheme_enum.internet_facing,\n      load_balancer_type: 'application',\n      ip_address_type: 'ipv4',\n      load_balancer_security_groups: {\n        create: {\n          security_group_id: sg.id,\n        }\n      }\n    }\n  });\n  const listener = await prisma.listener.create({\n    data: {\n      load_balancer_name: lb.load_balancer_name,\n      port: PORT,\n      protocol: 'HTTP',\n      action_type: 'forward',\n      target_group_name: tg.target_group_name,\n    }\n  });\n  const role = await prisma.role.create({\n    data: {\n      role_name: `ecsTaskExecRole`,\n      assume_role_policy_document: '{\"Version\":\"2012-10-17\",\"Statement\":[{\"Sid\":\"\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":\"ecs-tasks.amazonaws.com\"},\"Action\":\"sts:AssumeRole\"}]}',\n      attached_policies_arns: ['arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy']\n    }\n  });\n  const repo = await prisma.repository.create({\n    data: { repository_name: `${PROJECT_NAME}-repository`}\n  });\n  const logGroup = await prisma.log_group.create({\n    data: { log_group_name: `${PROJECT_NAME}-log-group`}\n  });\n  const cluster = await prisma.cluster.create({\n    data: { cluster_name: `${PROJECT_NAME}-cluster`}\n  });\n  // https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html\n  const task = await prisma.task_definition.create({\n    data: {\n      family: `${PROJECT_NAME}-td`, cpu_memory: task_definition_cpu_memory_enum.vCPU2_8GB,\n      task_role_name: role.role_name, execution_role_name: role.role_name,\n    }\n  });\n  const container = await prisma.container_definition.create({\n    data: {\n      name: `${PROJECT_NAME}-container`, essential: true,\n      log_group_name: logGroup.log_group_name,\n      repository_name: repo.repository_name, task_definition_id: task.id, tag: 'latest',\n      memory_reservation: CONTAINER_MEM_RESERVATION,\n      host_port: PORT, container_port: PORT, protocol: 'tcp',\n    }\n  });\n  // select array(select subnet_id from subnet inner join vpc on vpc.id = subnet.vpc_id where is_default = true limit 3),\n  const vpc_res = await prisma.vpc.findFirst({\n    where: { is_default: true },\n    select: {\n      subnet: {\n        select: {\n          subnet_id: true\n        }\n      }\n    }\n  });\n  const subnet_ids = vpc_res.subnet.map(s => s.subnet_id);\n  // create ECS service and associate it to security group\n  const service = await prisma.service.create({\n    data: {\n      name: `${PROJECT_NAME}-service`, desired_count: 1, assign_public_ip: 'ENABLED',\n      cluster_name: cluster.cluster_name, task_definition_id: task.id, target_group_name: tg.target_group_name,\n      subnets: subnet_ids,\n      service_security_groups: {\n        create: {\n          security_group_id: sg.id,\n        }\n      }\n    }\n  });\n}\n")),(0,s.kt)("p",null,"The last part of the script will apply the changes described in the hosted db to your cloud account which will take a few minutes waiting for AWS"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="my_project/migrations/index.js"',title:'"my_project/migrations/index.js"'},"const apply = await prisma.$queryRaw`SELECT * from iasql_apply();`\nconsole.dir(apply)\n")),(0,s.kt)("p",null,"If the function call is successful, it will return a virtual table with a record for each cloud resource that has been created, deleted or updated."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"}," action |    table_name       |   id   |      description      \n--------+---------------------+--------+-----------------------\n create | public_repository   |      2 | quickstart-repository\n create | cluster             |      2 | 2\n create | task_definition     |      2 | 2\n create | service             |      2 | 2\n create | listener            |      2 | 2\n create | load_balancer       |      2 | 2\n create | target_group        |      2 | 2\n create | security_group      |      5 | 5\n create | security_group_rule |      3 | 3\n create | security_group_rule |      4 | 4\n create | role                |        | ecsTaskExecRole\n")),(0,s.kt)("h2",{id:"login-build-and-push-your-code-to-the-container-registry"},"Login, build and push your code to the container registry"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Grab your new ",(0,s.kt)("inlineCode",{parentName:"li"},"ECR URI")," from the hosted DB")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"QUICKSTART_ECR_URI=$(psql -At 'postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4' -c \"\nSELECT repository_uri\nFROM repository\nWHERE repository_name = '<project-name>-repository';\")\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Login to AWS ECR using the AWS CLI. Run the following command and using the correct ",(0,s.kt)("inlineCode",{parentName:"li"},"<ECR-URI>")," and AWS ",(0,s.kt)("inlineCode",{parentName:"li"},"<profile>"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"aws ecr get-login-password --region ${AWS_REGION} --profile <profile> | docker login --username AWS --password-stdin ${QUICKSTART_ECR_URI}\n")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Make sure the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"},"CLI is configured with the same credentials"),", via environment variables or ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.aws/credentials"),", as the ones provided to IaSQL or this will fail.")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Build your image locally")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t <project-name>-repository app\n")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Tag your image")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker tag <project-name>-repository:latest ${QUICKSTART_ECR_URI}:latest\n")),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"Push your image")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker push ${QUICKSTART_ECR_URI}:latest\n")),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},"Grab your load balancer DNS and access your service!")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"QUICKSTART_LB_DNS=$(psql -At 'postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4' -c \"\nSELECT dns_name\nFROM load_balancer\nWHERE load_balancer_name = '<project-name>-load-balancer';\")\n")),(0,s.kt)("ol",{start:7},(0,s.kt)("li",{parentName:"ol"},"Connect to your service!")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"curl ${QUICKSTART_LB_DNS}:8088/health\n")),(0,s.kt)("h2",{id:"delete-managed-cloud-resources"},"Delete managed cloud resources"),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"If you did not create a new account this section will delete ",(0,s.kt)("strong",{parentName:"p"},"all")," records managed by IaSQL, including the ones that previously existed in the account under any of the used modules. Run ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT * FROM iasql_plan_apply()")," after ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT delete_all_records();")," and before ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT iasql_apply();")," to get a preview of what would get deleted. To undo ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT delete_all_records();"),", simply run ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT iasql_sync();")," which will synchronize the database with the cloud's state.")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Delete all the docker images in the repository")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"aws ecr batch-delete-image \\\n      --region ${AWS_REGION} \\\n      --repository-name <project-name>-repository \\\n      --profile <profile> \\\n      --image-ids imageTag=latest\n")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Make sure the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"},"CLI is configured with the same credentials"),", via environment variables or ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.aws/credentials"),", as the ones provided to IaSQL or this will fail.")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Delete all iasql records invoking the void ",(0,s.kt)("inlineCode",{parentName:"li"},"delete_all_records")," function:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql",metastring:"title=\"psql 'postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4' -c\"",title:'"psql',"'postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4'":!0,'-c"':!0},"SELECT delete_all_records();\n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Apply the changes described in the hosted db to your cloud account")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql",metastring:"title=\"psql 'postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4' -c\"",title:'"psql',"'postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4'":!0,'-c"':!0},"SELECT * from iasql_apply();\n")),(0,s.kt)("p",null,"If the function call is successful, it will return a virtual table with a record for each cloud resource that has been created, deleted or updated."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"}," action |     table_name      |   id   |                                                         description                                                         \n--------+---------------------+--------+-----------------------------------------------------------------------------------------------------------------------------\n delete | cluster             | [NULL] | arn:aws:ecs:sa-east-1:658401754851:cluster/quickstart-cluster\n delete | task_definition     | [NULL] | arn:aws:ecs:sa-east-1:658401754851:task-definition/quickstart-td:1\n delete | service             | [NULL] | arn:aws:ecs:sa-east-1:658401754851:service/quickstart-cluster/quickstart-service\n delete | listener            | [NULL] | arn:aws:elasticloadbalancing:sa-east-1:658401754851:listener/app/quickstart-load-balancer/3925cdb9acada7c1/7a459d6259dac5c9\n delete | load_balancer       | [NULL] | arn:aws:elasticloadbalancing:sa-east-1:658401754851:loadbalancer/app/quickstart-load-balancer/3925cdb9acada7c1\n delete | target_group        | [NULL] | arn:aws:elasticloadbalancing:sa-east-1:658401754851:targetgroup/quickstart-target/826f804f496d0a90\n delete | security_group      | [NULL] | sg-0015b0e07bd10b7d2\n delete | security_group      | [NULL] | sg-e0df1095\n delete | security_group_rule | [NULL] | sgr-06aa0915b15fd23a9\n delete | security_group_rule | [NULL] | sgr-02e2096ac9e77a5bf\n delete | role                | [NULL] | ecsTaskExecRole\n\n")))}m.isMDXComponent=!0},8564:function(e,t,a){t.Z=a.p+"assets/images/connect-manual-e63b01dcc9e09dc833a0bdb76389a108.png"},42:function(e,t,a){t.Z=a.p+"assets/images/credentials-c7276030daeda6ddbe3e6c8d01118a72.png"}}]);