const tableItems = document.querySelectorAll(".table td");

if (tableItems) {
  tableItems.forEach((item) => {
    if (
      item.textContent == "Да" ||
      item.textContent == "Yes" ||
      item.textContent == "დიახ"
    ) {
      item.classList.add("table-choice--yes");
    }

    if (
      item.textContent == "Нет" ||
      item.textContent == "No" ||
      item.textContent == "არა"
    ) {
      item.classList.add("table-choice--no");
    }
  });
}
