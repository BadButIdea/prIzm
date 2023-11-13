let employees = [
  { name: "employee1", age: 30, salary: 400 },
  { name: "employee2", age: 31, salary: 500 },
  { name: "employee3", age: 32, salary: 600 },
];

const table = document.getElementById("employeeTable");
const tbody = table.querySelector("tbody");

employees.forEach((employee) => {
  const row = document.createElement("tr");
  row.innerHTML = `
                <td>${employee.name}</td>
                <td>${employee.age}</td>
                <td>${employee.salary}</td>
            `;
  tbody.appendChild(row);
});

tbody.addEventListener("click", function (e) {
  if (e.target.tagName === "TD") {
    const input = document.createElement("input");
    input.value = e.target.textContent;
    e.target.textContent = "";
    e.target.appendChild(input);

    input.addEventListener("blur", function () {
      e.target.textContent = input.value;
    });
  }
});