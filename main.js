
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    let deg = 0;
    function rotateColors() {
        deg = (deg + 7) % 260;
        header.style.background = `linear-gradient(${deg}deg, #FFD700, #4169E1)`;
        requestAnimationFrame(rotateColors);
    }
    rotateColors();
});
