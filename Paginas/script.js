// --- Efecto del Menú Superior al Hacer Scroll ---
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    
    // Si bajamos más de 50px
    if (window.scrollY > 50) {
        // Hacemos el menú un poco más compacto y transparente
        header.style.padding = '5px 0';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    } else {
        // Volvemos al estado original
        header.style.padding = '15px 0';
        header.style.backgroundColor = '#ffffff';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// --- Validación básica del Formulario (Opcional) ---
const form = document.querySelector('.contact-form');

if (form) {
    form.addEventListener('submit', function(event) {
        // En una web real, aquí enviarías los datos a un servidor.
        // Por ahora, solo simularemos que se envió.
        
        event.preventDefault(); // Evita que la página se recargue
        
        // Obtenemos el nombre para personalizar el mensaje
        const nombre = form.querySelector('input[type="text"]').value;
        
        alert(`¡Gracias ${nombre}! Tu solicitud de presupuesto ha sido enviada correctamente. Nos contactaremos a la brevedad.`);
        
        form.reset(); // Limpia el formulario
    });
}

console.log("Sitio de New Pool (Versión Profesional) cargado correctamente.");