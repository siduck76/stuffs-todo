import { todoList, projectArr, whichPro_Clicked } from "../index";
import { pName } from "./divSelectors";
import { create_todo } from "./createTodo";
import { p_onHover } from "./buttonClicks";
import { deleteTodos } from "./delete_Todo";

export const addProject_toList = (name) => {
  let list = document.querySelector(".projectList");

  let item = document.createElement("div");
  item.classList.add("project");

  // item.innerHTML = <i id="projectIcon" class="fas fa-folder"></i>;

  let defaultIcon = document.createElement("i");
  defaultIcon.setAttribute("id", "projectIcon");
  defaultIcon.classList.add("fas", "fa-folder");

  item.appendChild(defaultIcon);

  let projectsName = document.createElement("a");
  projectsName.classList.add("sideBarLinks");
  projectsName.textContent = name;

  item.appendChild(projectsName);
  list.appendChild(item);

  if (name !== null || name !== undefined) {
    projectArr.push(name);
    p_onHover();
  }
};

export const todo = (pro_Name, title, description, duedate, priority) => {
  return { pro_Name, title, description, duedate, priority };
};

let tdlist = document.querySelector(".todolist_Div");

export const saveto_LocalStorage = () => {
  localStorage.setItem("saved_TodoList", JSON.stringify(todoList));
  localStorage.setItem("saved_ProjectList", JSON.stringify(projectArr));
};

export const retrieve_LocalStorage = () => {
  let tempArray = localStorage.getItem("saved_TodoList");

  let saved_Todolist = JSON.parse(tempArray);
  todoList = saved_Todolist;

  // save projectlist

  let tempList = localStorage.getItem("saved_ProjectList");
  let saved_proList = JSON.parse(tempList);

  saved_proList.forEach((bb) => addProject_toList(bb));
};

export const createTodo_List = () => {
  saveto_LocalStorage();
  tdlist.innerHTML = ""; // clear whole div to rm duplicates

  for (let tt of todoList) {
    if (tt.pro_Name == pName.textContent) create_todo(tt.title, tt.description);
  }

  deleteTodos();
};

export const showTodays_todo = () => {
  pName.innerText = "Today";

  whichPro_Clicked = "Today";
  createTodo_List();
};
