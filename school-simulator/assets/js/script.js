// inputs and buttons
const nameInput = document.getElementById('name-insert');
const gradeInput = document.getElementById('grade-insert');
const submitBtn = document.getElementById('submit');

// table and class selectors
const studentsTableBody = document.querySelector('.tbody');
const classSelector = document.querySelector('.classes-selector');

// function to create a new row of students
function createStudentRow(student) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.attendance}</td>
        <td>${student.average}</td>
        <td class="Warnings">${student.warnings}</td>
    `;
    return row;
}

// function to add a new students from the form
function initializeStudentForm(){
    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        // form validation
        if (!nameInput.form.reportValidity()) return;

        const newStudent = {
            name: nameInput.value,
            average: Number(gradeInput.value),
            attendance: "Pending",
            warnings: 0
        };

        // create new row and add to the table
        const newRow = createStudentRow(newStudent);
        studentsTableBody.appendChild(newRow);

        nameInput.value = ""; // clears inputs
        gradeInput.value = "";
    });
}

// load students data from the JSON
let studentData = {};

fetch('./assets/json/student.json')
    .then((response) => { return response.json();
    }).then((students) => {
        studentData = students;
    
        // show students of the selected class
    classSelector.addEventListener('change', () => {
        const selectedClassName = classSelector.value;
        const selectedClassStudents = studentData[selectedClassName];

        studentsTableBody.innerHTML = '';

        selectedClassStudents.forEach(student => {
            const row = createStudentRow(student);
            studentsTableBody.appendChild(row);
        });
    });
    })
    .catch(error => console.error("Error loading student.json:", error));

// initialize form
initializeStudentForm();