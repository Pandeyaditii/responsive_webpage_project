// Toggle the left menu visibility
function toggleMenu() {
    const leftMenu = document.getElementById('leftMenu');
    if (leftMenu.style.transform === 'translateX(0%)') {
        leftMenu.style.transform = 'translateX(-100%)';
    } else {
        leftMenu.style.transform = 'translateX(0%)';
    }
}

// Adjust page scaling based on screen width
function adjustPageScale() {
    const width = window.innerWidth;
    let scale = 1;

    if (width > 992 && width <= 1600) {
        scale = 0.9;
    } else if (width >= 700 && width <= 767) {
        scale = 0.8;
    } else if (width >= 600 && width < 700) {
        scale = 0.75;
    } else if (width <= 600) {
        scale = 0.5;
    }

    document.body.style.transform = `scale(${scale})`;
    document.body.style.transformOrigin = 'top left';
}

// Initialize scaling on page load
window.onload = adjustPageScale;

// Adjust scaling on window resize
window.onresize = adjustPageScale;
