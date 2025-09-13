const container = document.querySelector('.container');
const list = document.getElementById('list');
const checkbox = document.querySelectorAll('.checkbox');
const input = document.getElementById('elementInput');
const item = document.getElementsByTagName('li');
//buttons
const addElements = document.getElementById('addElement');
const deleteElements = document.getElementById('removeElements');
const submit = document.getElementById('submit');

addElements.addEventListener('click', () => {
    input.style.display = "inline"
    submit.style.display = "inline"
    input.focus();
});

submit.addEventListener('click', () => {
    if (input.value.trim() === "") return; 

    const li = document.createElement('li');
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';

    li.appendChild(newCheckbox);
    li.appendChild(document.createTextNode(input.value));

    list.appendChild(li);
    input.value = '';

    input.style.display = "none"
    submit.style.display = "none"
});