# Shopping List

A simple shopping list project built with **HTML, CSS, and JavaScript**.  
It demonstrates **table manipulation, form validation, and LocalStorage usage**.

---

## Project Structure

```
├── assets/
│ ├── css/
│ │ ├── styles.css # Principal styles
│ │ └── responsive.css # Styles for media queries/responsive
│ ├── js/
│ │ └── script.js # Functionalities
├── index.html # Principal page
├── LICENSE # Project license
└── README.md # Project documentation
```

---

## Features

- Table with columns:
  - **Name**  
  - **Price**  
  - **Amount**
  - **Actions**
- Add new products using the "Add Product" button → new row is created.  
- Calculate totals using the "Calculate" button.  
- **Validation**: all inputs in a row must be filled for "Calculate" to work; "Add Product" works even if some fields are empty.  
- Data is saved in **LocalStorage** and persists across sessions.  

---

## How to Use

1. Open `index.html` in your browser.  
2. Add a new product:
   - Fill in the **Name**, **Price**, and **Amount** fields (optional for adding)  
   - Click **Add Product** → a new row is added  
3. To calculate totals:
   - Ensure all inputs in a row are filled  
   - Click **Calculate** → performs calculation based on the entered values  

---

## Requirements

- Modern web browser (no external libraries or frameworks used).  
