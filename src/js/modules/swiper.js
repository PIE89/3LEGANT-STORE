import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function swiper() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 12,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      768: {
        spaceBetween: 24,
      },
    },
  });
}

export default swiper;
