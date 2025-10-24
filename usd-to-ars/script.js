// global variables

let usdToArs;
let arsToUsd;

fetch('https://dolarapi.com/v1/dolares/oficial')
    .then(res => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        alert(`Error detected: ${err}`);
    });