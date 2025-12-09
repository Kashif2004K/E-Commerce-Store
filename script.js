const products = [
    { id: 1, name: "T-Shirt", price: 25.00, image: "assets/shirt.jpg" },
    { id: 2, name: "Hat", price: 18.50, image: "assets/hat.jpg" },
    { id: 3, name: "Mug", price: 15.00, image: "assets/mug.jpg" },
    { id: 4, name: "Hoodie", price: 45.00, image: "assets/hoodie.jpg" }
];

function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ''; 

    products.forEach(product => {
        // Create the HTML structure for a single product card
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id}, '${product.name}')">Add to Cart</button>
        `;
        productGrid.appendChild(card);
    });
}

// 3. Simple Add to Cart Logic
function addToCart(id, name) {
    // In a real e-commerce site, this would update a cart count or use Local Storage.
    // For this simple example, we'll just show an alert.
    alert(`Added "${name}" (ID: ${id}) to the cart!`);
}

// 4. Contact Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from actually submitting (reloading the page)
    
    // Simple validation check (since the HTML has 'required')
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`Thank you, ${name}! Your message has been received.`);
        this.reset(); // Clear the form fields
    } else {
        alert('Please fill out all required fields.');
    }
});


// 5. Initial Call: Load the products when the page loads
renderProducts();