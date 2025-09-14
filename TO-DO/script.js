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
    const label = document.createElement('label');
    newCheckbox.type = 'checkbox';
    newCheckbox.setAttribute('class', 'checkbox')

    li.appendChild(newCheckbox);
    label.appendChild(document.createTextNode(input.value));
    li.appendChild(label);

    list.appendChild(li);
    input.value = '';

    input.style.display = "none"
    submit.style.display = "none"
});

deleteElements.addEventListener('click', () => {
    const tasks = document.querySelectorAll("#list li input[type='checkbox']");
    tasks.forEach(task => {
        if (task.checked) {
            task.parentElement.remove();
        }
    });
});
