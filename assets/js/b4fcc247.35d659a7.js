"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2879],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return u}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return t?n.createElement(h,i(i({ref:a},c),{},{components:t})):n.createElement(h,i({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8204:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebar_position:4,slug:"/django"},s="IaSQL on Django (Python)",p={unversionedId:"fargate-tutorials/django",id:"version-0.0.15/fargate-tutorials/django",title:"IaSQL on Django (Python)",description:"In this tutorial we will run Django SQL migrations on top of IaSQL to deploy a HTTP server within a docker container on your AWS account using ECS, ECR and ELB. The container image will be hosted as a public repository in ECR and deployed to ECS using Fargate.",source:"@site/versioned_docs/version-0.0.15/fargate-tutorials/django.md",sourceDirName:"fargate-tutorials",slug:"/django",permalink:"/0.0.15/django",draft:!1,tags:[],version:"0.0.15",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/django"},sidebar:"tutorialSidebar",previous:{title:"IaSQL on Prisma (Javascript)",permalink:"/0.0.15/prisma"},next:{title:"Database",permalink:"/0.0.15/database"}},c={},d=[{value:"Start managing an AWS account with a hosted IaSQL db",id:"start-managing-an-aws-account-with-a-hosted-iasql-db",level:2},{value:"Add the necessary cloud services to the hosted database",id:"add-the-necessary-cloud-services-to-the-hosted-database",level:2},{value:"Connect to the hosted db and provision cloud resources in your AWS account",id:"connect-to-the-hosted-db-and-provision-cloud-resources-in-your-aws-account",level:2},{value:"If you are using the template example go to step 9. The following steps explains how to instrospect an existing DB in Django.",id:"if-you-are-using-the-template-example-go-to-step-9-the-following-steps-explains-how-to-instrospect-an-existing-db-in-django",level:3},{value:"Login, build and push your code to the container registry",id:"login-build-and-push-your-code-to-the-container-registry",level:2},{value:"Delete managed cloud resources",id:"delete-managed-cloud-resources",level:2}],m={toc:d};function u(e){var a=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iasql-on-django-python"},"IaSQL on Django (Python)"),(0,o.kt)("p",null,"In this tutorial we will run ",(0,o.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/4.0/topics/migrations/"},"Django SQL migrations")," on top of IaSQL to deploy a HTTP server within a docker container on your AWS account using ECS, ECR and ELB. The container image will be hosted as a public repository in ECR and deployed to ECS using Fargate."),(0,o.kt)("p",null,"The code for this tutorial lives in this part of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iasql/ecs-fargate-examples/blob/main/django/app/infra/migrations/0003_initial.py"},"repository")),(0,o.kt)("h2",{id:"start-managing-an-aws-account-with-a-hosted-iasql-db"},"Start managing an AWS account with a hosted IaSQL db"),(0,o.kt)("p",null,"First, make sure you have an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html"},"IAM user")," in AWS or create one with ",(0,o.kt)("strong",{parentName:"p"},"Programmatic access")," through the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console"},"console/UI")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_cliwpsapi"},"CLI"),". Ensure that the IAM role has sufficient permissions to deploy and manage all your infrastructure resources."),(0,o.kt)("p",null,"There are two parts to each ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys"},"access key"),", which you\u2019ll see in the IAM console/CLI after you create it, an id and a secret. Input these in the connect account modal:"),(0,o.kt)("img",{width:440,src:t(8564).Z}),(0,o.kt)("p",null,"If you use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/"},"AWS CLI"),", you can look at the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdkref/latest/guide/file-location.html"},"credentials configured locally"),". In macOS and Linux this is as simple as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat ~/.aws/credentials\n[default]\naws_access_key_id = <YOUR_ACCESS_KEY_ID>\naws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>\n")),(0,o.kt)("p",null,"You will be able to see your PostgreSQL connection information when you press Connect."),(0,o.kt)("img",{width:440,src:t(42).Z}),(0,o.kt)("p",null,"Make sure to copy the PostgreSQL connection string as you will not see it again."),(0,o.kt)("h2",{id:"add-the-necessary-cloud-services-to-the-hosted-database"},"Add the necessary cloud services to the hosted database"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Many different clients can be used to ",(0,o.kt)("a",{parentName:"p",href:"/0.0.15/connect"},"connect")," to a PostgreSQL database. For this tutorial, we'll use the standard ",(0,o.kt)("inlineCode",{parentName:"p"},"psql")," CLI client. If you need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"psql"),", follow the instructions for your corresponding OS ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"here"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The first migration calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"iasql_install")," SQL function to install ",(0,o.kt)("a",{parentName:"p",href:"/0.0.15/module"},"modules")," into the hosted database."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="psql postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4 -c"',title:'"psql',"postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4":!0,'-c"':!0},"SELECT * from iasql_install(\n   'aws_cloudwatch',\n   'aws_ecr',\n   'aws_ecs_fargate',\n   'aws_elb',\n   'aws_security_group',\n   'aws_vpc'\n);\n")),(0,o.kt)("p",null,"If the function call is successful, it will return a virtual table with a record for each new table in your database under ",(0,o.kt)("inlineCode",{parentName:"p"},"created_table_name")," and the number of existing resources or records imported from the account under ",(0,o.kt)("inlineCode",{parentName:"p"},"record_count"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"       module_name        |      created_table_name       | record_count\n--------------------------+-------------------------------+--------------\n aws_cloudwatch@0.0.1     | log_group                     |            0\n aws_ecr@0.0.1            | public_repository             |            0\n aws_ecr@0.0.1            | repository                    |            1\n aws_ecr@0.0.1            | repository_policy             |            0\n aws_security_group@0.0.1 | security_group                |            2\n aws_security_group@0.0.1 | security_group_rule           |            0\n aws_vpc@0.0.1            | vpc                           |            1\n aws_vpc@0.0.1            | subnet                        |            3\n aws_elb@0.0.1            | load_balancer                 |            0\n aws_elb@0.0.1            | target_group                  |            0\n aws_elb@0.0.1            | listener                      |            0\n aws_elb@0.0.1            | load_balancer_security_groups |            0\n aws_ecs_fargate@0.0.1    | cluster                       |            0\n aws_ecs_fargate@0.0.1    | service                       |            0\n aws_ecs_fargate@0.0.1    | task_definition               |            0\n aws_ecs_fargate@0.0.1    | container_definition          |            0\n aws_ecs_fargate@0.0.1    | service_security_groups       |            0\n(17 rows)\n")),(0,o.kt)("h2",{id:"connect-to-the-hosted-db-and-provision-cloud-resources-in-your-aws-account"},"Connect to the hosted db and provision cloud resources in your AWS account"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get a local copy of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iasql/ecs-fargate-examples"},"ECS Fargate examples repository")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:iasql/ecs-fargate-examples.git my_project\ncd my_project\ngit filter-branch --subdirectory-filter django\ncd app\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(Optional) Create and activate a virtual environment to install python dependencies"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python -m venv <env-name>\nsource <env-name>/bin/activate\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the project dependencies under the ",(0,o.kt)("inlineCode",{parentName:"p"},"my_project/app")," folder"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file with the connection parameters provided on db creation. In this case:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:'language-title="my_project/app/.env"'},"AWS_REGION=eu-west-2\nDB_NAME=_3ba201e349a11daf\nDB_USER=qpp3pzqb\nDB_PASSWORD=LN6jnHfhRJTBD6ia\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(Optional) Set the desired project name that your resources will be named after by changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"IASQL_PROJECT_NAME")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"my_project/app/app/settings.py"),". If the name is not changed, ",(0,o.kt)("inlineCode",{parentName:"p"},"quickstart")," will be used."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"project-name")," can only contain alphanumeric characters and hyphens(-) because it will be used to name the load balancer"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Per the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/4.0/ref/databases/#postgresql-connection-settings-1"},"Djando database documentation"),", to connect to a new database you have to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"DATABASES")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"my_project/app/app/settings.py")," file. This is already configure in the example project."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="my_project/app/app/settings.py"',title:'"my_project/app/app/settings.py"'},"DATABASES = {\n    ...\n    'infra': {\n        'ENGINE': 'django.db.backends.postgresql',\n        'NAME': env('DB_NAME'),\n        'USER': env('DB_USER'),\n        'PASSWORD': env('DB_PASSWORD'),\n        'HOST': 'db.iasql.com',\n        'PORT': '5432',\n    }\n}\n")))),(0,o.kt)("h3",{id:"if-you-are-using-the-template-example-go-to-step-9-the-following-steps-explains-how-to-instrospect-an-existing-db-in-django"},"If you are using the template example go to step 9. The following steps explains how to instrospect an existing DB in Django."),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"The second migration correspond to the Django models instrospected from the modules that have been installed in the database. To introspect the schema from your database run the following command. More information ",(0,o.kt)("a",{parentName:"li",href:"https://docs.djangoproject.com/en/4.0/howto/legacy-databases/"},"here"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python manage.py inspectdb --database=infra > infra/models.py\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"After running the ",(0,o.kt)("inlineCode",{parentName:"p"},"inspectdb")," command you will need to tweak the models Django generated until they work the way you\u2019d like.\nIn our case you will have to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"my_project/app/infra/models.py")," file as follow:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"CharField")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"TextField")),(0,o.kt)("li",{parentName:"ol"},"Remove all ",(0,o.kt)("inlineCode",{parentName:"li"},"max_length=-1"),". Helpful regex for a replacement: ",(0,o.kt)("inlineCode",{parentName:"li"},"[\\s,]*max_length=-1[,\\s]*")),(0,o.kt)("li",{parentName:"ol"},"Add the following import ",(0,o.kt)("inlineCode",{parentName:"li"},"from django.contrib.postgres.fields import ArrayField")),(0,o.kt)("li",{parentName:"ol"},"Replace in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Service")," class the ",(0,o.kt)("inlineCode",{parentName:"li"},"subnets")," property with ",(0,o.kt)("inlineCode",{parentName:"li"},"subnets = ArrayField(models.TextField())")),(0,o.kt)("li",{parentName:"ol"},"Add a default ",(0,o.kt)("inlineCode",{parentName:"li"},"False")," value for the ",(0,o.kt)("inlineCode",{parentName:"li"},"Service")," class ",(0,o.kt)("inlineCode",{parentName:"li"},"force_new_deployment")," property (",(0,o.kt)("inlineCode",{parentName:"li"},"force_new_deployment = models.BooleanField(default=False)"),")."),(0,o.kt)("li",{parentName:"ol"},"Replace in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Role")," class the ",(0,o.kt)("inlineCode",{parentName:"li"},"attached_policies_arns")," property with ",(0,o.kt)("inlineCode",{parentName:"li"},"attached_policies_arns = ArrayField(models.TextField())")),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"related_name")," argument to the definition for ",(0,o.kt)("inlineCode",{parentName:"li"},"IasqlDependencies.dependency"),". (",(0,o.kt)("inlineCode",{parentName:"li"},"dependency = models.ForeignKey('IasqlModule', models.DO_NOTHING, db_column='dependency', related_name='module')"),")"),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"related_name")," argument to the definition for ",(0,o.kt)("inlineCode",{parentName:"li"},"TaskDefinition.execution_role_name"),". (",(0,o.kt)("inlineCode",{parentName:"li"},"execution_role_name = models.ForeignKey(Role, models.DO_NOTHING, db_column='execution_role_name', blank=True, null=True, related_name='execution_role_name')"),")"),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"related_name")," argument to the definition for ",(0,o.kt)("inlineCode",{parentName:"li"},"TaskDefinition.task_role_name"),". (",(0,o.kt)("inlineCode",{parentName:"li"},"task_role_name = models.ForeignKey(Role, models.DO_NOTHING, db_column='task_role_name', blank=True, null=True, related_name='task_role_name')"),")"))),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After instrospecting the db you will need to generate the migration so you can have the ",(0,o.kt)("inlineCode",{parentName:"p"},"my_project/app/infra/migrations/0002_inspectdb.py")," file."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python manage.py makemigrations --name inspectdb infra\n")),(0,o.kt)("admonition",{parentName:"li",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you install or uninstall IaSQL ",(0,o.kt)("a",{parentName:"p",href:"/0.0.15/module"},"modules")," the database schema will change and you will need to run steps 7 and 8 to\nintrospect the correct schema once again."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now you can use IaSQL models to create your resources. Run the existing migrations with:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python manage.py migrate --database infra infra\n")),(0,o.kt)("p",{parentName:"li"},"The operations of the ",(0,o.kt)("inlineCode",{parentName:"p"},"my_project/app/infra/migrations/0003_initial.py")," migration will apply the changes described in the hosted db to your cloud account which will take a few minutes waiting for AWS"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="my_project/app/infra/migrations/0003_initial.py"',title:'"my_project/app/infra/migrations/0003_initial.py"'},"...\noperations = [\n    migrations.RunPython(code=quickstart_up, reverse_code=apply),\n    migrations.RunPython(code=apply, reverse_code=quickstart_down),\n]\n")))),(0,o.kt)("p",null,"If the function call is successful, it will return a list of dicts with each cloud resource that has been created, deleted or updated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"[{'action': 'create', 'table_name': 'repository', 'id': 9, 'description': 'quickstart-repository'}, {'action': 'create', 'table_name': 'cluster', 'id': 10, 'description': '10'}, {'action': 'create', 'table_name': 'task_definition', 'id': 4, 'description': '4'}, {'action': 'create', 'table_name': 'service', 'id': 3, 'description': '3'}, {'action': 'create', 'table_name': 'listener', 'id': 11, 'description': '11'}, {'action': 'create', 'table_name': 'load_balancer', 'id': 11, 'description': '11'}, {'action': 'create', 'table_name': 'target_group', 'id': 14, 'description': '14'}, {'action': 'create', 'table_name': 'security_group', 'id': 19, 'description': '19'}, {'action': 'create', 'table_name': 'security_group_rule', 'id': 27, 'description': '27'}, {'action': 'create', 'table_name': 'security_group_rule', 'id': 28, 'description': '28'}, {'action': 'create', 'table_name': 'role', 'id': None, 'description': 'ecsTaskExecRole-us-east-2'}, {'action': 'update', 'table_name': 'role', 'id': None, 'description': 'ecsTaskExecRole-us-east-2'}, {'action': 'delete', 'table_name': 'security_group_rule', 'id': None, 'description': 'sgr-083acce671bae65a1'}]\n")),(0,o.kt)("h2",{id:"login-build-and-push-your-code-to-the-container-registry"},"Login, build and push your code to the container registry"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Grab your new ",(0,o.kt)("inlineCode",{parentName:"p"},"ECR URI")," from the hosted DB"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"QUICKSTART_ECR_URI=$(psql -At postgres://qpp3pzqb:LN6jnHfhRJTBD6ia@db.iasql.com/_3ba201e349a11daf -c \"\nSELECT repository_uri\nFROM repository\nWHERE repository_name = '<project-name>-repository';\")\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login to AWS ECR using the AWS CLI. Run the following command and using the correct ",(0,o.kt)("inlineCode",{parentName:"p"},"<ECR-URI>")," and AWS ",(0,o.kt)("inlineCode",{parentName:"p"},"<profile>")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws ecr get-login-password --region ${AWS_REGION} --profile <profile> | docker login --username AWS --password-stdin ${QUICKSTART_ECR_URI}\n")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"},"CLI is configured with the same credentials"),", via environment variables or ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.aws/credentials"),", as the ones provided to IaSQL or this will fail.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build your image locally"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t <project-name>-repository .\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tag your image"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker tag <project-name>-repository:latest ${QUICKSTART_ECR_URI}:latest\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Push your image"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker push ${QUICKSTART_ECR_URI}:latest\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Grab your load balancer DNS and access your service!"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"QUICKSTART_LB_DNS=$(psql -At postgres://qpp3pzqb:LN6jnHfhRJTBD6ia@db.iasql.com/_3ba201e349a11daf -c \"\nSELECT dns_name\nFROM load_balancer\nWHERE load_balancer_name = '<project-name>-load-balancer';\")\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect to your service!"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl ${QUICKSTART_LB_DNS}:8088/health\n")))),(0,o.kt)("h2",{id:"delete-managed-cloud-resources"},"Delete managed cloud resources"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"If you did not create a new account this section will delete ",(0,o.kt)("strong",{parentName:"p"},"all")," records managed by IaSQL, including the ones that previously existed in the account under any of the used modules. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT * FROM iasql_plan_apply()")," after ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT delete_all_records();")," and before ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT iasql_apply();")," to get a preview of what would get deleted. To undo ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT delete_all_records();"),", simply run ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT iasql_sync();")," which will synchronize the database with the cloud's state.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delete all the docker images in the repository"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws ecr batch-delete-image \\\n    --repository-name <project-name>-repository \\\n    --profile <profile> \\\n    --region ${AWS_REGION} \\\n    --image-ids imageTag=latest\n")),(0,o.kt)("admonition",{parentName:"li",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"},"CLI is configured with the same credentials"),", via environment variables or ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.aws/credentials"),", as the ones provided to IaSQL or this will fail."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delete all iasql records invoking the void ",(0,o.kt)("inlineCode",{parentName:"p"},"delete_all_records")," function:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="psql postgres://qpp3pzqb:LN6jnHfhRJTBD6ia@db.iasql.com/_3ba201e349a11daf -c"',title:'"psql',"postgres://qpp3pzqb:LN6jnHfhRJTBD6ia@db.iasql.com/_3ba201e349a11daf":!0,'-c"':!0},"SELECT delete_all_records();\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Apply the changes described in the hosted db to your cloud account"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="psql postgres://qpp3pzqb:LN6jnHfhRJTBD6ia@db.iasql.com/_3ba201e349a11daf -c"',title:'"psql',"postgres://qpp3pzqb:LN6jnHfhRJTBD6ia@db.iasql.com/_3ba201e349a11daf":!0,'-c"':!0},"SELECT * from iasql_apply();\n")))),(0,o.kt)("p",null,"If the function call is successful, it will return a virtual table with a record for each cloud resource that has been created, deleted or updated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"}," action |     table_name      |   id   |                                                         description                                                         \n--------+---------------------+--------+-----------------------------------------------------------------------------------------------------------------------------\n delete | cluster             | [NULL] | arn:aws:ecs:sa-east-1:658401754851:cluster/quickstart-cluster\n delete | task_definition     | [NULL] | arn:aws:ecs:sa-east-1:658401754851:task-definition/quickstart-td:1\n delete | service             | [NULL] | arn:aws:ecs:sa-east-1:658401754851:service/quickstart-cluster/quickstart-service\n delete | listener            | [NULL] | arn:aws:elasticloadbalancing:sa-east-1:658401754851:listener/app/quickstart-load-balancer/3925cdb9acada7c1/7a459d6259dac5c9\n delete | load_balancer       | [NULL] | arn:aws:elasticloadbalancing:sa-east-1:658401754851:loadbalancer/app/quickstart-load-balancer/3925cdb9acada7c1\n delete | target_group        | [NULL] | arn:aws:elasticloadbalancing:sa-east-1:658401754851:targetgroup/quickstart-target/826f804f496d0a90\n delete | security_group      | [NULL] | sg-0015b0e07bd10b7d2\n delete | security_group      | [NULL] | sg-e0df1095\n delete | security_group_rule | [NULL] | sgr-06aa0915b15fd23a9\n delete | security_group_rule | [NULL] | sgr-02e2096ac9e77a5bf\n\n")))}u.isMDXComponent=!0},8564:function(e,a,t){a.Z=t.p+"assets/images/connect-manual-e63b01dcc9e09dc833a0bdb76389a108.png"},42:function(e,a,t){a.Z=t.p+"assets/images/credentials-c7276030daeda6ddbe3e6c8d01118a72.png"}}]);