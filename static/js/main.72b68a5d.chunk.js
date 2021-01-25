(this["webpackJsonpmy-todolist"]=this["webpackJsonpmy-todolist"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),l=c.n(a),i=c(7),s=c.n(i),d=c(3),o=c(2),r=(c(13),function(e){var t=e.allChecked,c=e.toggle;return Object(n.jsx)("div",{className:"category",children:Object(n.jsx)("label",{className:"done-button",onClick:t,children:c})})}),j=function(e){var t=e.onSubmitAdd,c=e.todoText,a=e.onChangeTodoText;return Object(n.jsx)("form",{onSubmit:t,children:Object(n.jsx)("input",{className:"input-todo",placeholder:"Please add new TODO",value:c,onChange:a})})},b=function(e){var t,c,l=e.title,i=e.details,s=e.deadline,d=e.detailsText,r=e.deadlineDate,j=e.onChangeDetailsText,b=e.onChangeDeadlineDate,u=e.onClickDelete,O=e.onClickComplete,h=e.setNewDetails,x=e.setNewDeadline,m=e.getDetailsText,p=e.getDeadlineDate,g=e.today,k=Object(a.useState)(!1),f=Object(o.a)(k,2),C=f[0],v=f[1];switch(C&&(t=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"modal",children:[Object(n.jsx)("p",{children:l}),Object(n.jsx)("p",{children:"details"}),Object(n.jsx)("textarea",{className:"details",value:d,onChange:j}),Object(n.jsx)("p",{children:"deadline"}),Object(n.jsx)("input",{className:"deadline",type:"date",value:r,onChange:b}),Object(n.jsx)("button",{onClick:function(){O(),v(!1)},children:"complete"}),Object(n.jsx)("button",{onClick:function(){u(),v(!1)},children:"delete"}),Object(n.jsx)("button",{onClick:function(){h(),x(),v(!1)},children:"close"})]}),Object(n.jsx)("div",{className:"background"})]})),!0){case""===s:c={backgroundColor:" rgba(0, 128 ,0 ,0.300)"};break;case s===g:c={backgroundColor:"rgba(255, 255, 0 ,0.355)"};break;case s<g:c={backgroundColor:"rgba(255 , 0 , 0, 0.355)"};break;default:c={backgroundColor:" rgba(0, 128 ,0 ,0.300)"}}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("ul",{style:c,className:"box",onClick:function(){m(),p(),v(!0)},children:[Object(n.jsx)("li",{children:l}),Object(n.jsx)("li",{children:i}),Object(n.jsx)("li",{className:"date",children:s})]}),t]})},u=function(e){var t,c=e.title,l=e.details,i=e.completionDate,s=e.onClickReturn,d=Object(a.useState)(!1),r=Object(o.a)(d,2),j=r[0],b=r[1];return j&&(t=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"modal",children:[Object(n.jsx)("p",{children:c}),Object(n.jsx)("p",{children:"details"}),Object(n.jsx)("p",{className:"details",children:l}),Object(n.jsx)("p",{children:"Completion Date"}),Object(n.jsx)("p",{children:i}),Object(n.jsx)("button",{onClick:s,children:"return"}),Object(n.jsx)("button",{onClick:function(){return b(!1)},children:"close"})]}),Object(n.jsx)("div",{className:"background"})]})),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("ul",{className:"box",onClick:function(){return b(!0)},children:[Object(n.jsx)("li",{children:c}),Object(n.jsx)("li",{children:l}),Object(n.jsxs)("li",{className:"date",children:["complete: ",i]})]}),t]})},O=function(){var e=Object(a.useState)([{title:"todo1",details:"details1",deadline:"2020-11-10"},{title:"todo2",details:"details2",deadline:"2021-01-12"},{title:"todo3",details:"details3",deadline:"2021-03-25"}]),t=Object(o.a)(e,2),c=t[0],l=t[1],i=Object(a.useState)([{title:"todo4",details:"details4",completionDate:"2020-12-01"},{title:"todo5",details:"details5",completionDate:"2020-12-05"}]),s=Object(o.a)(i,2),O=s[0],h=s[1],x=new Date,m=x.getFullYear(),p=("0"+(x.getMonth()+1)).slice(-2),g=("0"+x.getDate()).slice(-2),k="".concat(m,"-").concat(p,"-").concat(g),f=Object(a.useState)(""),C=Object(o.a)(f,2),v=C[0],D=C[1],N=Object(a.useState)(""),y=Object(o.a)(N,2),T=y[0],w=y[1],S=function(e){return w(e.target.value)},B=Object(a.useState)(""),E=Object(o.a)(B,2),I=E[0],F=E[1],A=function(e){return F(e.target.value)},J=Object(a.useState)(Object(n.jsx)("span",{className:"blue",children:"done"})),M=Object(o.a)(J,2),R=M[0],L=M[1];return Object(n.jsxs)("div",{className:"wrapper show",children:[Object(n.jsx)("div",{className:"logo",children:"TodoList"}),Object(n.jsx)(r,{allChecked:function(){document.getElementById("todoCheck").checked?(document.getElementById("todoCheck").checked=!1,document.getElementById("doneCheck").checked=!1,L(Object(n.jsx)("span",{className:"blue",children:"done"}))):(document.getElementById("todoCheck").checked=!0,document.getElementById("doneCheck").checked=!0,L(Object(n.jsx)("span",{className:"green",children:"todo"})))},toggle:R}),Object(n.jsxs)("div",{className:"main-wrapper",children:[Object(n.jsxs)("div",{className:"left-container",children:[Object(n.jsx)(j,{onSubmitAdd:function(e){if(e.preventDefault(),""!==v){var t=[].concat(Object(d.a)(c),[{title:v,details:"",deadline:""}]);l(t),D("")}},todoText:v,onChangeTodoText:function(e){return D(e.target.value)}}),Object(n.jsx)("input",{type:"checkBox",id:"todoCheck"}),Object(n.jsxs)("div",{className:"todo",children:[Object(n.jsx)("p",{children:"todo"}),c.map((function(e,t){return Object(n.jsx)(b,{title:e.title,details:e.details,deadline:e.deadline,detailsText:T,deadlineDate:I,onChangeDetailsText:S,onChangeDeadlineDate:A,onClickDelete:function(){return function(e){var t=Object(d.a)(c);t.splice(e,1),l(t)}(t)},onClickComplete:function(){return function(e){c[e].completionDate=k;var t=Object(d.a)(c);t.splice(e,1);var n=[].concat(Object(d.a)(O),[c[e]]);l(t),h(n)}(t)},setNewDetails:function(){return function(e){c[e].details=T;var t=Object(d.a)(c);l(t)}(t)},setNewDeadline:function(){return function(e){c[e].deadline=I;var t=Object(d.a)(c);l(t)}(t)},getDetailsText:function(){return function(e){""===c[e].detailsText?w(""):w(c[e].details)}(t)},getDeadlineDate:function(){return function(e){""===c[e].deadline?F(""):F(c[e].deadline)}(t)},today:k},t)}))]})]}),Object(n.jsxs)("div",{className:"right-container",children:[Object(n.jsx)("input",{type:"checkBox",id:"doneCheck"}),Object(n.jsxs)("div",{className:"done",children:[Object(n.jsx)("div",{className:"space"}),Object(n.jsx)("p",{children:"done"}),O.map((function(e,t){return Object(n.jsx)(u,{title:e.title,details:e.details,completionDate:e.completionDate,onClickReturn:function(){return function(e){var t=Object(d.a)(O);t.splice(e,1),h(t);var n=[].concat(Object(d.a)(c),[O[e]]);l(n)}(t)}},t)}))]})]})]})]})};s.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.72b68a5d.chunk.js.map