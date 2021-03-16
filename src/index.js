import "./modules/buttonClicks";

import {
  retrieve_LocalStorage,
  showTodays_todo,
} from "./modules/miscFunctions";

/* import  "./modules/settingsPage";
 import  "./modules/themeToggle"; */

export let whichPro_Clicked = "default",
  todoList = [],
  projectArr = [];
// defaultTheme = "light";

if (localStorage.length > 0) retrieve_LocalStorage();

showTodays_todo();
