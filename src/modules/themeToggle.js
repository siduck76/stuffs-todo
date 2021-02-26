// theme toggle

let themeToggle_Btn = document.querySelector(".fa-adjust");

const apply_DarkTheme = () => {
  // body

  let body = document.querySelector("body");
  body.classList.toggle("darkBody");

  // topheading

  let topH = document.querySelector(".topheading");
  topH.classList.toggle("dark_topHeading");

  // new project btn

  let newProjectBtn = document.querySelector(".newProjectBtn");
  newProjectBtn.classList.toggle("dark_newProjectBtn");

  // sidebar

  let sBar = document.querySelector(".sidebar");
  sBar.classList.toggle("dark_sidebar");

  let todaysTodos = document.querySelector(".todaysTodos");
  let importantTodos = document.querySelector(".importantTodos");
  let projects = document.querySelector(".projects");

  [todaysTodos, importantTodos, projects].forEach((tmp) => {
    tmp.addEventListener("mouseover", () => {
      tmp.style.backgroundColor = "#1d2021";
    });

    tmp.addEventListener("mouseout", () => {
      tmp.style.backgroundColor = "#181b1c";
    });
  });
};

themeToggle_Btn.addEventListener("click", () => {
  apply_DarkTheme();
});
