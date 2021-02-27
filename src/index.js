import {} from "./modules/buttonClicks";

import {
  retrieve_LocalStorage,
  showTodays_todo,
} from "./modules/miscFunctions";

import {} from "./modules/settingsPage";
import {} from "./modules/themeToggle";

export let whichPro_Clicked = "default";
export let todoList = [];
export let projectArr = [];
export let defaultTheme = "light";

if (localStorage.length > 0) retrieve_LocalStorage();

showTodays_todo();

