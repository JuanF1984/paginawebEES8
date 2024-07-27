const botonMasMenos = document.getElementById('leerMasMenos');
const textHidden = document.querySelector('.textoEscondido');
botonMasMenos.addEventListener('click', () => {
    if (botonMasMenos.textContent === 'Leer Más') {
        textHidden.style.display = 'block';
        botonMasMenos.textContent = 'Leer Menos';
    } else {
        textHidden.style.display = 'none';
        botonMasMenos.textContent = 'Leer Más';
    }
});
