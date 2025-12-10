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
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
            </div>
            <button onclick="addToCart(${product.id}, '${product.name}')">
                <i class="fas fa-cart-plus"></i>Add to Cart
            </button>
        `;
        productGrid.appendChild(card);
    });
}

function addToCart(id, name) {
    alert(`Added "${name}" (ID: ${id}) to the cart!`);
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`Thank you, ${name}! Your message has been received.`);
        this.reset(); 
    } else {
        alert('Please fill out all required fields.');
    }
});

renderProducts();