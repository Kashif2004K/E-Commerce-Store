# K.EStore: Modern E-Commerce Website (HTML, CSS, JavaScript)

## 🌟 Project Overview

K.EStore is a simple, modern, and stylized front-end e-commerce template built using pure HTML, CSS, and vanilla JavaScript. The project focuses on a clean, dark-themed aesthetic, a responsive product catalog with a category sidebar, and an engaging user interface.

### Live Preview



## ✨ Features

* **Modern Design:** Clean, dark-themed layout with a strong primary color accent (`#3498db`).
* **Sticky Header:** Stylized navigation bar with Font Awesome icons for better user orientation.
* **Dynamic Hero Section:** Engaging full-height landing page with parallax scrolling effect.
* **Product Catalog:** Responsive grid layout for product cards, featuring a sleek hover effect.
* **Category Sidebar:** A dedicated sidebar in the product section for categories and filtering (CSS implemented, JS filtering logic placeholder).
* **Vanilla JavaScript:** Simple `renderProducts()` function for dynamic content loading and basic form validation.
* **Professional Footer:** Contains navigation links, social media icons, and copyright information.

## 📁 Project Structure

The project uses a standard web development structure:

K.EStore/ ├── assets/ # Placeholder for images (shirt.jpg, back2.jpg, etc.) ├── index.html # Main page structure ├── style.css # All custom styling and layout (responsive design included) ├── script.js # Product rendering and form handling logic └── README.md # This file


## 🛠️ Installation and Setup

Since this is a front-end-only project, installation is simple.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YourUsername/kestore.git](https://github.com/YourUsername/kestore.git)
    cd kestore
    ```
2.  **Open in Browser:**
    You can simply open the `index.html` file directly in your web browser (e.g., `file:///path/to/kestore/index.html`).
3.  **Use a Local Server (Recommended):**
    For the best experience, especially if you plan to fetch data or ensure correct paths, use a simple local server like **Live Server** extension in VS Code, or Python's built-in server:
    ```bash
    # Python 3
    python -m http.server 5000
    ```
    Then, navigate to `http://localhost:5000/index.html`.

## ⚙️ Customization

### 1. Color Palette (`style.css`)

You can easily change the main colors by modifying the CSS variables at the top of `style.css`:

```css
:root {
    --primary-color: #3498db; /* Change this for main accent color (e.g., green: #27ae60) */
    --secondary-color: #2c3e50; /* Change this for header/sidebar background */
    --background-dark: #1e1e1e;
    /* ... other variables ... */
}
2. Products (script.js)
To add, remove, or modify products, edit the products array in script.js:

JavaScript

const products = [
    { id: 1, name: "T-Shirt", price: 25.00, image: "assets/shirt.jpg" },
    { id: 2, name: "Hat", price: 18.50, image: "assets/hat.jpg" },
    // Add new products here
];
3. Categories (index.html)
The categories in the sidebar are currently hardcoded in index.html for demonstration. You can update the list items in the <aside id="categories-sidebar"> element:

HTML

<ul class="category-list">
    <li><a href="#">New Category</a></li>
    <li><a href="#">Another Category</a></li>
</ul>
🤝 Contribution
If you have suggestions for improvement, especially for implementing the product filtering logic or enhancing responsiveness, please feel free to submit a pull request or open an issue!

📜 License
This project is open source and available under the MIT License.
