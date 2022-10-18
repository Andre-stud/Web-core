const removePad = document.querySelectorAll(".remove-pad-brends");
const removeDesctop = document.querySelectorAll(".remove-desctop-brends");
const buttonShow = document.querySelector(".button-show");
const iconShow = document.querySelector(".button-show__icon");
const textShow = document.querySelector(".button-show__text");

buttonShow.addEventListener("click", function () {
  clickButtonShow();

  iconShow.classList.toggle("rotate");

  if (textShow.textContent === "Показать все") {
    textShow.textContent = "Скрыть";
  } else {
    textShow.textContent = "Показать все";
  }
});

function clickButtonShow() {
  if (window.innerWidth < 992) {
    for (let i = 0; i < removePad.length; i++) {
      removePad[i].classList.toggle("remove-pad-brends");
      removePad[i].classList.toggle("card-show");
    }
    for (let i = 0; i < removeDesctop.length; i++) {
      removeDesctop[i].classList.toggle("remove-desctop-brends");
    }
  }

  if (window.innerWidth >= 992) {
    for (let i = 0; i < removePad.length; i++) {
      removePad[i].classList.toggle("remove-pad-brends");
    }

    for (let i = 0; i < removeDesctop.length; i++) {
      removeDesctop[i].classList.toggle("remove-desctop-brends");
      removeDesctop[i].classList.toggle("card-show");
    }
  }
}
