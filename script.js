const scrollSections = document.querySelectorAll('.scroll-section');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Rimuove l'osservazione dopo l'animazione
        }
    });
}, { threshold: 0.1 }); // Triggera quando il 10% dell'elemento è visibile

scrollSections.forEach(section => {
    observer.observe(section);
});
 