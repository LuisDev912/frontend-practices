let count = 0;
//select the number and the buttons:
const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');

// button functions

increase.addEventListener('click', () => {
    count++;
    number.textContent = count;
});

decrease.addEventListener('click', () => {
    count--;
    number.textContent = count;
});

reset.addEventListener('click', () => {
    count = 0;
    number.textContent = count;
});