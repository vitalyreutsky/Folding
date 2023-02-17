//! устанавливаем настройки для секции benefits
const sectionBenefits = document.querySelector(".benefits");
if (sectionBenefits) {
  const optionsBenefits = {
    // родитель целевого элемента - область просмотра
    root: null,
    // отступ снизу
    rootMargin: "0px",
    // процент пересечения - половина изображения
    threshold: 0.1,
  };
  // создаем наблюдатель
  const observerBenefits = new IntersectionObserver((entries, observer) => {
    // для каждой записи-целевого элемента
    entries.forEach((entry) => {
      // если элемент является наблюдаемым
      const benefitsItems = document.querySelectorAll(".benefits-item");

      benefitsItems.forEach((item) => {
        if (entry.isIntersecting) {
          // добавить ему CSS-класс
          if (item) {
            item.classList.add("benefits-item--active");
          }
        } else {
          if (item) {
            item.classList.remove("benefits-item--active");
          }
        }
      });
    });
  }, optionsBenefits);
  // выбираем обьект слежения по классу
  observerBenefits.observe(sectionBenefits);
}
