const array = ["Item 1", "Item 2", "Item 3"];
const list = document.getElementById("list");

array.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  list.appendChild(listItem);
});

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    const input = document.createElement("input");
    input.value = e.target.textContent;
    e.target.textContent = "";
    e.target.appendChild(input);

    input.addEventListener("blur", function () {
      e.target.textContent = input.value;
    });
  }
});