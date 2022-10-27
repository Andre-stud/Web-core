import Swiper from "swiper";
import { Pagination } from "swiper";

const slider = document.querySelector(".swiper");

let mySwiper;

function mobileSlider() {
  if (window.innerWidth < 768 && slider.dataset.mobile == "false") {
    Swiper.use([Pagination]);
    mySwiper = new Swiper(".swiper", {
      loop: true,
      grabCursor: true,

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
    if (slider.dataset.mobile == "true") {
      mySwiper.destroy();
    }
    slider.dataset.mobile = "false";
  }
}

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});
