let dummy = document.querySelector('.dummy');

window.addEventListener('load', () => {
    dummy.style.position = 'absolute';
    dummy.style.left = 0;
    dummy.style.top = 0;
});


window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            dummy.style.left = parseInt(dummy.style.left) - 50 + 'px';
            break;
        case 'ArrowRight':
            dummy.style.left = parseInt(dummy.style.left) + 50 + 'px';
            break;
        case 'ArrowUp':
            dummy.style.top = parseInt(dummy.style.top) - 50 + 'px';
            break;
        case 'ArrowDown':
            dummy.style.top = parseInt(dummy.style.top) + 50 + 'px';
            break;
    }
});