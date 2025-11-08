// elements selectors
const verbsContainer = document.querySelector('.verbs-container');

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
