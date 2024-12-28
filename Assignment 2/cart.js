// Sample data structure for the cart and wishlist
let cart = [
    { id: 1, name: 'Product 1', description: 'Short description of product 1', price: 999, image: 'images/image2.1.jpg' },
];

let wishlist = [
    { id: 2, name: 'Wishlist Product', description: 'Short description of wishlist product', price: 799, image: 'images/image3.jpg' },
];

// Render the cart items
function renderCart() {
    const cartContainer = document.getElementById('cart');
    const footer = cartContainer.querySelector('.footer');

    // Clear existing items
    cartContainer.innerHTML = '<h2>Your Cart</h2>';

    if (cart.length === 0) {
        cartContainer.innerHTML += '<p>Your cart is empty.</p>';
        footer.style.display = 'none';
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const itemHTML = `
        <div class="item">
            <img src="${item.image}" alt="${item.name}">
            <div class="details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
            <div class="price">₹${item.price}</div>
            <div class="actions">
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>`;

        cartContainer.innerHTML += itemHTML;
        total += item.price;
    });

    footer.querySelector('.total').textContent = `Total Amount: ₹${total}`;
    footer.style.display = 'block';
    cartContainer.appendChild(footer);
}

// Render the wishlist items
function renderWishlist() {
    const wishlistContainer = document.getElementById('wishlist');

    // Clear existing items
    wishlistContainer.innerHTML = '<h2>Your Wishlist</h2>';

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML += '<p>Your wishlist is empty.</p>';
        return;
    }

    wishlist.forEach(item => {
        const itemHTML = `
        <div class="item">
            <img src="${item.image}" alt="${item.name}">
            <div class="details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
            <div class="price">₹${item.price}</div>
            <div class="actions">
                <button onclick="moveToCart(${item.id})">Add to Cart</button>
                <button onclick="removeFromWishlist(${item.id})">Remove</button>
            </div>
        </div>`;

        wishlistContainer.innerHTML += itemHTML;
    });
}

// Remove an item from the cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
}

// Remove an item from the wishlist
function removeFromWishlist(id) {
    wishlist = wishlist.filter(item => item.id !== id);
    renderWishlist();
}

// Move an item from the wishlist to the cart
function moveToCart(id) {
    const item = wishlist.find(item => item.id === id);
    if (item) {
        cart.push(item);
        removeFromWishlist(id);
        renderCart();
    }
}

// Initialize the render functions
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    renderWishlist();
});

// add to cart function

function addToCart(id, name, description, price, image) {
    // Check if the item is already in the cart
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        alert('This item is already in your cart.');
        return;
    }

    // Add the new product to the cart
    cart.push({ id, name, description, price, image });

    // Update the cart display
    renderCart();

    alert(`${name} has been added to your cart.`);
}
