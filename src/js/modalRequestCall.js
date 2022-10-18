const footerButtonCall = document.querySelector(".footer-button__call");
const headerButtonCall = document.querySelector(".header__button-call");
const modalRequestCall = document.querySelector(".modal-request-call");
const requestCallCansel = document.querySelector(".request-call__cansel");
const blureBoxCall = document.querySelector(".blur-box");

footerButtonCall.addEventListener("click", function () {
  modalRequestCall.classList.add("modal");
  blureBoxCall.classList.add("blur");
});

headerButtonCall.addEventListener("click", function () {
  modalRequestCall.classList.add("modal");
  blureBoxCall.classList.add("blur");
});

requestCallCansel.addEventListener("click", function () {
  modalRequestCall.classList.remove("modal");
  blureBoxCall.classList.remove("blur");
});

blureBoxCall.addEventListener("click", function () {
  modalRequestCall.classList.remove("modal");
  blureBoxCall.classList.remove("blur");
});
