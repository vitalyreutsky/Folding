import Swiper, {
  EffectFade,
  Keyboard,
  Navigation,
  Pagination,
  Thumbs,
  Scrollbar,
  EffectCoverflow,
} from "swiper";
import lightGallery from "lightgallery";

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

//!catalog swiper
const catalogSliders = document.querySelectorAll(".catalog-swiper");
catalogSliders.forEach((slider) => {
  Swiper.use([Navigation, Pagination, Keyboard]);
  const catalogSliders = new Swiper(slider, {
    speed: 700,
    loop: false,
    slidesPerGroup: 1,
    slidesPerView: "auto",

    navigation: {
      nextEl: slider.previousElementSibling.querySelector(".catalog-next"),
      prevEl: slider.previousElementSibling.querySelector(".catalog-prev"),
    },
  });

  const slides = slider.querySelectorAll(".catalog-slide");

  if (slides.length <= 3) {
    slider.previousElementSibling
      .querySelector(".slider-btns")
      .classList.add("hide-swiper-btns");
  }

  if (slides.length <= 2) {
    slides.forEach((item) => {
      item.style.width = "46.2%";
    });
  }

  //if (window.innerWidth < 600) {
  //  slides.forEach((item) => {
  //    item.style.width = "89%";
  //  });

  //  if (slides.length > 1) {
  //    slider.previousElementSibling
  //      .querySelector(".slider-btns")
  //      .classList.remove("hide-swiper-btns");
  //  }
  //}
});

//!single
Swiper.use([Navigation, Pagination, Keyboard, Thumbs]);
const singleSwiper = new Swiper(".single-swiper", {
  slidesPerGroup: 1,
  spaceBetween: 20,
  slidesPerView: 1,
  loop: false,
  speed: 1000,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: ".single__btn-next",
    prevEl: ".single__btn-prev",
  },

  thumbs: {
    swiper: {
      el: ".single-swiper__mini",
      slidesPerView: 5,
      spaceBetween: 15,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
    },
  },
});

const gsBgImgSelector = ".swiper-slide img";

const dynamicEl = [...document.querySelectorAll(gsBgImgSelector)].map(
  (sliderImg) => {
    return {
      src: sliderImg.src,
      thumb: sliderImg.src,
    };
  }
);

const dynamicGallery = document.querySelector(".single-swiper__zoom");

if (dynamicGallery) {
  const popup = lightGallery(dynamicGallery, {
    dynamic: true,
    dynamicEl,
  });

  dynamicGallery.addEventListener("click", () => {
    popup.openGallery(0);
  });
}

//[...document.querySelectorAll(".single-slide")].map((slide, idx) => {
//  slide.addEventListener("click", () => {
//    popup.openGallery(idx);
//  });
//});

//!portfolio-swiper
Swiper.use([Navigation, Pagination]);
const heroSwiper = new Swiper(".portfolio-swiper__img", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  speed: 700,
  loop: false,

  pagination: {
    el: ".portfolio-swiper__pagination",
    clickable: true,
    dynamicBullets: false,
  },
});

//!recently-swiper
Swiper.use([Navigation, Pagination]);
const recentlySwiper = new Swiper(".recently-swiper", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 20,
  speed: 700,
  loop: true,

  navigation: {
    nextEl: document.querySelector(".recently-next"),
    prevEl: document.querySelector(".recently-prev"),
  },
});
