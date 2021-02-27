import { defaultTheme } from "../index";
import { saveto_LocalStorage } from "./miscFunctions";

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
    let project = document.querySelectorAll(".project");

    project.forEach((i) => {
      i.style.borderLeft = `0.2rem solid ${borderLeft_Col}`;
    });
    sbar.style.borderRight = `2px solid ${borderCol}`;
  };

  const sideBar_Icons = (
    todayTodoCol,
    importantTodos_col,
    project_col,
    projectIcons_col
  ) => {
    let t1 = document.querySelector(".fa-calendar-day");
    let t2 = document.querySelector(".fa-meteor");
    let t3 = document.querySelector(".fa-folder");

    t1.style.color = todayTodoCol;
    t2.style.color = importantTodos_col;
    t3.style.color = project_col;

    let projectIcons = document.querySelectorAll(".projectIcon");
    let projects = document.querySelectorAll(".project");

    [projectIcons, projects].forEach((i) => {
      i.forEach((j) => {
        j.style.color = projectIcons_col;
      });
    });
  };

  const todo_Col = (bg, fg) => {
    const todo = document.querySelectorAll(".atodo");
    todo.forEach((i) => {
      i.style.backgroundColor = bg;
      i.style.color = fg;
    });
  };

  return {
    bodyCol,
    topHeading_Col,
    newProjectBtn_Col,
    sidebar_Col,
    sideBar_Icons,
    todo_Col,
  };
})();

export const apply_LightTheme = () => {
  defaultTheme = "light";
  saveto_LocalStorage();

  create_Theme.bodyCol("#4c4f5c", "white");

  create_Theme.topHeading_Col("white", "#1d2021");
  create_Theme.newProjectBtn_Col("#1d2021", "white");

  create_Theme.sidebar_Col("#f0f0f0", "#f0f0f0");
  create_Theme.sideBar_Icons("#9592e7", "#ff8080", "#c0e4fe", "#4c4f5c");
    create_Theme.todo_Col("#ffffcb", "#1d2021");

};

export const apply_DarkTheme = () => {
  defaultTheme = "dark";
  saveto_LocalStorage();

  create_Theme.bodyCol("#D8DEE9", "#181b1c");

  create_Theme.topHeading_Col("#D8DEE9", "#1f2223");
  create_Theme.newProjectBtn_Col("#1d2021", "#61afef");

  create_Theme.sidebar_Col("#1d2021", "#a3be8c");
  create_Theme.sideBar_Icons("#61afef", "#f5f5f5", "#d08770", "#818485");
  create_Theme.todo_Col("#1d2021", "#D8DEE9");
};

let toggleCounter = 0;

themeToggle_Btn.addEventListener("click", () => {
  toggleCounter++;

  toggleCounter % 2 != 0 ? apply_DarkTheme() : apply_LightTheme();
});
