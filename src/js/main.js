// Este arquivo contém o código JavaScript que adiciona interatividade à página. 

document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Obrigado por seu interesse! Em breve, você receberá mais informações.');
        });
    }

    const imageGallery = document.querySelectorAll('.gallery-image');
    imageGallery.forEach(image => {
        image.addEventListener('click', function() {
            const mainImage = document.getElementById('main-image');
            mainImage.src = this.src;
        });
    });

    // Menu hamburguer responsivo
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
