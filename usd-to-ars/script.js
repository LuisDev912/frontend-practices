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
        console.log(`1 USD = ${arsToUsd} ARS`)
    })
    .catch((err) => {
        alert(err);
        usdToArs = 1000; // approximate
        arsToUsd = 1 / usdToArs;
    });