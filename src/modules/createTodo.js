let todolist_Div = document.querySelector(".todolist_Div");

export const create_todo = (title, desc) => {
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("aTodo");

  // add title

  let td_Title = document.createElement("h3");
  td_Title.classList.add("aTodo_Title");
  td_Title.textContent = title;
  todoDiv.appendChild(td_Title);

  // add description

  let td_Desc = document.createElement("div");
  td_Desc.classList.add("aTodo_Desc");
  td_Desc.textContent = desc;
  todoDiv.appendChild(td_Desc);

  // collapse todo Desc, del todo

  let td_info = document.createElement("div");
  td_info.classList.add("aTodo_Info");

  const create_Todo_buttons = (class1, class2) => {
    let temp = document.createElement("a");
    temp.classList.add(class1, class2);

    td_info.appendChild(temp);
  };

  let delete_Todo = document.createElement("div");
  delete_Todo.classList.add("td_inf");

  create_Todo_buttons("fas", "fa-edit");
  create_Todo_buttons("far", "fa-circle");
  create_Todo_buttons("fas", "fa-trash");

  todoDiv.appendChild(td_info);

  todolist_Div.appendChild(todoDiv);
};
