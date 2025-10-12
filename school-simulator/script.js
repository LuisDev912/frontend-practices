const nameInp = document.getElementById('name-insert');
const gradeInp = document.getElementById('grade-insert');
const addBtn = document.getElementById('submit');

addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const fullName = nameInp.value;
    const grades = gradeInp.value;
    console.log(fullName, grades); // only for test purpose
});