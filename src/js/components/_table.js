const tableItems = document.querySelectorAll(".table td");

if (tableItems) {
  tableItems.forEach((item) => {
    if (item.textContent == "Да" || item.textContent == "Yes") {
      item.classList.add("table-choice--yes");
    }

    if (item.textContent == "Нет") {
      item.classList.add("table-choice--no");
    }
  });
}
