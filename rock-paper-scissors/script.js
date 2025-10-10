rules = {
    rock: "scissors", // this means the object that the key can defeat
    paper: "rock",
    scissors: "paper"
};

// declaring variables

const buttons = document.querySelectorAll('.choice');
const userChoiceElement = document.getElementById('user-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const result = document.getElementById('result');
const comparing = document.getElementById('comparing-choice');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.dataset.choice;
        const computerChoice = Object.keys(rules)[Math.floor(Math.random() * 3)];
    });
});