import { saveto_LocalStorage } from "./miscFunctions";
import { todoList } from "../index";

let lavenderBlushCol = "rgb(255, 240, 245)";
let lightGreenCol = "rgb(220, 255, 237)";

export const makeTodoChecked = () => {
  let checkIcons = document.querySelectorAll(".fa-circle");

  checkIcons.forEach((t) => {
    t.classList.add("fa-check-circle");

    t.addEventListener("click", () => {
      let temp_WholeTodo = t.parentElement.parentElement;
      temp_WholeTodo.classList.toggle("todo_done");
      temp_WholeTodo.children[0].classList.toggle("todo_done_Title");
      temp_WholeTodo.children[1].classList.toggle("todo_done_Cut");
      temp_WholeTodo.children[2].classList.toggle("todo_done_Btns");

      t.classList.toggle("fa-circle");

      const check_forDoneTodos = () => {
        let atodos = document.querySelectorAll(".atodo");

        atodos.forEach((t) => {
          for (let tt of todoList) {
            if (tt.title == t.firstElementChild.textContent) {
              let style = window.getComputedStyle(t);
              let tempBGcolor = style.getPropertyValue("background-color");

              if (tempBGcolor == lightGreenCol) {
                tt.status = "done";
                saveto_LocalStorage();
              } else if (tempBGcolor == lavenderBlushCol) {
                tt.status = "not_done";
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
