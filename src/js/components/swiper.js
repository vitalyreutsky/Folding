import Swiper, {
  EffectFade,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from "swiper";

//!hero-swiper
Swiper.use([Navigation, Pagination, EffectFade]);
const swiper = new Swiper(".hero-swiper", {
  slidesPerView: "auto",
  speed: 500,
  loop: true,
  //effect: "fade",
  navigation: {
    nextEl: ".hero-swiper__btn-next",
    prevEl: ".hero-swiper__btn-prev",
  },

  pagination: {
    el: ".hero-swiper__fraction",
    type: "fraction",

    renderFraction: function (currentClass, totalClass) {
      return `
         <span class="hero-swiper__current">0<span class="${currentClass}"></span></span><span class="hero-swiper__total">0<span class="${totalClass}"></span></span>
      `;
    },
  },
});
