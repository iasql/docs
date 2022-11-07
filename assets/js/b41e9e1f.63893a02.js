"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8077],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?o.createElement(g,i(i({ref:t},l),{},{components:n})):o.createElement(g,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6612:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2,slug:"/connect"},c="Connecting to PostgreSQL",u={unversionedId:"How-to Guides/connect",id:"version-0.0.8/How-to Guides/connect",title:"Connecting to PostgreSQL",description:"The required information to connect to a PostgreSQL IaSQL database will provided when you connect an AWS account when provisioning the database. IaSQL does not store your database password so it will only be displayed when the database is provisioned. If you lose the password, you can recreate the database by disconnecting and connecting your account again using the same region and AWS credentials.",source:"@site/versioned_docs/version-0.0.8/How-to Guides/connect.md",sourceDirName:"How-to Guides",slug:"/connect",permalink:"/0.0.8/connect",draft:!1,tags:[],version:"0.0.8",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/connect"},sidebar:"tutorialSidebar",previous:{title:"Manage an AWS Account",permalink:"/0.0.8/aws"},next:{title:"Get latest EC2 AMI ID",permalink:"/0.0.8/ami"}},l={},p=[{value:"PostgreSQL Clients",id:"postgresql-clients",level:2}],d={toc:p};function f(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connecting-to-postgresql"},"Connecting to PostgreSQL"),(0,a.kt)("p",null,"The required information to connect to a PostgreSQL IaSQL database will provided when you connect an AWS account when provisioning the database. IaSQL does not store your database password so it will only be displayed when the database is provisioned. If you lose the password, you can recreate the database by disconnecting and connecting your account again using the same region and AWS credentials."),(0,a.kt)("img",{width:440,src:n(42).Z}),(0,a.kt)("h2",{id:"postgresql-clients"},"PostgreSQL Clients"),(0,a.kt)("p",null,"PostgreSQL has a built-in command line client, ",(0,a.kt)("inlineCode",{parentName:"p"},"psql"),", which you can use to connect to your database and run queries. To install ",(0,a.kt)("inlineCode",{parentName:"p"},"psql")," in your command line follow the instructions for your corresponding OS ",(0,a.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"here"),"."),(0,a.kt)("p",null,"One of the reasons we built IaSQL on an unmodified PG is because of the vast ecosystem we get to stand on. This ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.postgresql.org/wiki/PostgreSQL_Clients"},"PostgreSQL Client wiki")," contains an extensive list of all the different clients you can use to connect to a PG database provisioned with IaSQL. The IaSQL team personally uses and recommends ",(0,a.kt)("a",{parentName:"p",href:"https://arctype.com"},"Arctype")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.beekeeperstudio.io"},"Beekeeper Studio"),"."))}f.isMDXComponent=!0},42:function(e,t,n){t.Z=n.p+"assets/images/credentials-c7276030daeda6ddbe3e6c8d01118a72.png"}}]);