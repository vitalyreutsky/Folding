const headerLang = document.querySelector(".header__lang");
const langSubMenu = document.querySelector(".lang__sub-menu");

headerLang.addEventListener("click", () => {
  langSubMenu.classList.toggle("hide-lang__sub-menu");
  headerLang.classList.toggle("header-lang--active");
});
