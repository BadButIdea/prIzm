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

    const deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.textContent = "удалить";
    deleteLink.addEventListener("click", function () {
      e.target.remove();
    });

    const strikeLink = document.createElement("a");
    strikeLink.href = "#";
    strikeLink.textContent = "перечеркнуть";
    strikeLink.addEventListener("click", function () {
      e.target.style.textDecoration = "line-through";
    });

    e.target.appendChild(deleteLink);
    e.target.appendChild(strikeLink);
  }
});

const newItemInput = document.getElementById("newItemInput");
const addItemButton = document.getElementById("addItemButton");

addItemButton.addEventListener("click", function () {
  const newItemText = newItemInput.value;
  if (newItemText) {
    const newItem = document.createElement("li");
    newItem.textContent = newItemText;
    list.appendChild(newItem);

    newItem.addEventListener("click", function (e) {
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

    newItemInput.value = "";
  }
});
