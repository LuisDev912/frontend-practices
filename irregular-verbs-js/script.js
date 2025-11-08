// elements selectors
const verbsContainer = document.querySelector('.verbs-container');
const verbsSection = document.querySelector('.verbs-section');
const loadVerbsBtn = document.getElementById('load-verbs-btn');
const newVerbBtn = document.getElementById('new-verb-button');
const selectedVerb = document.getElementById('selected-verb');
const checkBtn = document.getElementById('check-button');
const answerInput = document.getElementById('user-answer');
const resultText = document.getElementById('result-message');

let verbsArray = [];
let currentVerb = null;

fetch('verbs.json')
    .then(res => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
    })
    .then((verbs) => {
        verbsArray = verbs;

        verbs.forEach(verb => {
            const p = document.createElement('p');
            verbsContainer.appendChild(p);
            p.textContent = `${verb.infinitive} → ${verb.past}`;
        });
    })
    .catch((err) => {
        console.error(err);
    });

loadVerbsBtn.addEventListener('click', () => {
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