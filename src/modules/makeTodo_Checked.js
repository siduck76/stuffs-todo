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
    });
  });
};
