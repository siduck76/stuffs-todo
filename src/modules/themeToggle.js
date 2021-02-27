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
  return {
    bodyCol,
    topHeading_Col,
  };
})();

const apply_LightTheme = () => {
  create_Theme.bodyCol("#4c4f5c", "white");
    create_Theme.topHeading_Col("white", "#1d2021");

};

const apply_DarkTheme = () => {
  create_Theme.bodyCol("#D8DEE9", "#181b1c");
  create_Theme.topHeading_Col("#D8DEE9", "#1f2223");
};



let toggleCounter = 0;

themeToggle_Btn.addEventListener("click", () => {
  toggleCounter++;

  toggleCounter % 2 != 0 ? apply_DarkTheme() : apply_LightTheme();
});
