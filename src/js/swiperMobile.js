// Swiper
import { Swiper } from "../../node_modules/swiper";

const slider = document.querySelector(".swiper");

let mySwiper;

function mobileSlider() {
  if (window.innerWidth < 768 && slider.dataset.mobile == "false") {
    mySwiper = new Swiper(".swiper", {
      loop: true,
      grabCursor: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },
      freeMode: true,
      updateOnWindowResize: true,
      slidesPerView: "auto",
    });

    slider.dataset.mobile = "true";
  }

  if (window.innerWidth >= 768) {
    slider.dataset.mobile = "false";
    if (slider.classList.contains("swiper-initialized")) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});
