import { defaultTheme } from "../index";

let themeToggle_Btn = document.querySelector(".fa-adjust");

const create_Theme = (() => {
  const bodyCol = (fg, bg) => {
    let body = document.querySelector("body");
    body.style.backgroundColor = bg;
    body.style.color = fg;
  };

  const topHeading_Col = (fg, bg) => {
    let topH = document.querySelector(".topHeading");
    topH.style.backgroundColor = bg;
    topH.style.color = fg;
  };

  const newProjectBtn_Col = (fg, bg) => {
    let newPro = document.querySelector(".newProjectBtn");
    newPro.style.backgroundColor = bg;
    newPro.style.color = fg;
  };

  const sidebar_Col = (borderCol, borderLeft_Col) => {
    let sbar = document.querySelector(".sidebar");
    let project  = document.querySelectorAll('.project')

    project.forEach((i) => {
      i.style.borderLeft = `0.2rem solid ${borderLeft_Col}`;
    })
    sbar.style.borderRight = `2px solid ${borderCol}`;
  };

  const sideBar_Icons = (todayTodoCol, importantTodos_col, project_col) => {
    let t1 = document.querySelector(".fa-calendar-day");
    let t2 = document.querySelector(".fa-meteor");
    let t3 = document.querySelector(".fa-folder");

    t1.style.color = todayTodoCol;
    t2.style.color = importantTodos_col;
    t3.style.color = project_col;
  };


  return {
    bodyCol,
    topHeading_Col,
    newProjectBtn_Col,
    sidebar_Col,
    sideBar_Icons,
  };
})();

const apply_LightTheme = () => {
  create_Theme.bodyCol("#4c4f5c", "white");
  create_Theme.topHeading_Col("white", "#1d2021");
  create_Theme.newProjectBtn_Col("#1d2021", "white");

  create_Theme.sidebar_Col("#f0f0f0", "#f0f0f0");
  create_Theme.sideBar_Icons("#9592e7", "#ff8080", "#c0e4fe");
};

const apply_DarkTheme = () => {
  create_Theme.bodyCol("#D8DEE9", "#181b1c");
  create_Theme.topHeading_Col("#D8DEE9", "#1f2223");
  create_Theme.newProjectBtn_Col("#1d2021", "#61afef");

  create_Theme.sidebar_Col("#1d2021","#a3be8c");
  create_Theme.sideBar_Icons("#61afef", "#f5f5f5", "#d08770");
};

let toggleCounter = 0;

themeToggle_Btn.addEventListener("click", () => {
  toggleCounter++;

  toggleCounter % 2 != 0 ? apply_DarkTheme() : apply_LightTheme();
});
