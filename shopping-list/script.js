//variables
const tableBody = document.getElementById("table-body");
const addBtn = document.getElementById("addProduct");
const calcBtn = document.getElementById("Calculate");
const totalSpan = document.getElementById("total");
const resetBtn = document.getElementById("Reset");

function createRow(item = { name: "", price: "", amount: 1 }) {
    let counter = 1;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><input id="product-name" type="text" value="${item.name}" placeholder="Product"></td>
        <td><input id="product-price" type="number" value="${item.price}" placeholder="$" min="0"></td>
        <td><input id="product-amount" type="number" value="${item.amount}" min="1"></td>
        <td><button id="delete-product" class="deleteButton">X</button></td>
    `;

    newRow.querySelector('.deleteButton').addEventListener('click', () => {
        newRow.remove();
        saveList();
    });

    return newRow;
}

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
    tableBody.innerHTML = "";

    if (data) {
        const items = JSON.parse(data);
        if (items.length === 0) {
            tableBody.appendChild(createRow()); // empty row
        } else {
            items.forEach(item => {
                const newRow = createRow(item); // always with the listener
                tableBody.appendChild(newRow);
            });
        }
    } else {
        tableBody.appendChild(createRow());
    }
}

// functions

addBtn.addEventListener('click', () => {
    const newRow = createRow();
    tableBody.appendChild(newRow);
    saveList();
});

calcBtn.addEventListener('click', () => {
    const rows = document.querySelectorAll('#table-body tr');
    let total = 0;

    rows.forEach(row => {
        const name = row.querySelector('td:nth-child(1) input').value;
        const price = parseFloat(row.querySelector('td:nth-child(2) input').value);
        const amount = parseInt(row.querySelector('td:nth-child(3) input').value);

        if (name !== "" && !isNaN(price) && !isNaN(amount)) {
            total += price * amount;
        }
    });
    totalSpan.textContent = total;

    saveList();
});

resetBtn.addEventListener('click', () => {
    localStorage.setItem("shoppingList", JSON.stringify([])); // storages the empty list
    tableBody.innerHTML = "";
    tableBody.appendChild(createRow());
    totalSpan.textContent = "0";
});

// togle mode

const toggleBtn = document.getElementById('toggle-mode');


toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isPressed = toggleBtn.getAttribute("aria-pressed") === "true";
    toggleBtn.setAttribute("aria-pressed", String(!isPressed));

    // save the preferences on localStorage
    localStorage.setItem("theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
});

// load selected team
window.addEventListener("DOMContentLoaded", () => {
    loadList();
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});

window.addEventListener("DOMContentLoaded", loadList);