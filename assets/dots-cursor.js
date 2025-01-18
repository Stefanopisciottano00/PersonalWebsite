
document.addEventListener('DOMContentLoaded', function() {
    

    const centerDot = document.querySelector('.dot-center');
    const dotRings = document.querySelectorAll('.dot');
    const dotRings2 = document.querySelectorAll('.dot2');
    const dotRings3 = document.querySelectorAll('.dot3');


    // FUNZIONE POSITIONDOTS
    const positionDots = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    centerDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

    dotRings.forEach((dot, index) => {
    
    const angle = ((index * (360 / dotRings.length)) * (Math.PI / 180));
    const radius = 10; // Distanza tra i punti dal centro
    const x = mouseX + radius * Math.cos(angle);
    const y = mouseY + radius * Math.sin(angle);

    dot.style.transform = `translate(${x}px, ${y}px)`;
    });

    dotRings2.forEach((dot, index) => { 

    const angle = -(index * (360 / dotRings.length)) * (Math.PI / 180);
    const radius = 20; // Distanza tra i punti dal centro
    const x = mouseX + radius * Math.cos(angle);
    const y = mouseY + radius * Math.sin(angle);

    dot.style.transform = `translate(${x}px, ${y}px)`;
    });

    dotRings3.forEach((dot, index) => {
        const angle = (index * (360 / dotRings.length) ) * (Math.PI / 180);
        const radius = 30;
        const x = mouseX + radius * Math.cos(angle);
        const y = mouseY + radius * Math.sin(angle);

        dot.style.transform = `translate(${x}px, ${y}px)`;
    });

    }







    positionDots({
        clientX: 0, // Posizione X iniziale al centro della finestra
        clientY: 0, // Posizione Y iniziale al centro della finestra
      });

    window.addEventListener('mousemove', positionDots);

  });