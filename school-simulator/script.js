const nameInp = document.getElementById('name-insert');
const gradeInp = document.getElementById('grade-insert');
const addBtn = document.getElementById('submit');
const table = document.querySelector('.tbody');

addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const newStudent = {
        name: nameInp.value,
        grade: Number(gradeInp.value),
        attendance: "Pending",
        warnings: 0
    };

    const newTable = document.createElement('tr');
    newTable.innerHTML = `
        <td>${newStudent.name}</td>
        <td>${newStudent.attendance}</td>
        <td>${newStudent.grade}</td>
        <td class="Warnings">${newStudent.warnings}</td>
    `;

    table.appendChild(newTable);
});