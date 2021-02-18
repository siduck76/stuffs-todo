import {} from "./modules/buttonClicks";
import {retrieve_LocalStorage} from "./modules/miscFunctions";

export let whichPro_Clicked = "default";

export let todoList = [];

if(localStorage.length > 0) retrieve_LocalStorage()

