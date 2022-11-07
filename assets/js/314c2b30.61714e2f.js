"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2931],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(n),m=a,p=h["".concat(s,".").concat(m)]||h[m]||d[m]||r;return n?o.createElement(p,l(l({ref:t},c),{},{components:n})):o.createElement(p,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7682:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],i={sidebar_position:2,slug:"/module"},s="Module",u={unversionedId:"concepts/module",id:"version-0.0.16/concepts/module",title:"Module",description:"The concept of modules comes from programming languages, and is a distinct block of code that is well-isolated from other code and can be loaded with other modules and used together for some other purpose, like modular building blocks that you may have played with as a kid.",source:"@site/versioned_docs/version-0.0.16/concepts/module.md",sourceDirName:"concepts",slug:"/module",permalink:"/module",draft:!1,tags:[],version:"0.0.16",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/module"},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/database"},next:{title:"function",permalink:"/function"}},c={},d=[],h={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"module"},"Module"),(0,r.kt)("p",null,"The concept of modules comes from programming languages, and is a distinct block of code that is well-isolated from other code and can be loaded with other modules and used together for some other purpose, like modular building blocks that you may have played with as a kid."),(0,r.kt)("p",null,"IaSQL Modules take the same concept and apply it to a Postgres Database. An IaSQL module consists of a collection of tables that are managed together by the module code, and collectively deal with a singular concept in your cloud. So unlike traditional migrations that have a linear history, IaSQL modules have an ",(0,r.kt)("inlineCode",{parentName:"p"},"install")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"uninstall")," mechanism and your schema can be both up-to-date and different from another user's up-to-date schema, as they control different features within your cloud infra."),(0,r.kt)("p",null,"Modules are isolated, but they are no wholly self-contained; they may depend on other modules that need to be loaded before they do and have schema changes that hook into the other module, such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"aws_ec2")," module depending on the ",(0,r.kt)("inlineCode",{parentName:"p"},"aws_security_group")," module to get the security group IDs it needs."),(0,r.kt)("p",null,"This means that modules represent a dependency tree, and IaSQL will follow that tree and automatically suggest which other modules are necessary to install the module you requested."),(0,r.kt)("p",null,"For those with a background in programming languages with modules, you'll know that there's two implementations of module systems, one in which a module's dependencies are isolated from each other so it is possible to have dependencies-of-dependencies that conflict with each other simultaneously installed, and those where all dependencies are placed into a singular pool of dependencies, and conflicting dependencies cannot be simultaneously installed. While it may sound less useful, IaSQL has chosen to go with the latter implementation for the following reasons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Multiple tables that try to control the same cloud infrastructure represent a divided source-of-truth, and conflicting changes in these tables can easily become irreconcilable and your infrastructure management would not work."),(0,r.kt)("li",{parentName:"ol"},"Postgres has a 64 character limit on table names, and to isolate these tables from one another would require some sort of automatic table name generation that could theoretically work for the modules, but would be incomprehensible to you on what tables are used for what changes.")),(0,r.kt)("p",null,"With modules that can conflict and not be installed simultaneously, we actually get the benefit that you cannot accidentally split the source of truth between tables and get into an irreconcilable state and we can let module authors use human-legible names for their tables so it is much simpler for you to find what table you need to change."),(0,r.kt)("p",null,"Because a module that is not installed simply means that IaSQL does not manage that piece of your cloud infrastructure, if you ever find an alternative module that you would like to use instead of your current one, you can simply uninstall the current module and then install the alternative and it will import the current state of your infrastructure into the schema of the new module for you automatically. No need to rewrite infrastructure-as-code files for the alternative module, and if you decide that the grass wasn't greener on the other side, you can just as easily swap back."),(0,r.kt)("p",null,"Modules are managed in IaSQL through the PostgreSQL functions loaded into every IaSQL database. As the ",(0,r.kt)("a",{parentName:"p",href:"/typeorm"},"Tutorial")," guide indicates, you pick which modules you wish to use once you connect to your hosted IaSQL DB. You can see what modules are available to you using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT * FROM iasql_modules_list()")," command. You can configure which modules are installed over time using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT * FROM iasql_install(...)")," or ",(0,r.kt)("inlineCode",{parentName:"p"}," SELECT * FROM iasql_uninstall(...)")," commands. See the ",(0,r.kt)("a",{parentName:"p",href:"/function"},"IaSQL PostgreSQL Functions")," for more details."))}m.isMDXComponent=!0}}]);