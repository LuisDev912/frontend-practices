fetch('verbs.json')
    .then(res => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
    })
    .then((verbs) => {
        console.log(verbs);
    })
    .catch((err) => {
        console.error(err);
    })
