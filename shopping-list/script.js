//variables
const tableBody = document.getElementById("table-body");
const addBtn = document.getElementById("addProduct");
const calcBtn = document.getElementById("Calculate");
const totalSpan = document.getElementById("total");

//save and load data
function saveList() {
    const rows = [...document.querySelectorAll('#table-body tr')]; //this is for use array methods
    const items = rows.map(row => { 
        return {
            name: row.querySelector('td:nth-child(1) input').value,
            price: row.querySelector('td:nth-child(2) input').value,
            amount: row.querySelector('td:nth-child(3) input').value
        };
    });
    localStorage.setItem("shoppingList", JSON.stringify(items));
}

function loadList() {
    const data = localStorage.getItem("shoppingList");

    if (data) {
        const items = JSON.parse(data);
        tableBody.innerHTML = ""; // cleans the table
        items.forEach(item => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td><input type="text" value="${item.name}" placeholder="Product"></td>
                <td><input type="number" value="${item.price}" placeholder="$" min="0"></td>
                <td><input type="number" value="${item.amount}" min="1"></td>
            `;

            tableBody.appendChild(newRow);
        });
    }
}

// functions

addBtn.addEventListener('click', () => {
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
    <td><input type="text" placeholder="Product" tabindex="0"></td>
    <td><input type="number" placeholder="$" tabindex="0" min="0"></td>
    <td><input type="number" placeholder="1" min="1" value="1"></td>
    `;

    tableBody.appendChild(newRow);

    saveList();
});

calcBtn.addEventListener('click', () => {
    const rows = document.querySelectorAll('#table-body tr')
    let total = 0;

    rows.forEach(row => {
        const name = row.querySelector('td:nth-child(1) input').value;
        const price = parseFloat(row.querySelector('td:nth-child(2) input').value);
        const amount = parseInt(row.querySelector('td:nth-child(3) input').value);
        if (name !== "" && !isNaN(price) && !isNaN(amount)){
            total += price * amount;
        }
    });
    totalSpan.textContent = total;

    saveList();
});

window.addEventListener("DOMContentLoaded", loadList);