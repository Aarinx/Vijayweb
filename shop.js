document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: 'Product 1', price: 19.99, image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: 29.99, image: 'product2.jpg' },
        { id: 3, name: 'Product 3', price: 39.99, image: 'product3.jpg' },
        // Add more products as needed
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
});

function addToCart(productId) {
    // Implement add to cart functionality
    console.log(`Product ${productId} added to cart`);
    // You can expand this function to update the cart in local storage or send data to a server
}
