const headerButtonMenu = document.querySelector(".header__button-menu");
const mainMenu = document.querySelector(".main-menu");
export const body = document.querySelector("body");
const buttonMenuCansel = document.querySelector(".header-menu__cansel");
const blureBoxMain = document.querySelector(".blur-box");
export let clickButtonMenu = false;
import { modalRequestCall } from "./modalRequestCall.js";
import { modalFeedback } from "./modalFeedback.js";

headerButtonMenu.addEventListener("click", function () {
  mainMenu.classList.add("modal-menu");
  blureBoxMain.classList.add("blur");
  body.classList.add("overflow-body");
  clickButtonMenu = true;
});

buttonMenuCansel.addEventListener("click", function () {
  mainMenu.classList.remove("modal-menu");
  clickButtonMenu = false;
  blureBoxMain.classList.remove("blur");
  body.classList.remove("overflow-body");
  modalRequestCall.classList.remove("modal");
  modalFeedback.classList.remove("modal");
});

blureBoxMain.addEventListener("click", function () {
  mainMenu.classList.remove("modal-menu");
  blureBoxMain.classList.remove("blur");
  body.classList.remove("overflow-body");
  clickButtonMenu = false;
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    mainMenu.classList.remove("modal-menu");
    blureBoxMain.classList.remove("blur");
    body.classList.remove("overflow-body");
    modalRequestCall.classList.remove("modal");
    modalFeedback.classList.remove("modal");
    clickButtonMenu = false;
  }
});
