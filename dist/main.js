(()=>{"use strict";var e={673:(e,t,o)=>{o.d(t,{sg:()=>C,LD:()=>x,Zz:()=>g});const d=document.querySelector("#saveProjectNameBtn"),r=document.querySelector("#inputProjectName");let l=document.querySelector(".project_Name"),c=document.querySelectorAll(".project"),n=document.querySelector(".todolist_Div");const a=(e,t)=>{let o=document.createElement("div");o.classList.add("aTodo");let d=document.createElement("h3");d.classList.add("aTodo_Title"),d.textContent=e,o.appendChild(d);let r=document.createElement("div");r.classList.add("aTodo_Desc"),r.textContent=t,o.appendChild(r);let l=document.createElement("div");l.classList.add("aTodo_Info");const c=(e,t)=>{let o=document.createElement("a");o.classList.add(e,t),l.appendChild(o)};document.createElement("div").classList.add("td_inf"),c("fas","fa-info-circle"),c("far","fa-circle"),c("fas","fa-trash"),o.appendChild(l),n.appendChild(o)},s=e=>{let t=document.querySelector(".projectList"),o=document.createElement("div");o.classList.add("project");let d=document.createElement("i");d.setAttribute("id","projectIcon"),d.classList.add("fas","fa-folder"),o.appendChild(d);let r=document.createElement("a");r.classList.add("sideBarLinks"),r.textContent=e,o.appendChild(r),t.appendChild(o),null===e&&void 0===e||(C.push(e),v())};let i=document.querySelector(".todolist_Div");const u=()=>{localStorage.setItem("saved_TodoList",JSON.stringify(x)),localStorage.setItem("saved_ProjectList",JSON.stringify(C))},m=()=>{u(),i.innerHTML="";for(let e of x)e.pro_Name==l.textContent&&a(e.title,e.description)};let p=document.querySelector(".newProjectBtn"),y=document.querySelector(".addProject");p.addEventListener("click",(()=>y.style.display="grid"));const v=()=>{c=document.querySelectorAll(".project"),c.forEach((e=>{e.addEventListener("click",(()=>{let t=e.lastElementChild.innerText;l.innerText=t,g=t,m()})),e.addEventListener("mouseover",(()=>{e.style.color="#949cdf",e.style.cursor="pointer"})),e.addEventListener("mouseout",(()=>{e.style.color="#6a6d7a",e.style.cursor="default"}))}))};d.addEventListener("click",(()=>{let e=r.value;0!=e&&s(e),y.style.display="none",r.value="",u(),v()})),document.querySelector(".todaysTodos").addEventListener("click",(()=>{l.innerText="Today",g="Today",m()})),v();let S,L=document.querySelector(".createTodo"),f=document.querySelector(".saveTodo"),E=document.querySelector(".newTodo"),q=document.querySelector("#todoTitle"),h=document.querySelector("#todoDescription"),T=document.querySelector("#dueDate"),_=document.querySelector(".todo_Important"),j=document.querySelector(".todo_Normal");_.addEventListener("click",(()=>{S="important",_.style.border="2px dotted black"})),j.addEventListener("click",(()=>{S="normal",j.style.border="2px dotted black"})),f.addEventListener("click",(()=>{let e=document.querySelector(".project_Name");L.style.display="none";const t=((e,t,o,d,r)=>({pro_Name:e,title:t,description:o,duedate:d,priority:r}))(e.textContent,q.value,h.value,T.value,S);x.push(t),m(),[e,q,h,T].forEach((e=>{e.value="",S=""}))})),E.addEventListener("click",(()=>L.style.display="grid"));let g="default",x=[],C=[];localStorage.length>0&&(()=>{let e=localStorage.getItem("saved_TodoList"),t=JSON.parse(e);x=t;let o=localStorage.getItem("saved_ProjectList");JSON.parse(o).forEach((e=>s(e)))})()}},t={};function o(d){if(t[d])return t[d].exports;var r=t[d]={exports:{}};return e[d](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var d in t)o.o(t,d)&&!o.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:t[d]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(673)})();