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
const modal = document.querySelector('dollars-modal');
const openBtn = document.getElementById('openModal');

form.addEventListener('submit', e  => {
    e.preventDefault();

    const amountValue = parseInt(amountInput.value);
    const direction = directionSelect.value;
    let result = 0;

    // cross multiplication
    // 1 USD = X ARS → N USD = N * X ARS
    // 1 ARS = 1/X USD → N ARS = N * (1/X) USD
    if (direction == 'usdToArs') {
        result = amountValue * usdToArs;
        resultDiv.textContent = `${amountValue} USD = ${result.toFixed(2)} ARS`;
    } else {
        result = amountValue * arsToUsd;
        resultDiv.textContent = `${amountValue} ARS = ${result.toFixed(2)} USD`
    };
});

openBtn.addEventListener('click', () => {
    modal.shadowRoot.querySelector('.modal').classList.toggle('modal-active');
});