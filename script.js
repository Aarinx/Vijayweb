// Placeholder function to handle adding to cart
function addToCart() {
    alert('Notebook added to your cart!');
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animated-section > *').forEach(el => {
        observer.observe(el);
    });
});
