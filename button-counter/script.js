let count = 0;
//select the number and the buttons:
const number = document.getElementById('number');
const buttons = document.querySelectorAll('#increase, #decrease, #reset');

// button functions
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.id == "increase") { count++ }
        if (btn.id == "decrease") { count-- }
        if (btn.id == "reset") { count = 0 }
        number.textContent = count;
    });
    
});
