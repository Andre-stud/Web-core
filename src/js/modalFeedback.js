const footerButtonChat = document.querySelector(".footer-button__chat");
const headerButtonChat = document.querySelector(".header__button-chat");
export const modalFeedback = document.querySelector(".modal-feedback");
const canselFeedback = document.querySelector(".cansel-feedback");
const blureBox = document.querySelector(".blur-box");
const autoFocus = modalFeedback.querySelectorAll(".entry-field");

import { modalRequestCall } from "./modalRequestCall.js";
import { clickButtonMenu } from "./mainMenu.js";
import { body } from "./mainMenu.js";

export let clickButton = function (removeModal, addModal, addBlure) {
  removeModal.classList.remove("modal");
  addModal.classList.add("modal");
  addBlure.classList.add("blur");
  autoFocus[0].select();
};

export let canselButton = function (removeModal, removeBlure) {
  if (clickButtonMenu == true) {
    removeModal.classList.remove("modal");
  } else {
    removeModal.classList.remove("modal");
    removeBlure.classList.remove("blur");
  }
};

export let blureButton = function (removeModal, removeBlure) {
  removeModal.classList.remove("modal");
  removeBlure.classList.remove("blur");
};

footerButtonChat.addEventListener("click", function () {
  clickButton(modalRequestCall, modalFeedback, blureBox);
});

headerButtonChat.addEventListener("click", function () {
  clickButton(modalRequestCall, modalFeedback, blureBox);
  body.classList.add("overflow-body");
});

canselFeedback.addEventListener("click", function () {
  canselButton(modalFeedback, blureBox);
  body.classList.remove("overflow-body");
});

blureBox.addEventListener("click", function () {
  body.classList.remove("overflow-body");
  blureButton(modalFeedback, blureBox);
});
