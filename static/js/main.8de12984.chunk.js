(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{12:function(e,t,A){},14:function(e,t,A){},15:function(e,t,A){"use strict";A.r(t);var c=A(1),s=A.n(c),a=A(7),n=A.n(a),i=(A(12),A(2)),o=A(0),l=function(e){e.popup;var t=e.setPopup,A=e.searchChange,c=e.setsearchChange;return Object(o.jsxs)("div",{className:"add-task flex",children:[Object(o.jsxs)("p",{className:"flex",children:["New Task",Object(o.jsx)("span",{className:"add-icon",children:Object(o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFoSURBVEiJvZYxbsJAEEXfWka5AQV9ZFEDNQchouMYHIIzcAOa3CFAnSI1LoKEaCIUmknhv8pqWcdYwhlptNJ45s/4e2bWzsyoE+dcH5gAY2CkE2AH7HVuzeyzFsTMbhTIgSVwBSzQszS0XeWbJ7ES4EPgTcEnYAW8AAXgpIVsK/mYYoZ/JgDmwEUBr8AgVVUUM5CvKXaeTKDKL8AXsGgCTiRaKPYSvknIuaelNXiUxNOVhwmWnpYGgHlMQcLH07X0HdpXJ5yaOAeOwPGOb3ISZj9Tn/eAtZmVtf1cSU9aK8JYy2+S8Ts82wbwNuKxxhnVhHaVYARQUk2ni7iccTvJKb0CsyjWCbPM/6iiBN6Bp8D2rPMjsH3Lt1Y2qqS4o8/PwPkOv0KYm4xqK0LVTY8Sj7XPqFZuVwl20G7QDsChzaC1XRVTYNpqVfzLstPD7tZ1tC27uXCiN+nmygySPOzSdwJMyiN+W34AYJMOjcC5RBcAAAAASUVORK5CYII=",onClick:function(e){t(!0)}})})]}),Object(o.jsx)("input",{type:"text",placeholder:"Search Tasks",className:"search-todo",onChange:function(e){return c(e.target.value.toLowerCase())},value:A})]})},r=A(4),u=A(17),d=function(e){var t=e.popup,A=e.setPopup,s=e.tasks,a=e.setTasks,n=e.complete,l=e.setsearchChange,d=Object(c.useState)(""),j=Object(i.a)(d,2),p=j[0],h=j[1],b=Object(c.useState)(""),g=Object(i.a)(b,2),m=g[0],O=g[1];return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("Todo"));localStorage.getItem("Todo")&&a(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("Todo",JSON.stringify(Object(r.a)(s)))}),[s]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"todo-popup ".concat(t?"d-block":""),children:Object(o.jsxs)("div",{className:"popup-container",children:[Object(o.jsx)("figure",{className:"text-right",children:Object(o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACySURBVEiJxZYxDsIwDEWfOzDlYlyAQ3KAdmHjSkxdzJIFlJJ8x0CkqlITv+/aP1EMuAE7cHH3BwnDzApwBU5LhZ+BrU5kwLfK3AEKcAe8vou7E3larMOJDLi7010wA38RiIr0YuQAdW08cDCRWF2Vv5RtJ/Yp4hDNBAEbSjZe3rd6+vhriVoNbX0LCXwCKSK/32hSdupRodZ3JGYKPtSvWXhPJAXesTVrBvxAZDW+fG15AsmH2uD84R11AAAAAElFTkSuQmCC",alt:"close",className:"popup-close",onClick:function(){A(!1)}})}),Object(o.jsx)("h2",{children:"Add a Task"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a([].concat(Object(r.a)(s),[{id:Object(u.a)(),title:p,description:m,isCompleted:n}])),h(""),O(""),l("")},children:[Object(o.jsx)("input",{type:"text",placeholder:"Title",onChange:function(e){h(e.target.value)},value:p}),Object(o.jsx)("textarea",{name:"description",id:"description",cols:"30",rows:"10",placeholder:"Task Description",onChange:function(e){O(e.target.value)},value:m}),Object(o.jsx)("button",{className:"popup-btn",type:"submit",children:"Add Task"})]})]})}),Object(o.jsx)("div",{className:"overlay ".concat(t?"d-block":"")})]})},j=function(e){var t=e.setTasks,A=e.tasks,s=e.complete,a=e.setcomplete,n=e.searchChange;e.setsearchChange;return Object(c.useEffect)((function(){localStorage.setItem("Todo",JSON.stringify(Object(r.a)(A)))}),[s]),Object(o.jsx)("div",{className:"task-lists",children:A.map((function(e,c){var i=e.id,l=e.title,r=e.description,u=e.isCompleted;return Object(o.jsxs)("div",{className:"task-card flex ".concat(u?"complete":""," ").concat(-1!==l.indexOf(n)||""===n?"":"d-none"),children:[Object(o.jsxs)("div",{className:"task-context",children:[Object(o.jsx)("h3",{className:"title",children:l}),Object(o.jsx)("p",{children:r}),Object(o.jsxs)("p",{children:["Status: ",Object(o.jsx)("span",{children:u?"Completed":"TBI"})]})]}),Object(o.jsx)("figure",{className:"task-complete",children:Object(o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIOSURBVFiFzZc9SwNBEIafiUKCpLJKBMsIFna2aawSLLTI37Cwt0wvmCL+ACGtQgoLFQIpFMRWsA1qH1CSai0yRzabvcvdcXoubHE3H++7M7Ozu2KMIc4QkSJwABwBu0BVJ8CnzlfgBngwxkxjOTbGRE4F6QJjwMScY7WprvIvYREQkRJwBpwCG5ZoCjwDI+BD/20B28A+ULR0v4FzoG2MmcSOAFABHp1V9YEWUI6IVll1+o7tI1Dx2nic7OnqAuMnoL4qlB4/dbUN/IyAvUgCunIbvAOsJwW3/K0DFw6JipcAUHLCfpIW2EPkxElHyUegba88K3DLf8fy314gwGyrfVk5Tx32FekIauIL3aKBsGuxS1xwCQszwOnqP4rMm0w/I6Aa0IRZn3FkwRYdKzZNi1UrA/AGMFF/TY+8ZeE1AS71YxLVZFKAT4CaR6ds6VwCDPRjmDF4I0J3qHqDAvMTbUTIEJFCmEzlDeBaczoFjo0xtxEmAVbVJvDh0xSRGvAuIvcispkBuI1VjVyZjh1mLfoAuLNJpARfGm/M8tELyVcBuGJeuS/AJgly7vHZU7s3iFGEwJpD4jUtuFuEEHMbekikBV/ahrEbkUMiMXhYI0rUirUmDvE0mZgEFlux/szvMFJBvsexKuR3IVGFfK9kqpjfpdQyyu9a7kTiTx4m//Np5qwqn8epJyK/8jz/Acav6MO1/TQdAAAAAElFTkSuQmCC",alt:"checkmarkicon",onClick:function(e){return function(e,t){var c=A.filter((function(e,A){return t===e.id}));a(!s),c[0].isCompleted=!s}(0,i)}})}),Object(o.jsx)("figure",{className:"task-delete",children:Object(o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAG2SURBVFiF7dfLahRREAbgz0QM4gUS8gAxuhK8PIArQV9C95JdyCu4y8JnMdnqTkEQQaLuoijoQkwgIEkmyui46NOhPV2d6ZaZycL8UHSfOnXq/7v6XLrphst4igMMMjvAE1zqkvBUh9hpvMFVbON71n8R83iHm/jVRUgb3FY86TNMBf1TqW+QYlvhdNY+g2uYDWIfpOvGEQQbuIWlBpE7eIuf0eAb+KT+bkdtH3E9EvBqAuSlvSxJy0l4FrsNZRsHfuM8eiXhzATJJa6Z8gZ+oD9BAT3FvnG4CnqK2buICxMQ8LoUcOyIdsJHODcmvj2sDAv6YHzL731OFs38b4HvOe7ha+Z/mKyKHdzHiyDPVuCrYV1d+XLqe5z5Z5NVfWspdjnIs56T5WfBMJWDIW2KTaYJtepGr6BVmf4RtdwnAk4EtN0HRoVjXwXbbQT0FHv2qLGbcg8VwHiqEOb8rwSEkzs6C6Lg8j9hLvDn3xRzlb4qahPwKKz6+xTrY1P9dNtKlvs305iqbzUiaqrAl6w9jStB3HzD+Cj2c0NsiEXsG92X0B4WugiAu4p/vbyUXayfctxpIvkDcsPi2s5EZnQAAAAASUVORK5CYII=",alt:"trashicon",onClick:function(e){return function(e,c){var s=A.filter((function(e,t){return c!==e.id}));t(s)}(0,i)}})})]},c)}))})};A(14);var p=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),A=t[0],s=t[1],a=Object(c.useState)([]),n=Object(i.a)(a,2),r=n[0],u=n[1],p=Object(c.useState)(!1),h=Object(i.a)(p,2),b=h[0],g=h[1],m=Object(c.useState)(""),O=Object(i.a)(m,2),C=O[0],v=O[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(l,{popup:A,setPopup:s,searchChange:C,setsearchChange:v}),Object(o.jsx)(d,{popup:A,setPopup:s,tasks:r,setTasks:u,complete:b,setcomplete:g,setsearchChange:v}),Object(o.jsx)(j,{tasks:r,setTasks:u,complete:b,setcomplete:g,searchChange:C,setsearchChange:v})]})})},h=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,18)).then((function(t){var A=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,n=t.getTTFB;A(e),c(e),s(e),a(e),n(e)}))};n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.8de12984.chunk.js.map