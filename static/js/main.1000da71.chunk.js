(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c,r=n(0),a=n.n(r),s=n(4),i=n.n(s),u=(n(25),n(26),n(20)),o=(n(27),n(3)),l=n(18),j=n.n(l).a.create({baseURL:"https://jsonplaceholder.typicode.com/",withCredentials:!0}),d=function(){return j.get("users")};!function(e){e.GET_USERS="GET_USERS",e.DELETE_USER="DELETE_USER"}(c||(c={}));var f=[],b=function(){return function(e){d().then((function(t){var n;e((n=t.data,{type:c.GET_USERS,data:n}))})).catch((function(e){console.log("Error"+e)}))}},h=(n(51),n(1)),O=function(e){var t=Object(o.b)(),n=Object(r.useCallback)((function(){t(b())}),[t]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",{type:"search",className:"input",placeholder:"Search for list",onChange:e.searchHandler}),Object(h.jsx)("button",{className:"button",onClick:n,children:"Reset"})]})},E=a.a.memo((function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.users})),n=Object(r.useState)(t),a=Object(u.a)(n,2),s=a[0],i=a[1];Object(r.useEffect)((function(){e(b())}),[e]),Object(r.useEffect)((function(){i(t)}),[t]);var l=Object(r.useCallback)((function(t){e(function(e){return{type:c.DELETE_USER,id:e}}(t))}),[e]);return Object(h.jsxs)("div",{className:"container-users",children:[Object(h.jsx)(O,{searchHandler:function(e){var n=e.currentTarget.value,c=t.filter((function(e){return e.name.toLowerCase().indexOf(n)>-1||e.username.toLowerCase().indexOf(n)>-1||e.email.toLowerCase().indexOf(n)>-1}));i(c)}}),s.map((function(e){return Object(h.jsxs)("li",{children:[Object(h.jsxs)("span",{className:"user-name",children:[e.name," "]}),Object(h.jsx)("span",{className:"user_user-name",children:e.username}),Object(h.jsx)("span",{children:e.email}),Object(h.jsx)("button",{className:"deleteButton",onClick:function(){l(e.id)},children:"Delete"})]},e.id)}))]})}));var p=function(){return Object(h.jsx)("div",{className:"app-container",children:Object(h.jsx)(E,{})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},x=n(5),v=n(19),S=Object(x.b)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.GET_USERS:return t.data;case c.DELETE_USER:return e.filter((function(e){return e.id!==t.id}));default:return e}}}),g=Object(x.c)(S,Object(x.a)(v.a));window.store=g;var C=g;i.a.render(Object(h.jsx)(o.a,{store:C,children:Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(p,{})})}),document.getElementById("root")),m()}},[[53,1,2]]]);
//# sourceMappingURL=main.1000da71.chunk.js.map