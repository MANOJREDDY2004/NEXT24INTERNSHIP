    // Select all the steps
    const steps = document.querySelectorAll('.step');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
    }

    // Scroll event listener
    function handleScroll() {
    steps.forEach((step) => {
        if (isInViewport(step)) {
        step.classList.add('visible');
        } else {
        step.classList.remove('visible');
        }
    });
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();


// marquee animation

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".services, .steps, .testimonials, .footer");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});



// smooth scroll 

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
