// Исходный массив с работниками
let employees = [
  { name: "employee1", age: 30, salary: 400 },
  { name: "employee2", age: 31, salary: 500 },
  { name: "employee3", age: 32, salary: 600 },
];

// Функция для отображения списка работников
function displayEmployees() {
  const ul = document.getElementById("employee-list");
  ul.innerHTML = ""; // Очищаем список перед обновлением

  employees.forEach((employee, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
                    <span class="editable" data-field="name">${employee.name}</span>
                    <span class="editable" data-field="age">${employee.age}</span>
                    <span class="editable" data-field="salary">${employee.salary}</span>
                    <a href="#" onclick="deleteEmployee(${index})">Удалить</a>
                `;
    ul.appendChild(li);
  });

  // Добавляем обработчики для редактирования
  const editableElements = document.querySelectorAll(".editable");
  editableElements.forEach((element) => {
    element.addEventListener("click", () => {
      const field = element.dataset.field;
      const newValue = prompt(`Введите новое значение для ${field}`);
      if (newValue !== null) {
        const index = Array.from(ul.children).indexOf(element.parentElement);
        employees[index][field] = newValue;
        displayEmployees();
      }
    });
  });
}

// Функция для удаления работника
function deleteEmployee(index) {
  employees.splice(index, 1);
  displayEmployees();
}

// Функция для добавления нового работника
document.getElementById("add-employee-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const salary = parseInt(document.getElementById("salary").value);

  if (name && !isNaN(age) && !isNaN(salary)) {
    employees.push({ name, age, salary });
    displayEmployees();
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("salary").value = "";
  } else {
    alert("Пожалуйста, заполните все поля корректно.");
  }
});

// Инициализация отображения работников
displayEmployees();
