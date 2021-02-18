import { todoList } from "../index";
import { pName } from "./divSelectors";
import { create_todo } from "./createTodo";

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
};

export const todo = (pro_Name, title, description, duedate, priority) => {
  return { pro_Name, title, description, duedate, priority };
};

export const createTodo_List = () => {
  for (let tt of todoList) {
    if (tt.pro_Name == pName.textContent) {
      create_todo(tt.title, tt.description);
    }
  }
};
