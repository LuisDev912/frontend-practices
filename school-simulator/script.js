const nameInp = document.getElementById('name-insert');
const gradeInp = document.getElementById('grade-insert');
const addBtn = document.getElementById('submit');
const table = document.querySelector('.tbody');

function newTable(student) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.attendance}</td>
        <td>${student.grade}</td>
        <td class="Warnings">${student.warnings}</td>
    `;
    return row;
}

function studentApp(){
    addBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (!nameInp.form.reportValidity()) return;

        const newStudent = {
            name: nameInp.value,
            grade: Number(gradeInp.value),
            attendance: "Pending",
            warnings: 0
        };

        const newRow = newTable(newStudent);
        table.appendChild(newRow);

        nameInp.value = ""; // clears inputs
        gradeInp.value = "";
    });
}

// I'll try to convert this fetch into a function later
fetch('student.json')
    .then((response) => {
        return response.json();
    }).then((students) => {
        console.log(students);
    });