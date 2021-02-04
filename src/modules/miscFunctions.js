export const addProject_toList = (name) => {
  let list = document.querySelector(".projectList");

  let item = document.createElement("div");
  item.classList.add(name);

  //item.innerHTML = <i id="projectIcon" class="fas fa-folder"></i>;

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
