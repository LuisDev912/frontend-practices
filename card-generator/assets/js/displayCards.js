const container = document.getElementById('cardContainer');
const cards = JSON.parse(localStorage.getItem('cards')) || [];

cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.setAttribute('id', 'card');
    cardElement.innerHTML = `
            <h2>${card.title}</h2>
            <img src="${card.photo}" alt="${card.title}">
            <h3>${card.subtitle}</h3>
            <p>${card.description}</p>
            `;

    container.appendChild(cardElement);
});