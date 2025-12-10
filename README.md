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
```

## Live Demo
https://your-username.github.io/kestore/
