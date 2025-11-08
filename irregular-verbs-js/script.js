// elements selectors
const verbsContainer = document.querySelector('.verbs-container');
const verbsSection = document.querySelector('.verbs-section');
const loadVerbsBtn = document.getElementById('load-verbs-btn');
const newVerbBtn = document.getElementById('new-verb-button');
const selectedVerb = document.getElementById('selected-verb');

fetch('verbs.json')
    .then(res => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
    })
    .then((verbs) => {
        verbs.forEach(verb => {
            const p = document.createElement('p');
            verbsContainer.appendChild(p);
            p.textContent = `${verb.past} → ${verb.past}`;
        });
    })
    .catch((err) => {
        console.error(err);
    })

loadVerbsBtn.addEventListener('click', () => {
    verbsContainer.classList.toggle('active');
});

newVerbBtn.addEventListener('click', () => { 
    selectedVerb.textContent = `the verb is...`;

    setTimeout(() => {
        selectedVerb.textContent = 'run';
    }, 1000);
})