const footerButtonChat = document.querySelector(".footer-button__chat");
const headerButtonChat = document.querySelector(".header__button-chat");
export const modalFeedback = document.querySelector(".modal-feedback");
const canselFeedback = document.querySelector(".cansel-feedback");
const blureBox = document.querySelector(".blur-box");

import { modalRequestCall } from "./modalRequestCall.js";
import { clickButtonMenu } from "./mainMenu.js";

footerButtonChat.addEventListener("click", function () {
  modalRequestCall.classList.remove("modal");
  modalFeedback.classList.add("modal");
  blureBox.classList.add("blur");
});

headerButtonChat.addEventListener("click", function () {
  modalFeedback.classList.add("modal");
  blureBox.classList.add("blur");
});

canselFeedback.addEventListener("click", function () {
  if (clickButtonMenu == true) {
    modalFeedback.classList.remove("modal");
  } else {
    modalFeedback.classList.remove("modal");
    blureBox.classList.remove("blur");
  }
});

blureBox.addEventListener("click", function () {
  modalFeedback.classList.remove("modal");
  blureBox.classList.remove("blur");
});
