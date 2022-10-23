const headerButtonMenu = document.querySelector(".header__button-menu");
const mainMenu = document.querySelector(".main-menu");
const buttonMenuCansel = document.querySelector(".header-menu__cansel");
const blureBoxMain = document.querySelector(".blur-box");
export let clickButtonMenu = false;
import { modalRequestCall } from "./modalRequestCall.js";
import { modalFeedback } from "./modalFeedback.js";

headerButtonMenu.addEventListener("click", function () {
  mainMenu.classList.add("modal-menu");
  blureBoxMain.classList.add("blur");
  clickButtonMenu = true;
});

buttonMenuCansel.addEventListener("click", function () {
  mainMenu.classList.remove("modal-menu");
  clickButtonMenu = false;
  blureBoxMain.classList.remove("blur");
  modalRequestCall.classList.remove("modal");
  modalFeedback.classList.remove("modal");
});

blureBoxMain.addEventListener("click", function () {
  mainMenu.classList.remove("modal-menu");
  blureBoxMain.classList.remove("blur");
  clickButtonMenu = false;
});
