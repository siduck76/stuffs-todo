import { todoList } from "../index";

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
  let tdlist = document.querySelector(".todolist_Div");

  for (let i = 0; i <= todoList.length; i++) {
    let pr_Name = document.querySelector(".project_Name");
    /* if (todoList[i].pro_Name == pr_Name) {
      const cr_Todo = document.createElement(".p");
      cr_Todo.textContent = todoList[i].title;
      tdlist.appendChild(cr_Todo);
    } */

    console.log(todoList[i].title);
  }
};
