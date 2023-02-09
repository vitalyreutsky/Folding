//Устанавливаем label для продукта
const labels = document.querySelectorAll(".catalog-slide__label");

labels.forEach((label) => {
  if (label.textContent == "Новинка" || label.textContent == "New") {
    label.classList.add("catalog-slide__label--green");
  } else if (label.textContent == "Акция" || label.textContent == "Аction") {
    label.classList.add("catalog-slide__label--blue");
  } else if (
    label.textContent == "Хит продаж" ||
    label.textContent == "Bestseller"
  ) {
    label.classList.add("catalog-slide__label--red");
  } else {
    label.remove();
  }
});
