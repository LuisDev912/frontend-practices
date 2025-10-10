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

// function when a button is pressed

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.dataset.choice;
        const computerChoice = Object.keys(rules)[Math.floor(Math.random() * 3)];
        button.classList.toggle('disabled'); // actives .disabled class

        userChoiceElement.textContent = userChoice;
        computerChoiceElement.textContent = '---';
        result.textContent = " ";
        comparing.style.display = 'inline';

        // setTimeout is used to do something after a specific delay
        setTimeout(() => {
            comparing.style.display = 'none';
            computerChoiceElement.textContent = computerChoice;

            if (userChoice === computerChoice) {
                result.textContent = "It's a draw";
            } else if (rules[userChoice] === computerChoice) {
                result.textContent = "You won!";
            } else {
                result.textContent = "You lost...";
            }

            button.classList.toggle('disabled'); // disables .disabled class
        }, 1000);
    });
});