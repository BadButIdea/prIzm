let employees = [
  { name: "employee1", age: 30, salary: 400 },
  { name: "employee2", age: 31, salary: 500 },
  { name: "employee3", age: 32, salary: 600 },
];

const employeeList = document.getElementById("employeeList");

employees.forEach((employee) => {
  const listItem = document.createElement("li");
  listItem.textContent = `Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`;
  employeeList.appendChild(listItem);

  listItem.addEventListener("click", function () {
    const input = document.createElement("input");
    input.value = listItem.textContent;
    listItem.textContent = "";
    listItem.appendChild(input);

    input.addEventListener("blur", function () {
      listItem.textContent = input.value;
    });
  });
});
