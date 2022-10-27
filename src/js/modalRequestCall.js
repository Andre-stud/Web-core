const footerButtonCall = document.querySelector(".footer-button__call");
const headerButtonCall = document.querySelector(".header__button-call");
export const modalRequestCall = document.querySelector(".modal-request-call");
const requestCallCansel = document.querySelector(".request-call__cansel");
const blureBoxCall = document.querySelector(".blur-box");
const autoFocus = document.querySelector(".entry-field");

import { modalFeedback } from "./modalFeedback.js";
import { clickButtonMenu } from "./mainMenu.js";
import { clickButton } from "./modalFeedback.js";
import { canselButton } from "./modalFeedback.js";
import { blureButton } from "./modalFeedback.js";

footerButtonCall.addEventListener("click", function () {
  clickButton(modalFeedback, modalRequestCall, blureBoxCall);
  autoFocus.select();
});

headerButtonCall.addEventListener("click", function () {
  clickButton(modalFeedback, modalRequestCall, blureBoxCall);
  autoFocus.select();
});

requestCallCansel.addEventListener("click", function () {
  canselButton(modalRequestCall, blureBoxCall);
});

blureBoxCall.addEventListener("click", function () {
  blureButton(modalRequestCall, blureBoxCall);
});
