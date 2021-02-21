import {} from "./modules/buttonClicks";
import {
  retrieve_LocalStorage,
  showTodays_todo,
} from "./modules/miscFunctions";

export let whichPro_Clicked = "default";
export let todoList = [];
export let projectArr = [];

if (localStorage.length > 0) retrieve_LocalStorage();

showTodays_todo();
