// elements selectors
const verbsContainer = document.querySelector('.verbs-container');
const verbsSection = document.querySelector('.verbs-section');
const loadVerbsBtn = document.getElementById('load-verbs-btn');
const newVerbBtn = document.getElementById('new-verb-button');
const selectedVerb = document.getElementById('selected-verb');
const checkBtn = document.getElementById('check-button');
const answerInput = document.getElementById('user-answer');
const resultText = document.getElementById('result-message');
const correctAnswerText = document.getElementById('correct_Answers');
const incorrectAnswersText = document.getElementById('incorrect_Answers');

let verbsArray = [];
let currentVerb = null;

let incorrectAnswers;
let correctAnswers;

// fetchs

fetch('./assets/json/verbs.json')
    .then(res => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
    })
    .then((verbs) => {
        verbsArray = verbs;

        verbs.forEach(verb => {
            const p = document.createElement('p');
            verbsContainer.appendChild(p);
            p.setAttribute('role', 'listitem');
            p.textContent = `${verb.infinitive} → ${verb.past}`;
        });
    })
    .catch((err) => {
        console.error(err);
    });

fetch('./assets/json/user_info.json')
    .then(res => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
    })
    .then((info) => {
        info.forEach(data => {
            correctAnswers = data.correct;
            incorrectAnswers = data.incorrect;
        });
        correctAnswerText.textContent = correctAnswers;
        incorrectAnswersText.textContent = incorrectAnswers
    })
    .catch(err => { console.error(err)});

// addEventListeners

loadVerbsBtn.addEventListener('click', () => {
    const expanded = loadVerbsBtn.getAttribute('aria-expanded') === 'true';
    loadVerbsBtn.setAttribute('aria-expanded', !expanded);
    verbsContainer.classList.toggle('active');
});

newVerbBtn.addEventListener('click', () => {
    resultText.textContent = ''; 
    answerInput.value = ''; // clears the result and the answer input

    const randomIndex = Math.floor(Math.random() * verbsArray.length);
    currentVerb = verbsArray[randomIndex];
    
    selectedVerb.textContent = `the verb is...`;

    setTimeout(() => {
        selectedVerb.textContent = currentVerb.infinitive;
        answerInput.focus();
    }, 1000);
});

checkBtn.addEventListener('click', () => {
    if (!currentVerb) {
        resultText.innerHTML = `First click <i>"New verb"</i> !`;
        resultText.style.color = 'orange';
        resultText.focus();
        return;
    }

    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = currentVerb.past.toLowerCase();

    if (userAnswer === correctAnswer) {
        resultText.textContent = 'Correct!';
        resultText.style.color = 'limegreen';
    } else {
        resultText.textContent = `Wrong! The correct answer was "${currentVerb.past}".`;
        resultText.style.color = 'crimson';
    }

    resultText.setAttribute('role', 'alert');
    resultText.focus();
});