const form = document.getElementById('cardForm');
const MAX_SIZE_MB = 1; // 1 MB
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const photoInput = document.getElementById('photoSelector');
    const subtitle = document.getElementById('subtitle').value;
    const description = document.getElementById('description').value;
    const file = photoInput.files[0];


    if (file.size > MAX_SIZE_BYTES) {
        alert(`This photo exceds the space limit: ${MAX_SIZE_MB} MB`);
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        const photo = reader.result;

        const card = {
            title,
            photo,
            subtitle,
            description
        };

        // storage in localStorage
        let cards = JSON.parse(localStorage.getItem('cards')) || [];
        cards.push(card);
        localStorage.setItem('cards', JSON.stringify(cards));

        // create card and show it in index.html

        // const container = document.querySelector('#cardContainer');
        // const cardElement = document.createElement('div');
        // cardElement.setAttribute('id', 'card');
        // cardElement.innerHTML = `
        // <h2>${card.title}</h2>
        // <img src="${card.photo}" alt="${card.title}">
        // <h3>${card.subtitle}</h3>
        // <p>${card.description}</p>
        // `;

        // container.appendChild(cardElement);
        // there's an error here, because cardContainer is in index.html, not in card-generator.html
        // So, I'll create two JS files: one to store the data and another to show the card.

        form.reset();
        alert('Card created successfully!');

        //redirect to index.html
        window.location.href = "index.html";
    };
    reader.readAsDataURL(file);
});