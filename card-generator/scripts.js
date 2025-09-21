const form = document.getElementById('cardForm');
const MAX_SIZE_MB = 1; // 1 MB
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

form.addEventListener('submit', (e) => {
    e.defaultPrevented();

    const title = document.getElementById('title').value;
    const photoInput = document.getElementById('photoSelector');
    const subtitle = document.getElementById('subtitle').value;
    const description = document.getElementById('description').value;



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

        //I'll use localStorage to store the card data temporarily, but later
    };
});