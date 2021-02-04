import { inputProjectName, saveProjectNameBtn } from "./divSelectors";
import { addProject_toList } from "./miscFunctions";

let newProjectBtn = document.querySelector(".newProjectBtn");
let addProject = document.querySelector(".addProject");

newProjectBtn.addEventListener("click", () => {
  addProject.style.display = "grid";
});

saveProjectNameBtn.addEventListener("click", () => {
  let projectName = inputProjectName.value;
  addProject_toList(projectName);

  addProject.style.display = "none";
  inputProjectName.value = "";
});
