const perfilMasMenos = document.getElementById('texto')
const perfilTextHidden = document.querySelector('.textoescondido');

perfilMasMenos.addEventListener('click', () => {
    if (perfilMasMenos.textContent === 'Leer Más') {
        perfilTextHidden.classList.add('textVisible')
        perfilMasMenos.textContent = 'Leer Menos'
    }else{
        perfilTextHidden.classList.remove('textVisible')
        perfilMasMenos.textContent = 'Leer Más'
    }
})