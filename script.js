document.addEventListener('DOMContentLoaded', function () {
    const greenRange = document.getElementById('greenRange');
    const whiteRange = document.getElementById('whiteRange');
    const redRange = document.getElementById('redRange');

    const greenBox = document.getElementById('green');
    const whiteBox = document.getElementById('white');
    const redBox = document.getElementById('red');

    const greenHex = document.getElementById('greenHex');
    const whiteHex = document.getElementById('whiteHex');
    const redHex = document.getElementById('redHex');

    function updateColors() {
        // Ajuste para un verde más intenso
        const greenValue = Math.min(Math.max(parseInt(greenRange.value, 10), 0), 255);
        const greenColor = `rgb(0, ${greenValue}, 0)`;
        const hexGreen = `#${greenValue.toString(16).padStart(2, '0')}6400`;

        const redColor = '#800000';

        greenBox.style.backgroundColor = greenColor;
        redBox.style.backgroundColor = redColor;

        greenHex.textContent = hexGreen;
        redHex.textContent = redColor;
    }

    greenRange.addEventListener('input', updateColors);
    redRange.addEventListener('input', updateColors);

    updateColors(); // Inicializar colores al cargar
});
