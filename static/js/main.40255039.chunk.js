(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(4),s=c.n(n),r=c(2),o=c(1),i=(c(10),c(11),c(12),c(5)),u=c.n(i),a=c(0),l=function(e){var t=e.todos,c=e.onSelect,n=(0,e.getVisibleTodos)(t,e.query);return Object(a.jsx)("div",{className:"TodoList",children:Object(a.jsx)("div",{className:"TodoList__list-container",children:Object(a.jsx)("ul",{className:"TodoList__list",children:n.map((function(e){return Object(a.jsxs)("li",{className:u()({TodoList__item:!0,"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed}),children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",readOnly:!0,checked:e.completed}),Object(a.jsx)("p",{children:e.title})]}),Object(a.jsxs)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){return c(e.userId)},children:["User\xa0#",e.userId]})]},e.id)}))})})})},d=function(e){return fetch("".concat("https://mate.academy/students-api/","/").concat(e)).then((function(e){if(!e.ok)throw new Error("Status of error: ".concat(e.status));return e.json()}))},j=(c(14),function(e){var t=e.userId,c=e.onSetSelectedUserId,n=Object(o.useState)(null),s=Object(r.a)(n,2),i=s[0],u=s[1],l=Object(o.useState)(""),j=Object(r.a)(l,2),b=j[0],h=j[1];return Object(o.useEffect)((function(){(function(e){return d("users/".concat(e))})(t).then(u).catch((function(e){return h(e.toString())}))}),[t]),b?Object(a.jsx)("div",{children:b}):Object(a.jsx)("div",{className:"CurrentUser",children:i?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:"CurrentUser__title",children:Object(a.jsxs)("span",{children:["Selected user:\xa0#",t]})}),Object(a.jsx)("h3",{className:"CurrentUser__name",children:i.name}),Object(a.jsx)("p",{className:"CurrentUser__email",children:i.email}),Object(a.jsx)("p",{className:"CurrentUser__phone",children:i.phone}),Object(a.jsx)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){return c(0)},children:"Clear"})]}):Object(a.jsx)("p",{children:"loading..."})})}),b=function(){var e,t=Object(o.useState)(0),c=Object(r.a)(t,2),n=c[0],s=c[1],i=Object(o.useState)(null),u=Object(r.a)(i,2),b=u[0],h=u[1],O=Object(o.useState)(""),p=Object(r.a)(O,2),f=p[0],m=p[1],_=Object(o.useState)(""),x=Object(r.a)(_,2),v=x[0],N=x[1],S=Object(o.useState)(""),T=Object(r.a)(S,2),C=T[0],L=T[1];if(Object(o.useEffect)((function(){d("todos").then((function(e){return h(e)})).catch((function(e){return m(e.toString())}))}),[]),f)return Object(a.jsx)("div",{children:f});!function(e){e.All="All",e.Active="Active",e.Completed="Completed"}(e||(e={}));return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"App__sidebar",children:[Object(a.jsx)("h2",{children:"Todos:"}),Object(a.jsx)("input",{type:"text",className:"TodoList__input",placeholder:"Type search word",value:v,onChange:function(e){N(e.currentTarget.value)}}),Object(a.jsx)("select",{className:"TodoList__select",onChange:function(e){return L(e.target.value)},value:C,children:Object.keys(e).map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)}))}),b?Object(a.jsx)(l,{todos:b,onSelect:s,getVisibleTodos:function(t,c){var n=b;switch(n=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())})),C){case e.All:return n;case e.Active:return n.filter((function(e){return!e.completed}));case e.Completed:return n.filter((function(e){return e.completed}));default:return n}},query:v}):Object(a.jsx)("p",{children:"loading..."})]}),Object(a.jsx)("div",{className:"App__content",children:Object(a.jsx)("div",{className:"App__content-container",children:n?Object(a.jsx)(j,{userId:n,onSetSelectedUserId:s}):"No user selected"})})]})};s.a.render(Object(a.jsx)(b,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.40255039.chunk.js.map