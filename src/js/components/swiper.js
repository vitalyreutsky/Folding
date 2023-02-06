import Swiper, {
  EffectFade,
  Keyboard,
  Navigation,
  Pagination,
  Thumbs,
  Scrollbar,
  EffectCoverflow,
} from "swiper";

//!hero-swiper
Swiper.use([Navigation, Pagination, EffectFade]);
const swiper = new Swiper(".hero-swiper", {
  slidesPerView: "auto",
  speed: 500,
  loop: true,
  //effect: "fade",
  autoHeight: true,
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

//!works
Swiper.use([
  Navigation,
  Pagination,
  Keyboard,
  Thumbs,
  Scrollbar,
  EffectCoverflow,
]);
const worksSwiper = new Swiper(".works-swiper", {
  slidesPerGroup: 1,
  slidesPerView: 3,
  loop: true,
  centeredSlides: true,
  speed: 1000,
  effect: "coverflow",

  coverflowEffect: {
    rotate: 50,
    stretch: -60,
    depth: 100,
    modifier: 1,
    slideShadows: false,
    scale: 0.8,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: ".works__btn-next",
    prevEl: ".works__btn-prev",
  },

  thumbs: {
    swiper: {
      el: ".works-swiper__mini",
      slidesPerView: 6,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
    },
  },
});
