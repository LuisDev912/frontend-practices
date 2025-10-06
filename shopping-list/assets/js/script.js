//variables
const tableBody = document.getElementById("table-body");
const addBtn = document.getElementById("addProduct");
const calcBtn = document.getElementById("Calculate");
const totalSpan = document.getElementById("total");
const resetBtn = document.getElementById("Reset");
let productCounter = 0;

function createRow(item = { name: "", price: "", amount: 1 }) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><label for="product-name-${productCounter}" class="sr-only">Product name</label>
            <input id="product-name-${productCounter}" type="text" value="${item.name}" placeholder="Product"></td>
        <td><label for="product-price-${productCounter}" class="sr-only">Product price</label>
            <input id="product-price-${productCounter}" type="number" value="${item.price}" placeholder="$" min="0"></td>
        <td><label for="product-amount-${productCounter}" class="sr-only">Product amount</label>
            <input id="product-amount-${productCounter}" type="number" value="${item.amount}" min="1"></td>
        <td><label for="delete-product-${productCounter}" class="sr-only">Delete product</label>
            <button id="delete-product-${productCounter}" class="deleteButton">&times;</button></td>
    `;
    productCounter++;

    newRow.querySelector('.deleteButton').addEventListener('click', () => {
        newRow.remove();
        saveDraft();
    });

    return newRow;
}

function saveDraft() {
    const rows = [...document.querySelectorAll('#table-body tr')];
    const items = rows.map(row => ({
        name: row.querySelector('td:nth-child(1) input').value,
        price: row.querySelector('td:nth-child(2) input').value,
        amount: row.querySelector('td:nth-child(3) input').value
    }));
    localStorage.setItem("currentDraft", JSON.stringify(items));
}

function loadDraft() {
    const saved = localStorage.getItem("currentDraft");
    if (!saved) return;
    try {
        const items = JSON.parse(saved);
        tableBody.innerHTML = "";
        items.forEach(item => tableBody.appendChild(createRow(item)));
    } catch (e) {
        console.error("Error parsing draft:", e);
    }
}

//save and load data
function getSavedLists() {
    const saved = localStorage.getItem("shoppingLists");
    if (!saved) {
        return []; // returns an empty array if there isn't anything
    }
    try {
        return JSON.parse(saved);
    } catch (e) {
        console.error("Error when parsing JSON:", e);
        return []; // fallback 
    }
}

// save all lists 
function setSavedLists(lists) {
    localStorage.setItem("shoppingLists", JSON.stringify(lists));
}

// functions

addBtn.addEventListener('click', () => {
    tableBody.appendChild(createRow());
    saveDraft();
});

calcBtn.addEventListener('click', () => {
    const rows = document.querySelectorAll('#table-body tr');
    let total = 0;
    rows.forEach(row => {
        const name = row.querySelector('td:nth-child(1) input').value;
        const price = parseFloat(row.querySelector('td:nth-child(2) input').value);
        const amount = parseInt(row.querySelector('td:nth-child(3) input').value);
        if (name !== "" && !isNaN(price) && !isNaN(amount)) total += price * amount;
    });
    totalSpan.textContent = total;
    saveDraft();
});

resetBtn.addEventListener('click', () => {
    tableBody.innerHTML = "";
    tableBody.appendChild(createRow());
    totalSpan.textContent = "0";
    saveDraft();
});

resetBtn.addEventListener('click', () => {
    localStorage.setItem("shoppingList", JSON.stringify([])); // storages the empty list
    tableBody.innerHTML = "";
    tableBody.appendChild(createRow());
    totalSpan.textContent = "0";
});


// sidebar

const oppenBtn = document.querySelector('.menu-btn');
const sdbarContent = document.querySelector('.sidebar');
const saveBtn = document.querySelector('.saveBtn');
const saveName = document.getElementById('saveListName');
const submitBtn = document.getElementById('submitName');
const listContainer = document.querySelector('.list-container');

oppenBtn.addEventListener('click', () => {
    sdbarContent.classList.toggle("active");
});

saveBtn.addEventListener('click', () => {
    saveName.classList.toggle('active');
    submitBtn.classList.toggle('active');
});

function renderSidebar() {
    listContainer.innerHTML = ""; // clean

    const lists = getSavedLists();
    lists.forEach(list => {
        const li = document.createElement('li');
        li.classList.add('list-item');

        li.innerHTML = `
            <span class="list-name">${list.name}</span>
            <small>${list.date}</small>
            <button class="load-btn">Load</button>
            <button class="delete-btn">Delete</button>
        `;

        li.querySelector('.load-btn').addEventListener('click', () => loadSpecificList(list.id));
        li.querySelector('.delete-btn').addEventListener('click', () => deleteList(list.id));

        listContainer.appendChild(li);
    });
}

submitBtn.addEventListener('click', () => {
    const name = saveName.value.trim();
    if (!name) return;

    const rows = [...document.querySelectorAll('#table-body tr')];
    const items = rows.map(row => ({
        name: row.querySelector('td:nth-child(1) input').value,
        price: row.querySelector('td:nth-child(2) input').value,
        amount: row.querySelector('td:nth-child(3) input').value
    }));

    const newList = {
        id: Date.now(),
        name,
        date: new Date().toLocaleString(),
        items
    };

    const lists = getSavedLists();
    lists.push(newList);
    setSavedLists(lists);

    // clean table and draft
    tableBody.innerHTML = "";
    tableBody.appendChild(createRow());
    totalSpan.textContent = "0";
    localStorage.removeItem("currentDraft");

    saveName.value = "";
    renderSidebar();
});

function loadSpecificList(id) {
    const lists = getSavedLists();
    const list = lists.find(l => l.id === id);
    if (!list) return;

    tableBody.innerHTML = "";
    list.items.forEach(item => tableBody.appendChild(createRow(item)));
    saveDraft();
}

function deleteList(id) {
    let lists = getSavedLists();
    lists = lists.filter(l => l.id !== id);
    setSavedLists(lists);
    renderSidebar();
}

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
    const draft = localStorage.getItem("currentDraft");
    if (draft) {
        const items = JSON.parse(draft);
        tableBody.innerHTML = "";
        items.forEach(item => tableBody.appendChild(createRow(item)));
    } else {
        tableBody.appendChild(createRow());
    }

    renderSidebar();

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});


window.addEventListener("DOMContentLoaded", getSavedLists);