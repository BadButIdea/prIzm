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
