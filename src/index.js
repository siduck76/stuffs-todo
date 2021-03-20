import "./modules/buttonClicks";

import {
  retrieve_LocalStorage,
  showTodays_todo,
} from "./modules/miscFunctions";

export let whichPro_Clicked = "default",
  todoList = [],
  projectArr = [];

if (localStorage.length > 0) retrieve_LocalStorage();

showTodays_todo();
