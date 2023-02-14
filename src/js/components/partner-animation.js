const partnerImages = document.querySelectorAll(".partners-img");

if (
  partnerImages[0] ||
  partnerImages[1] ||
  partnerImages[2] ||
  partnerImages[3] ||
  partnerImages[4] ||
  partnerImages[5]
) {
  setInterval(() => {
    partnerImages[0].classList.toggle("animation-partner--x");
    partnerImages[1].classList.toggle("animation-partner--y");
    partnerImages[2].classList.toggle("animation-partner--y-left");
    partnerImages[3].classList.toggle("animation-partner--y");
    partnerImages[4].classList.toggle("animation-partner--x");
    partnerImages[5].classList.toggle("animation-partner--x");
  }, 2000);
}
