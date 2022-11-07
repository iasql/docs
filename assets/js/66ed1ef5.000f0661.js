"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7784],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),f=r,h=p["".concat(u,".").concat(f)]||p[f]||c[f]||o;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3850:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={sidebar_position:1,slug:"/database"},u="Database",d={unversionedId:"Concepts/db",id:"version-0.0.9/Concepts/db",title:"Database",description:"An IaSQL Database feels a lot like a Postgres database. Because that is what it is: a 100% standard Postgres database with zero extensions, and anything you can do with a Postgres database you can do with an IaSQL database.",source:"@site/versioned_docs/version-0.0.9/Concepts/db.md",sourceDirName:"Concepts",slug:"/database",permalink:"/0.0.9/database",draft:!1,tags:[],version:"0.0.9",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/database"},sidebar:"tutorialSidebar",previous:{title:"IaSQL on Django (Python)",permalink:"/0.0.9/django"},next:{title:"Module",permalink:"/0.0.9/module"}},l={},c=[],p={toc:c};function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"database"},"Database"),(0,o.kt)("p",null,"An IaSQL Database feels a lot like a Postgres database. Because that is what it is: a 100% standard Postgres database with zero extensions, and anything you can do with a Postgres database you can do with an IaSQL database."),(0,o.kt)("p",null,"But it is administered a bit differently from a standard Postgres database. The IaSQL engine mediates between the database and your cloud infrastructure, so the database has been configured with a few affordances for that engine in mind."),(0,o.kt)("p",null,"The first piece you may note are a pair of tables: ",(0,o.kt)("inlineCode",{parentName:"p"},"iasql_module")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"iasql_dependencies"),". These tables represent the ",(0,o.kt)("a",{parentName:"p",href:"/module"},"modules")," you have installed and what dependencies, if any, they require. You may have also noted that these tables are read-only for your account and you cannot manipulate their contents. You can think of them as a non-linear migration system and the IaSQL engine installs or uninstalls these modules based on your requests to it via the ",(0,o.kt)("a",{parentName:"p",href:"/function"},"IaSQL PostgreSQL functions"),". You can use a standard migration system in tandem with this system, for tracking the state of your infrastructure and allowing for easy rollback, but instead of managing the schema you're managing the data in the tables."),(0,o.kt)("p",null,"There's nothing stopping you from adding your own custom tables, such as adding your own metadata tables to associate with your infrastructure, but the IaSQL engine will ignore them at best, and get tripped up if a foreign key prevents a deletion it expects to be able to do."),(0,o.kt)("p",null,"Because the next thing that is a bit different from a normal Postgres database is the IaSQL engine can mutate your database state outside of your own connection to it. When you run ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT * FROM iasql_apply()")," it takes the current state of your database and pushes it into your cloud infrastructure, but for both convenience and to resolve dependency issues in other modules, that ",(0,o.kt)("inlineCode",{parentName:"p"},"apply")," can still update columns in your database with new data. For instance, creating a new EC2 instance will cause it to then insert the AWS-controlled ",(0,o.kt)("inlineCode",{parentName:"p"},"instance_id")," into the database automatically for you. These changes to your database only happen when you run the IaSQL PosgreSQL functions to do something to it, but making mutations to the database on your side while it is doing its work could cause errors. Fortunately such a workflow is unlikely."),(0,o.kt)("p",null,"You can also provide the same AWS credentials to two hosted IaSQL databases, but that will cause issues outside of one being treated as read-write and the other as read-only: the two sources of truth for your infrastructure would clash and undo each others' work when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT * FROM iasql_apply()")," on them and that might not be immediately obvious. Having one database indirectly change the values for another database (on ",(0,o.kt)("inlineCode",{parentName:"p"},"apply/sync"),") is different from your regular database usage."))}f.isMDXComponent=!0}}]);