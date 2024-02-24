const employees = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      department: "Engineering",
      role: { title: "Frontend Developer", level: "Mid" },
      contact: { email: "john.doe@example.com", phone: "123-456-7890" },
      skills: ["JavaScript", "React", "CSS"]
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      department: "Design",
      role: { title: "UI/UX Designer", level: "Senior" },
      contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
      skills: ["Figma", "Sketch", "Adobe XD"]
    },
];

let table = document.querySelector("#employees_data");

window.addEventListener("load", function() {
    table.innerHTML = `
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Age</th>
    <th>Department</th>
    <th>Role Title</th>
    <th>Role Level</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Skills</th>
  </tr>`;
  let content;
    for (let i = 0; i < employees.length; ++i) {
        content = `
      <tr>
        <td>${employees[i].id}</td>
        <td>${employees[i].name}</td>
        <td>${employees[i].age}</td>
        <td>${employees[i].department}</td>
        <td>${employees[i].role.title}</td>
        <td>${employees[i].role.level}</td>
        <td>${employees[i].contact.email}</td>
        <td>${employees[i].contact.phone}</td>
        <td>${employees[i].skills.join(",")}</td>
      </tr>`
      table.innerHTML += content;
    }
})