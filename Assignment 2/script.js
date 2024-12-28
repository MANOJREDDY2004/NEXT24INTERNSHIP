const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Initial display
showSlide(0);

// Automatic slide change (optional)
setInterval(() => {
  showSlide(currentSlide + 1);
}, 2500); // Change slide every 2.5 seconds


//add to cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const   
 product = {
      id: 'product123',
      name: 'Product Name',
      price: 19.99,
      quantity: 1
    };

    // Add product to cart (e.g., using local storage or server-side storage)
    addToCart(product);

    // Update cart icon and total price
    updateCartIcon();
    updateTotalPrice();
  });
});

//price range

const minValueDisplay = document.querySelector('.min-value');
const maxValueDisplay = document.querySelector('.max-value');
const minRange = document.querySelector('.range-min');
const maxRange = document.querySelector('.range-max');

function updateValues() {
  minValueDisplay.textContent = minRange.value;
  maxValueDisplay.textContent = maxRange.value;
}

// Initial display
updateValues();

// Update values on slider change
minRange.addEventListener('input', updateValues);
maxRange.addEventListener('input', updateValues);


// scrolling animation

    function handleScroll() {
        const elements = document.querySelectorAll('.fade-in-image');
        const triggerPoint = window.innerHeight * 0.9;

        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < triggerPoint) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    document.addEventListener('scroll', handleScroll);
    document.addEventListener('DOMContentLoaded', handleScroll);