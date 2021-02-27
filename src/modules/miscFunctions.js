import { todoList, projectArr, whichPro_Clicked, defaultTheme } from "../index";
import { pName } from "./divSelectors";
import { create_todo } from "./createTodo";
import { p_onHover } from "./buttonClicks";
import { deleteTodos } from "./delete_Todo";
import { makeTodoChecked, addCol_FinishedTODOS } from "./makeTodo_Checked";
import { apply_LightTheme, apply_DarkTheme } from "./themeToggle";

export const addProject_toList = (name) => {
  let list = document.querySelector(".projectList");

  let item = document.createElement("div");
  item.classList.add("project");

  // item.innerHTML = <i id="projectIcon" class="fas fa-folder"></i>;

  let defaultIcon = document.createElement("i");
  defaultIcon.classList.add("projectIcon");
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

export const todo = (
  pro_Name,
  title,
  description,
  duedate,
  priority,
  status
) => {
  return { pro_Name, title, description, duedate, priority, status };
};

let tdlist = document.querySelector(".todolist_Div");

export const saveto_LocalStorage = () => {
  localStorage.setItem("saved_TodoList", JSON.stringify(todoList));
  localStorage.setItem("saved_ProjectList", JSON.stringify(projectArr));
  localStorage.setItem("saved_Theme", defaultTheme);
};

export const retrieve_LocalStorage = () => {
  let tempArray = localStorage.getItem("saved_TodoList");

  let saved_Todolist = JSON.parse(tempArray);
  todoList = saved_Todolist;

  // save projectlist

  let tempList = localStorage.getItem("saved_ProjectList");
  let saved_proList = JSON.parse(tempList);

  saved_proList.forEach((bb) => addProject_toList(bb));

  // save theme
  defaultTheme = localStorage.getItem("saved_Theme");

  defaultTheme == "light" ? apply_LightTheme() : apply_DarkTheme();
};

export const createTodo_List = () => {
  saveto_LocalStorage();
  tdlist.innerHTML = ""; // clear whole div to rm duplicates

  for (let tt of todoList) {
    if (tt.pro_Name == pName.textContent)
      create_todo(tt.title, tt.description, "not_done");
  }

  deleteTodos();

  let tempTodo = document.querySelector(".atodo");
  if (tempTodo != null) {
    makeTodoChecked();
    addCol_FinishedTODOS();
  }
};

export const showTodays_todo = () => {
  pName.innerText = "Today";

  whichPro_Clicked = "Today";
  createTodo_List();
};
