import { saveto_LocalStorage } from "./miscFunctions";
import { todoList, defaultTheme } from "../index";

let normal_TodoCol = "rgb(255, 234, 203)";
let finished_todoCol = "rgb(220, 255, 237)";

export const makeTodoChecked = () => {
  if (defaultTheme == "light") {
    normal_TodoCol = "rgb(255, 255, 203)";
    finished_todoCol = "rgb(220, 255, 237)";

    console.log(defaultTheme);
  } else if (defaultTheme == "dark") {
    normal_TodoCol = "rgb(29, 32, 33)";
    finished_todoCol = "  rgb(29, 32, 33)";

    let atodos = document.querySelectorAll(".atodo");
    atodos.forEach((i) => {
      i.style.backgroundColor = normal_TodoCol;
    });
    normal_TodoCol = "rgb(29, 32, 33)";
    finished_todoCol = "  rgb(29, 32, 33)";
    console.log(defaultTheme);
  }

  let checkIcons = document.querySelectorAll(".fa-circle");

  checkIcons.forEach((t) => {
    t.classList.add("fa-check-circle");

    t.addEventListener("click", () => {
      let temp_WholeTodo = t.parentElement.parentElement;

      temp_WholeTodo.classList.toggle("todo_done");
      temp_WholeTodo.children[0].classList.toggle("todo_done_Title");
      temp_WholeTodo.children[2].classList.toggle("todo_done_Btns");

      t.classList.toggle("fa-circle");

      const check_forDoneTodos = () => {
        let atodos = document.querySelectorAll(".atodo");

        atodos.forEach((t) => {
          for (let tt of todoList) {
            if (tt.title == t.firstElementChild.textContent) {
              let style = window.getComputedStyle(t);
              let tempBGcolor = style.getPropertyValue("background-color");

              if (tempBGcolor == finished_todoCol) {
                tt.status = "done";
                t.children[3].textContent = "done";
                saveto_LocalStorage();
              } else if (tempBGcolor == normal_TodoCol) {
                tt.status = "not_done";
                t.children[3].textContent = "not_done";

                saveto_LocalStorage();
              }
            }
          }
        });
      };

      check_forDoneTodos();
    });
  });
};

export const addCol_FinishedTODOS = () => {
  for (let tt of todoList) {
    let atodos = document.querySelectorAll(".atodo");

    atodos.forEach((t) => {
      if (tt.title == t.firstElementChild.textContent) {
        if (tt.status == "done") {
          t.classList.add("todo_done");
          t.firstElementChild.classList.add("todo_done_Cut");
          t.children[1].classList.add("todo_done_Cut");
          t.children[2].children[1].classList.remove("fa-circle");
        }
      }
    });
  }
};
