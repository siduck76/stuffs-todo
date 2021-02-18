// p_ = project

import {
  inputProjectName,
  saveProjectNameBtn,
  pName,
  listOfProjects,
} from "./divSelectors";

import { addProject_toList, todo, createTodo_List } from "./miscFunctions";
import { todoList, whichPro_Clicked } from "../index";
//import { create_todo } from "./createTodo";

let newProjectBtn = document.querySelector(".newProjectBtn");
let addProject = document.querySelector(".addProject");

newProjectBtn.addEventListener(
  "click",
  () => (addProject.style.display = "grid")
);

const p_onHover = () => {
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

  p_onHover();
});

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
  todo_Imp.style.border = "2px dotted black";
});

todo_normie.addEventListener("click", () => {
  todo_prior = "normal";
  todo_normie.style.border = "2px dotted black";
});

saveTodo.addEventListener("click", () => {
  let pro_Name = document.querySelector(".project_Name");

  createTodo.style.display = "none";

  //creates a todo
  const todoSample = todo(
    pro_Name.textContent,
    todoTitle.value,
    todoDescription.value,
    dueDate.value,
    todo_prior
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
