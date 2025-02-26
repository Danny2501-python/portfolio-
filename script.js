// script.js (optional for extra interactivity, like smooth scrolling)
document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelectorAll('.navbar ul li a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
});

