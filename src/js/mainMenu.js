const headerButtonMenu = document.querySelector(".header__button-menu");
const mainMenu = document.querySelector(".main-menu");
const buttonMenuCansel = document.querySelector(".header-menu__cansel");
const blureBoxMain = document.querySelector(".blur-box");

headerButtonMenu.addEventListener("click", function () {
  mainMenu.classList.add("modal-menu");
  blureBoxMain.classList.add("blur");
});

buttonMenuCansel.addEventListener("click", function () {
  mainMenu.classList.remove("modal-menu");
  blureBoxMain.classList.remove("blur");
});

blureBoxMain.addEventListener("click", function () {
  mainMenu.classList.remove("modal-menu");
  blureBoxMain.classList.remove("blur");
});
