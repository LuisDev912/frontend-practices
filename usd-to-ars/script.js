// global variables

let usdToArs;
let arsToUsd;

// get values with fetch
fetch('https://dolarapi.com/v1/dolares/oficial')
    .then(res => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
    })
    .then((data) => {
        usdToArs = data.compra;
        arsToUsd = 1 / usdToArs;
    })
    .catch((err) => {
        alert(err);
        usdToArs = 1000; // approximate
        arsToUsd = 1 / usdToArs;
});

// element selectors
const form = document.getElementById('converter-form');
const amountInput = document.getElementById('amount');
const directionSelect = document.getElementById('direction');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', e => {
    e.preventDefault();
});