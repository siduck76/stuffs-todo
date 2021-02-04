import {
  inputProjectName,
  saveProjectNameBtn,
  pName,
  listOfProjects,
} from "./divSelectors";

import { addProject_toList } from "./miscFunctions";

let newProjectBtn = document.querySelector(".newProjectBtn");
let addProject = document.querySelector(".addProject");

newProjectBtn.addEventListener("click", () => addProject.style.display = "grid");

const p_onHover = () => {
  listOfProjects = document.querySelectorAll(".project"); // updates the var

  listOfProjects.forEach((project) => {
    project.addEventListener("click",() => pName.innerText = project.lastElementChild.innerText);
    project.addEventListener("mouseover",() => project.style.color = "#949cdf");
    project.addEventListener("mouseout",() => project.style.color = "#6a6d7a");
  });
};

// adds the project to the list

saveProjectNameBtn.addEventListener("click", () => {
  let projectName = inputProjectName.value;
  addProject_toList(projectName);

  addProject.style.display = "none";
  inputProjectName.value = "";

  p_onHover();
});

p_onHover();
