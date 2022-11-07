"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[955],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4049:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],i={sidebar_position:1,slug:"/aws"},c="Manage an AWS Account",l={unversionedId:"How-to Guides/aws",id:"version-0.0.9/How-to Guides/aws",title:"Manage an AWS Account",description:"IaSQL requires cloud credentials to manage and provision resources which can be provided in one of two ways.",source:"@site/versioned_docs/version-0.0.9/How-to Guides/aws.md",sourceDirName:"How-to Guides",slug:"/aws",permalink:"/0.0.9/aws",draft:!1,tags:[],version:"0.0.9",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/aws"},sidebar:"tutorialSidebar",previous:{title:"AWS EC2",permalink:"/0.0.9/ec2"},next:{title:"Connecting to PostgreSQL",permalink:"/0.0.9/connect"}},u={},d=[{value:"View existing AWS CLI credentials",id:"view-existing-aws-cli-credentials",level:2},{value:"Add the necessary cloud services to the hosted database",id:"add-the-necessary-cloud-services-to-the-hosted-database",level:2}],p={toc:d};function m(e){var t=e.components,i=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"manage-an-aws-account"},"Manage an AWS Account"),(0,s.kt)("p",null,"IaSQL requires cloud credentials to manage and provision resources which can be provided in one of two ways."),(0,s.kt)("p",null,"First, make sure you have an ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html"},"IAM user")," in AWS or create one with ",(0,s.kt)("strong",{parentName:"p"},"Programmatic access")," through the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console"},"console/UI")," or ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_cliwpsapi"},"CLI"),". Ensure that the IAM role has sufficient permissions to deploy and manage all your infrastructure resources."),(0,s.kt)("p",null,"There are two parts to each ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys"},"access key"),", which you\u2019ll see in the IAM console/CLI after you create it, an id and a secret."),(0,s.kt)("img",{width:440,src:n(8564).Z}),(0,s.kt)("h2",{id:"view-existing-aws-cli-credentials"},"View existing AWS CLI credentials"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"AWS CLI")," creates a plaintext credentials file on your machine that contains the AWS access keys that the CLI has access to. The file is named ",(0,s.kt)("inlineCode",{parentName:"p"},"credentials")," and is located inside the ",(0,s.kt)("inlineCode",{parentName:"p"},".aws/")," directory in your home directory."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat ~/.aws/credentials\n\n[default]\naws_access_key_id = <YOUR_ACCESS_KEY_ID>\naws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>\n")),(0,s.kt)("h2",{id:"add-the-necessary-cloud-services-to-the-hosted-database"},"Add the necessary cloud services to the hosted database"),(0,s.kt)("p",null,"Connect to your database and use the ",(0,s.kt)("inlineCode",{parentName:"p"},"iasql_install")," IaSQL PostgreSQL ",(0,s.kt)("a",{parentName:"p",href:"/function"},"function")," which is already loaded into your database to install different ",(0,s.kt)("a",{parentName:"p",href:"/module"},"modules")," and start managing different parts of your cloud account. Many different clients can be used to ",(0,s.kt)("a",{parentName:"p",href:"/connect"},"connect")," to a PostgreSQL database."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"To see the available modules use the ",(0,s.kt)("inlineCode",{parentName:"p"},"modules_list")," ",(0,s.kt)("a",{parentName:"p",href:"/function"},"function")," which will return a virtual table")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * from iasql_install(\n   'aws_iam',\n   'aws_cloudwatch',\n   'aws_ecr',\n   'aws_ecs_fargate',\n   'aws_elb',\n   'aws_security_group',\n   'aws_vpc'\n);\n")))}m.isMDXComponent=!0},8564:function(e,t,n){t.Z=n.p+"assets/images/connect-manual-e63b01dcc9e09dc833a0bdb76389a108.png"}}]);