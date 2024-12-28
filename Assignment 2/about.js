function handleScroll() {
    const images = document.querySelectorAll('.fade-in-image');
    const triggerPoint = window.innerHeight * 0.9;

    images.forEach(image => {
        const rect = image.getBoundingClientRect();
        if (rect.top < triggerPoint) {
            image.classList.add('visible');
        } else {
            image.classList.remove('visible');
        }
    });
}

document.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);