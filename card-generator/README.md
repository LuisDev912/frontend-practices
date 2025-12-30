# Card-Generator
This is a simple project to create and display custom cards using **HTML, CSS, and JavaScript**.  
This project demonstrates how to use **LocalStorage** to save user input and show it using DOM.

---

## Project Structure

```
card-generator/
│
├── index.html # Displays all generated cards
├── create.html # Form to create a new card
│
├── assets/
│ ├── js/
│ │ ├── loadCards.js # Handles LocalStorage and image size validation
│ │ └── displayCards.js # Renders cards dynamically in index.html
│ │
│ ├── css/
│ │ ├── styles.css # Shared styles for both HTML files
│ │ └── formStyles.css # Styles specific to create.html
│ │
│ └── img/
│ └── logo.png # Example image (HTML logo for testing)
│
├── README.md # Explains the project
```

---

## Features

- Add custom cards with:
  - Title
  - Subtitle
  - Image
  - Description  
- Data is stored in **LocalStorage** and persists across sessions.  
- Form includes **basic validation** (e.g., image file size).  
- Dynamic rendering of cards in the main page (`index.html`).  

---

## How to Use

1. Open `create.html` in your browser.  
2. Fill in the form with the card details (title, image, subtitle, description).  
3. Submit the form → the card will be saved in LocalStorage.  
4. You'll be redirected to `index.html` to view all the cards you’ve created.  

---

## Requirements

- Modern web browser (no frameworks or external libraries required).  

---

## Notes

- Cards are stored locally in your browser, not in a database.  
- If you clear the browser’s LocalStorage, all cards will be deleted.