fetch('verbs.json')
    .then(res => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
    })
    .then((verbs) => {
        verbs.forEach(verb => {
            console.log(verb.past, '→', verb.past);
        });
    })
    .catch((err) => {
        console.error(err);
    })
