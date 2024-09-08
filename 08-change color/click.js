function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const boxes = document.querySelectorAll('.color-box');
boxes.forEach(box => {
    box.addEventListener('click', () => {
        box.style.backgroundColor = getRandomColor();
    });
});