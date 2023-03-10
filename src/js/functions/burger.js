import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

(function () {
  const burger = document?.querySelector("[data-burger]");
  const navMenu = document.querySelector(".menu");
  const menu = document?.querySelector("[data-menu]");
  const menuItems = document?.querySelectorAll("[data-menu-item]");
  const overlay = document?.querySelector("[data-menu-overlay]");
  const headerFilter = document.querySelector(".header");

  burger?.addEventListener("click", (e) => {
    headerFilter.classList.toggle("dis-offset");
    burger?.classList.toggle("burger--active");
    menu?.classList.toggle("menu--active");
    headerFilter?.classList.toggle("hide-backdrop-filter");

    if (menu?.classList.contains("menu--active")) {
      navMenu.classList.add("mob-menu--show");
      burger?.setAttribute("aria-expanded", "true");
      burger?.setAttribute("aria-label", "Закрыть меню");

      disableScroll();
    } else {
      navMenu.classList.remove("mob-menu--show");
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      //headerFilter.style.paddingRight = "0x";
      enableScroll();
    }
  });

  overlay?.addEventListener("click", () => {
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Открыть меню");
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--active");
    enableScroll();
  });

  menuItems?.forEach((el) => {
    el.addEventListener("click", () => {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      burger.classList.remove("burger--active");
      menu.classList.remove("menu--active");
      navMenu.classList.remove("mob-menu--show");
      headerFilter?.classList.remove("hide-backdrop-filter");
      enableScroll();
    });
  });
})();
