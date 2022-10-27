const cardsBrend = document.querySelector(".cards-brends");
const cardsHeight = "cards-height";
const buttonShow = document.querySelector(".button-show");
const iconShow = document.querySelector(".button-show__icon");
const textShow = document.querySelector(".button-show__text");
import { showNext } from "./buttonNextRead";

buttonShow.addEventListener("click", function () {
  showNext(cardsBrend, cardsHeight, iconShow, textShow);
});
