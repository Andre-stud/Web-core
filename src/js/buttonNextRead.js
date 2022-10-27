const message = document.querySelector(".message");
const messageNextRead = "message__next-read";
const button = document.querySelector(".button-next-read");
const icon = document.querySelector(".button-next-read__icon");
const text = document.querySelector(".button-next-read__text");
export let showNext;

button.addEventListener("click", function () {
  showNext(message, messageNextRead, icon, text);
});

showNext = function (content, classAdd, showIcon, showText) {
  content.classList.toggle(classAdd);

  showIcon.classList.toggle("rotate");

  if (showText.textContent === "Читать далее") {
    showText.textContent = "Скрыть";
  } else {
    showText.textContent = "Читать далее";
  }
};
