// document.addEventListener('DOMContentLoaded', function() {
//     const homeContainer = document.querySelector('#home-container');
//     const faElements = document.querySelectorAll('.fa');
//     const cursor = document.getElementById('cursor');

//     window.addEventListener('mousemove', (e) => {

//         cursor.style.left = e.clientX + 'px';
//         cursor.style.top = e.clientY + 'px';
//     });

//     homeContainer.addEventListener('mouseenter', () => {
//         cursor.style.border = '4px double rgba(255,255,255,0.5)';
//         cursor.style.boxShadow = '0 0 33px rgba(255, 255, 255, 0.3)';
//     });

//     homeContainer.addEventListener('mouseleave', () => {
//         cursor.style.border = '3px solid hsl(211,100%,49%)';
//         cursor.style.boxShadow = '0 0 22px rgba(131, 152, 255, 0.6)';
//     });

//     faElements.forEach((faElement) => {
//         faElement.addEventListener('mouseenter', () => {
//         cursor.style.border = '4px double rgba(255,255,255,0.5)';
//         cursor.style.boxShadow = '0 0 33px rgba(255, 255, 255, 0.3)';
//     });

//         faElement.addEventListener('mouseleave', () => {
//             cursor.style.border = '3px solid hsl(211,100%,49%)';
//             cursor.style.boxShadow = '0 0 22px rgba(131, 152, 255, 0.6)';
//         });
//     });
// });



document.addEventListener('DOMContentLoaded', function() {

    const homeLogo = document.querySelector('.logo');
    const homeContainer = document.querySelector('#home-container');
    const faElements = document.querySelectorAll('.fa');
    const cursor = document.getElementById('cursor');

    window.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        const isInsideHomeContainer = homeContainer.contains(e.target);
        const isInsideLogoElement = homeLogo.contains(e.target);
        const isInsideFaElement = Array.from(faElements).some((el) => el.contains(e.target));

        cursor.classList.remove('cursor-hover');

        if (isInsideHomeContainer || isInsideFaElement || isInsideLogoElement) {
            cursor.classList.add('cursor-hover');
        } else{
            cursor.classList.remove('cursor-hover');
        }
        
    });
});
