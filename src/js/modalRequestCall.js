const footerButtonCall = document.querySelector(".footer-button__call");
const headerButtonCall = document.querySelector(".header__button-call");
export const modalRequestCall = document.querySelector(".modal-request-call");
const requestCallCansel = document.querySelector(".request-call__cansel");
const blureBoxCall = document.querySelector(".blur-box");

import { modalFeedback } from "./modalFeedback.js";
import { clickButtonMenu } from "./mainMenu.js";

footerButtonCall.addEventListener("click", function () {
  modalFeedback.classList.remove("modal");
  modalRequestCall.classList.add("modal");
  blureBoxCall.classList.add("blur");
});

headerButtonCall.addEventListener("click", function () {
  modalRequestCall.classList.add("modal");
  blureBoxCall.classList.add("blur");
});

requestCallCansel.addEventListener("click", function () {
  if (clickButtonMenu == true) {
    modalRequestCall.classList.remove("modal");
  } else {
    blureBoxCall.classList.remove("blur");
    modalRequestCall.classList.remove("modal");
  }
});

blureBoxCall.addEventListener("click", function () {
  modalRequestCall.classList.remove("modal");
  blureBoxCall.classList.remove("blur");
});
