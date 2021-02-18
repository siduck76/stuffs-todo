let todolist_Div = document.querySelector(".todolist_Div");

const create_Todo_buttons = (class1, class2) => {
  let td_info = document.querySelector("td_inf");

  let temp = document.createElement("a");
  temp.classList.add(class1, class2);

  td_info.appendChild(temp);
};

const add_TodoBtns = () => {
  let td_info = document.createElement("div");
  td_info.classList.add("aTodo_Info");

  let delete_Todo = document.createElement("div");
  delete_Todo.classList.add("td_inf");

  create_Todo_buttons("fas", "fa-info-circle");
  create_Todo_buttons("far", "fa-circle");
  create_Todo_buttons("fas", "fa-trash");
};

const add_TodoTitle = () => {
  let todoDiv = document.querySelector(".aTodo");

  let td_Title = document.createElement("h3");
  td_Title.classList.add("aTodo_Title");
  todoDiv.appendChild(td_Title);
};

const add_TodoDescription = () => {
  let todoDiv = document.querySelector(".aTodo");

  let td_Desc = document.createElement("div");
  td_Desc.classList.add("aTodo_Desc");
  todoDiv.appendChild(td_Desc);
};

export const create_todo = () => {
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("aTodo");

  add_TodoTitle();
  add_TodoDescription();

  // collapse todo Desc, del todo
  add_TodoBtns();

  todolist_Div.appendChild(todoDiv);
};
