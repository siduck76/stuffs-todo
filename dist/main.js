(()=>{"use strict";var e={7:(e,t,o)=>{o.d(t,{sg:()=>x,LD:()=>k,Zz:()=>_});const r=document.querySelector("#saveProjectNameBtn"),d=document.querySelector("#inputProjectName");let l=document.querySelector(".project_Name"),n=document.querySelectorAll(".project"),c=document.querySelector(".todolist_Div");const a=(e,t)=>{let o=document.createElement("div");o.classList.add("aTodo");let r=document.createElement("h3");r.classList.add("aTodo_Title"),r.textContent=e,o.appendChild(r);let d=document.createElement("div");d.classList.add("aTodo_Desc"),d.textContent=t,o.appendChild(d);let l=document.createElement("div");l.classList.add("aTodo_Info");const n=(e,t)=>{let o=document.createElement("a");o.classList.add(e,t),l.appendChild(o)};document.createElement("div").classList.add("td_inf"),n("fas","fa-edit"),n("far","fa-circle"),n("fas","fa-trash"),o.appendChild(l),c.appendChild(o)},s=e=>{let t=document.querySelector(".projectList"),o=document.createElement("div");o.classList.add("project");let r=document.createElement("i");r.setAttribute("id","projectIcon"),r.classList.add("fas","fa-folder"),o.appendChild(r);let d=document.createElement("a");d.classList.add("sideBarLinks"),d.textContent=e,o.appendChild(d),t.appendChild(o),null===e&&void 0===e||(x.push(e),f())};let i=document.querySelector(".todolist_Div");const u=()=>{localStorage.setItem("saved_TodoList",JSON.stringify(k)),localStorage.setItem("saved_ProjectList",JSON.stringify(x))},m=()=>{u(),i.innerHTML="";for(let e of k)e.pro_Name==l.textContent&&a(e.title,e.description);document.querySelectorAll(".fa-trash").forEach((e=>{e.addEventListener("click",(()=>{let t=e.parentElement.parentElement.firstElementChild.textContent;for(let e=0;e<k.length;e++)if(k[e].pro_Name==l.textContent&&k[e].title==t){k.splice(e,1),u(),m();break}}))}))};let p=document.querySelector(".newProjectBtn"),y=document.querySelector(".addProject");p.addEventListener("click",(()=>{y.style.display="grid"}));const f=()=>{n=document.querySelectorAll(".project"),n.forEach((e=>{e.addEventListener("click",(()=>{let t=e.lastElementChild.innerText;l.innerText=t,_=t,m()})),e.addEventListener("mouseover",(()=>{e.style.color="#949cdf",e.style.cursor="pointer"})),e.addEventListener("mouseout",(()=>{e.style.color="#6a6d7a",e.style.cursor="default"}))}))};r.addEventListener("click",(()=>{let e=d.value;0!=e&&s(e),y.style.display="none",d.value="",u(),f()})),document.querySelector(".todaysTodos").addEventListener("click",(()=>{l.innerText="Today",_="Today",m()})),f();let v,S=document.querySelector(".createTodo"),E=document.querySelector(".saveTodo"),L=document.querySelector(".newTodo"),h=document.querySelector("#todoTitle"),T=document.querySelector("#todoDescription"),q=document.querySelector("#dueDate"),C=document.querySelector(".todo_Important"),g=document.querySelector(".todo_Normal");C.addEventListener("click",(()=>{v="important",C.style.backgroundColor="#f0f0f0",g.style.backgroundColor="white"})),g.addEventListener("click",(()=>{v="normal",g.style.backgroundColor="#f0f0f0",C.style.backgroundColor="white"})),[g,C].forEach((e=>{e.addEventListener("mouseover",(()=>{e.style.cursor="pointer"}))})),E.addEventListener("click",(()=>{let e=document.querySelector(".project_Name");S.style.display="none";const t=((e,t,o,r,d)=>({pro_Name:e,title:t,description:o,duedate:r,priority:d}))(e.textContent,h.value,T.value,q.value,v);k.push(t),m(),[e,h,T,q].forEach((e=>{e.value="",v=""}))})),L.addEventListener("click",(()=>S.style.display="grid")),document.querySelector(".importantTodos").addEventListener("click",(()=>{l.innerText="All Important Todos!",document.querySelector(".todolist_Div").innerHTML="";for(let e of k)"important"==e.priority&&a(e.title,e.description)}));let _="default",k=[],x=[];localStorage.length>0&&(()=>{let e=localStorage.getItem("saved_TodoList"),t=JSON.parse(e);k=t;let o=localStorage.getItem("saved_ProjectList");JSON.parse(o).forEach((e=>s(e)))})(),l.innerText="Today",_="Today",m()}},t={};function o(r){if(t[r])return t[r].exports;var d=t[r]={exports:{}};return e[r](d,d.exports,o),d.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(7)})();