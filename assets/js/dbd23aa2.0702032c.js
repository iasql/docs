"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8035],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),y=a,b=m["".concat(p,".").concat(y)]||m[y]||u[y]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6444:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:6,slug:"/aws_ecr"},p="AWS Elastic Container Registry",l={unversionedId:"sample-queries/aws_ecr",id:"version-0.0.16/sample-queries/aws_ecr",title:"AWS Elastic Container Registry",description:"Install the AWS ECR module. Read more about AWS ECR repositories here.",source:"@site/versioned_docs/version-0.0.16/sample-queries/aws_ecr.md",sourceDirName:"sample-queries",slug:"/aws_ecr",permalink:"/aws_ecr",draft:!1,tags:[],version:"0.0.16",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/aws_ecr"},sidebar:"tutorialSidebar",previous:{title:"AWS RDS",permalink:"/aws_rds"},next:{title:"AWS Route53 Hosted Zones",permalink:"/aws_route53"}},c={},u=[{value:"Create a private repository",id:"create-a-private-repository",level:2},{value:"Create a public repository",id:"create-a-public-repository",level:2}],m={toc:u};function y(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws-elastic-container-registry"},"AWS Elastic Container Registry"),(0,o.kt)("p",null,"Install the AWS ECR module. Read more about AWS ECR repositories ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html#repository-concepts"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM iasql_install('aws_ecr');\n")),(0,o.kt)("h2",{id:"create-a-private-repository"},"Create a private repository"),(0,o.kt)("p",null,"Create a private repository and ",(0,o.kt)("inlineCode",{parentName:"p"},"apply")," it. View the ",(0,o.kt)("inlineCode",{parentName:"p"},"repository")," table schema ",(0,o.kt)("a",{parentName:"p",href:"https://dbdocs.io/iasql/iasql?table=repository&schema=public&view=table_structure"},"here"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO repository (repository_name, scan_on_push, image_tag_mutability)\nVALUES ('iasqlsample', false, 'MUTABLE');\n\nSELECT * FROM iasql_apply();\n")),(0,o.kt)("button",{className:"button button--primary button--lg margin-bottom--lg",onClick:function(){return window.open("https://app.iasql.com/#/button/INSERT%20INTO%20repository%20%28repository_name%2C%20scan_on_push%2C%20image_tag_mutability%29%0AVALUES%20%28%27iasqlsample%27%2C%20false%2C%20%27MUTABLE%27%29%3B%0A%0ASELECT%20%2A%20FROM%20iasql_apply%28%29%3B","_blank")}},"Run SQL"),(0,o.kt)("h2",{id:"create-a-public-repository"},"Create a public repository"),(0,o.kt)("p",null,"Create a public repository and ",(0,o.kt)("inlineCode",{parentName:"p"},"apply")," it. View the ",(0,o.kt)("inlineCode",{parentName:"p"},"public_repository")," table schema ",(0,o.kt)("a",{parentName:"p",href:"https://dbdocs.io/iasql/iasql?table=public_repository&schema=public&view=table_structure"},"here")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO public_repository (repository_name)\nVALUES ('iasqlsample');\n\nSELECT * FROM iasql_apply();\n")),(0,o.kt)("button",{className:"button button--primary button--lg margin-bottom--lg",onClick:function(){return window.open("https://app.iasql.com/#/button/INSERT%20INTO%20public_repository%20%28repository_name%29%0AVALUES%20%28%27iasqlsample%27%29%3B%0A%0ASELECT%20%2A%20FROM%20iasql_apply%28%29%3B","_blank")}},"Run SQL"))}y.isMDXComponent=!0}}]);