const array = ["Item 1", "Item 2", "Item 3"];
const list = document.getElementById("list");

array.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  list.appendChild(listItem);
});
