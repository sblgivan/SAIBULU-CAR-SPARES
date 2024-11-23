// Product Data
const products = [
    {
        id: 1,
        name: "Luxury Sedan",
        price: "$45,000",
        category: "cars",
        image: "car1.jpg"
    },
    // Add more products here
];

// DOM Elements
const productGrid = document.querySelector('.product-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Initialize Products
function displayProducts(category = 'all') {
    productGrid.innerHTML = '';
    products.forEach(product => {
        if (category === 'all' || product.category === category) {
            const productCard = createProductCard(product);
            productGrid.appendChild(productCard);
        }
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button class="view-details">View Details</button>
        </div>
    `;
    return card;
}

// Filter Products
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayProducts(filter);
    });
});

// Mobile Menu Toggle
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Message sent successfully!');
    contactForm.reset();
});

// Initialize
displayProducts();

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
