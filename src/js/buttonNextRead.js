const massege = document.querySelectorAll(".massege__next-read");
const button = document.querySelector(".button-next-read");
const icon = document.querySelector(".button-next-read__icon");
const text = document.querySelector(".button-next-read__text");

button.addEventListener("click", function () {
  clickButton();

  icon.classList.toggle("rotate");

  if (text.textContent === "Читать далее") {
    text.textContent = "Скрыть";
  } else {
    text.textContent = "Читать далее";
  }
});

function clickButton() {
  for (let i = 0; i < massege.length; i++) {
    massege[i].classList.toggle("massege__next-read");
    massege[i].classList.toggle("card-show");
  }
}
