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
  spaceBetween: 50,
  speed: 1000,
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

//!mobile-swiper-products
var init = false;
function swiperCard() {
  if (window.innerWidth <= 1200) {
    if (!init) {
      init = true;
      Swiper.use([Navigation, Pagination, EffectFade]);
      let swiper = new Swiper(".mobile-products__swiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        speed: 1000,
        loop: true,
        autoHeight: true,
        navigation: {
          nextEl: ".mobile-products__swiper-next",
          prevEl: ".mobile-products__swiper-prev",
        },

        pagination: {
          el: ".mobile-products__swiper-fraction",
          type: "fraction",

          renderFraction: function (currentClass, totalClass) {
            return `
           <span class="hero-swiper__current">0<span class="${currentClass}"></span></span><span class="hero-swiper__total">0<span class="${totalClass}"></span></span>
        `;
          },
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);

//!mobile-swiper-facts
var initFacts = false;
function swiperCardFacts() {
  if (window.innerWidth <= 1200) {
    if (!initFacts) {
      initFacts = true;
      Swiper.use([Navigation, Pagination, EffectFade]);
      let swiper = new Swiper(".facts-swiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        speed: 1000,
        loop: true,
        autoHeight: true,
        navigation: {
          nextEl: ".facts-swiper__next",
          prevEl: ".facts-swiper__prev",
        },

        pagination: {
          el: ".facts-swiper__fraction",
          type: "fraction",

          renderFraction: function (currentClass, totalClass) {
            return `
           <span class="hero-swiper__current">0<span class="${currentClass}"></span></span><span class="hero-swiper__total">0<span class="${totalClass}"></span></span>
        `;
          },
        },
      });
    }
  } else if (initFacts) {
    swiper.destroy();
    initFacts = false;
  }
}
swiperCardFacts();
window.addEventListener("resize", swiperCardFacts);

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

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: ".works__btn-next",
    prevEl: ".works__btn-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 50,
        stretch: -60,
        depth: 100,
        modifier: 1,
        slideShadows: false,
        scale: 2,
      },
    },
    600: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 50,
        stretch: -60,
        depth: 100,
        modifier: 1,
        slideShadows: false,
        scale: 1.5,
      },
    },
    1200: {
      coverflowEffect: {
        rotate: 50,
        stretch: -60,
        depth: 100,
        modifier: 1,
        slideShadows: false,
        scale: 0.8,
      },
    },
  },

  thumbs: {
    swiper: {
      el: ".works-swiper__mini",
      spaceBetween: 30,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3.1,
        },
        1200: {
          slidesPerView: 6,
        },
      },
    },
  },
});

//!catalog swiper
const catalogSliders = document.querySelectorAll(".catalog-swiper");
catalogSliders.forEach((slider) => {
  Swiper.use([Navigation, Pagination, Keyboard]);
  const catalogSliders = new Swiper(slider, {
    speed: 1000,
    loop: false,
    slidesPerGroup: 1,
    slidesPerView: "auto",

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      600: {
        slidesPerView: "auto",
      },
    },

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

  if (window.innerWidth < 1200) {
    if (slides.length > 2) {
      slider.previousElementSibling
        .querySelector(".slider-btns")
        .classList.remove("hide-swiper-btns");
    }

    if (slides.length <= 2) {
      slides.forEach((item) => {
        item.style.width = "50%";
      });
    }

    if (slides.length <= 1) {
      slides.forEach((item) => {
        item.style.width = "96.6%";
      });
    }
  }

  //if (window.innerWidth < 600) {
  //  slides.forEach((item) => {
  //    item.style.width = "97%";
  //  });
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
      spaceBetween: 15,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 3,
        },
        600: {
          slidesPerView: 5,
        },
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

//!mobile-swiper-certificates
var initCertificates = false;
function swiperCertificates() {
  if (window.innerWidth <= 1200) {
    if (!initCertificates) {
      initCertificates = true;
      Swiper.use([Navigation, Pagination, EffectFade]);
      let swiper = new Swiper(".certificates-items", {
        speed: 1000,
        loop: true,

        breakpoints: {
          0: {
            slidesPerView: 1.05,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2.1,
            spaceBetween: 50,
          },
        },
      });
    }
  } else if (initCertificates) {
    swiper.destroy();
    initCertificates = false;
  }
}
swiperCertificates();
window.addEventListener("resize", swiperCertificates);

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
  slidesPerGroup: 1,
  spaceBetween: 20,
  speed: 1000,
  loop: true,

  navigation: {
    nextEl: document.querySelector(".recently-next"),
    prevEl: document.querySelector(".recently-prev"),
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

//!price swiper
Swiper.use([Navigation, Pagination]);
const priceSwiper = new Swiper(".price-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 1000,
  loop: true,

  pagination: {
    el: ".price-swiper__pagination",
    clickable: true,
    dynamicBullets: false,
  },
});
