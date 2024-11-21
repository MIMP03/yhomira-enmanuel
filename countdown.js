document.addEventListener('DOMContentLoaded', function() {
    // Añadir clase animate a elementos con retraso
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });

    function updateCountdown() {
        const weddingDate = new Date('April 4, 2025 18:00:00').getTime();
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Actualizar con animación
        updateWithAnimation('days', days);
        updateWithAnimation('hours', hours);
        updateWithAnimation('minutes', minutes);
        updateWithAnimation('seconds', seconds);

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown').innerHTML = '<h2 class="animate">¡El gran día ha llegado!</h2>';
        }
    }

    function updateWithAnimation(id, value) {
        const element = document.getElementById(id);
        const currentValue = parseInt(element.textContent);
        
        if (currentValue !== value) {
            element.style.transform = 'scale(1.1)';
            element.style.opacity = '0.5';
            
            setTimeout(() => {
                element.textContent = value;
                element.style.transform = 'scale(1)';
                element.style.opacity = '1';
            }, 100);
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
}); 