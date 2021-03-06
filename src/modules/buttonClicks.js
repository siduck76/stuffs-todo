// p_ = project

import {
  inputProjectName,
  saveProjectNameBtn,
  pName,
  listOfProjects,
} from "./divSelectors";

import {
  addProject_toList,
  todo,
  createTodo_List,
  saveto_LocalStorage,
} from "./miscFunctions";

import { todoList, whichPro_Clicked } from "../index";
import { create_todo } from "./createTodo";
import { deleteTodos } from "./delete_Todo";
import { makeTodoChecked, addCol_FinishedTODOS } from "./makeTodo_Checked";

let newProjectBtn = document.querySelector(".newProjectBtn");
let addProject = document.querySelector(".addProject");

newProjectBtn.addEventListener("click", () => {
  addProject.style.display = "grid";
});

export const p_onHover = () => {
  listOfProjects = document.querySelectorAll(".project"); // updates the var

  listOfProjects.forEach((project) => {
    project.addEventListener("click", () => {
      let tmp = project.lastElementChild.innerText;
      pName.innerText = tmp;
      whichPro_Clicked = tmp;

      createTodo_List();
    });

    project.addEventListener("mouseover", () => {
      project.style.color = "#949cdf";
      project.style.cursor = "pointer";
    });

    project.addEventListener("mouseout", () => {
      project.style.color = "#6a6d7a";
      project.style.cursor = "default";
    });
  });
};

// adds the project to the list

saveProjectNameBtn.addEventListener("click", () => {
  let projectName = inputProjectName.value;
  if (projectName != 0) addProject_toList(projectName);

  addProject.style.display = "none";
  inputProjectName.value = "";

  saveto_LocalStorage();
  p_onHover();
});

let todays_Todo = document.querySelector(".todaysTodos");

const today_TodoClick = () => {
  todays_Todo.addEventListener("click", () => {
    pName.innerText = "Today";

    whichPro_Clicked = "Today";
    createTodo_List();

    // enables deleting todo and making em checked*
    deleteTodos();

    let tempTodo = document.querySelector(".atodo");
    if (tempTodo != null) {
      makeTodoChecked();
      addCol_FinishedTODOS();
    }
  });
};

today_TodoClick();

p_onHover();

// todo item stuffs

let createTodo = document.querySelector(".createTodo");
let saveTodo = document.querySelector(".saveTodo");
let newTodo = document.querySelector(".newTodo");

let todoTitle = document.querySelector("#todoTitle");
let todoDescription = document.querySelector("#todoDescription");
let dueDate = document.querySelector("#dueDate");
let todo_prior;

let todo_Imp = document.querySelector(".todo_Important");
let todo_normie = document.querySelector(".todo_Normal");

todo_Imp.addEventListener("click", () => {
  todo_prior = "important";
  todo_Imp.style.backgroundColor = "#f0f0f0";
  todo_normie.style.backgroundColor = "white";
});

todo_normie.addEventListener("click", () => {
  todo_prior = "normal";
  todo_normie.style.backgroundColor = "#f0f0f0";
  todo_Imp.style.backgroundColor = "white";
});

[todo_normie, todo_Imp].forEach((temp) => {
  temp.addEventListener("mouseover", () => {
    temp.style.cursor = "pointer";
  });
});
saveTodo.addEventListener("click", () => {
  let pro_Name = document.querySelector(".project_Name");

  createTodo.style.display = "none";

  // creates a todo
  const todoSample = todo(
    pro_Name.textContent,
    todoTitle.value,
    todoDescription.value,
    dueDate.value,
    todo_prior,
    "not_done"
  );

  todoList.push(todoSample);

  createTodo_List();

  // clear all previous values
  [pro_Name, todoTitle, todoDescription, dueDate].forEach((temp) => {
    temp.value = "";
    todo_prior = "";
  });
});

newTodo.addEventListener("click", () => (createTodo.style.display = "grid"));

// stuffs to happen when important todo is clicked

let imp_Td = document.querySelector(".importantTodos");
imp_Td.addEventListener("click", () => {
  pName.innerText = "All Important Todos!";

  let tdlist = document.querySelector(".todolist_Div");
  tdlist.innerHTML = "";

  for (let tt of todoList) {
    if (tt.priority == "important") {
      create_todo(tt.title, tt.description, "not_done");

      let atodos = document.querySelectorAll(".atodo");

      atodos.forEach((t) => {
        let tmp_todotitle = t.firstElementChild.textContent;
        if (tmp_todotitle == tt.title) {
          t.style.backgroundColor = "#FFB2B2";
          t.children[2].style.backgroundColor = "#CC8E8E"
        }
      });
    }
  }

  deleteTodos();

  let tempTodo = document.querySelector(".atodo");
  if (tempTodo != null) {
    makeTodoChecked();
    addCol_FinishedTODOS();
  }
});
