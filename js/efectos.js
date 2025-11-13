const fadeElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .fade-in');

// Creamos el observador
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Añadimos la clase "show" cuando el div entra en el viewport
            entry.target.classList.add('show');
        } else {
            // Cuando sale del viewport → desaparece
            entry.target.classList.remove('show');
        }
    });
}, {
  threshold: 0.2 // Se activa cuando al menos el 20% del div es visible
});

// Observamos cada elemento
fadeElements.forEach(el => observer.observe(el));