document.addEventListener('DOMContentLoaded', function() {
    console.log("Página cargada");
    
    // Ejemplo de interacción simple
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});

