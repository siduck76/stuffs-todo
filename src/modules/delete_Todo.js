import { todoList } from "../index";
import { pName } from "./divSelectors";
import { saveto_LocalStorage, createTodo_List } from "./miscFunctions";

export const deleteTodos = () => {
  let trashIcons = document.querySelectorAll(".fa-trash");

  trashIcons.forEach((t) => {
    t.addEventListener("click", () => {
      let delete_ThisTodo =
        t.parentElement.parentElement.firstElementChild.textContent;

      for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].pro_Name == pName.textContent) {
          if (todoList[i].title == delete_ThisTodo) {
            todoList.splice(i, 1); //deletes todo from array

            saveto_LocalStorage();
            createTodo_List();

            break;
          }
        }
      }
    });
  });
};
