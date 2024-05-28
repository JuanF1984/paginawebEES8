const perfilMasMenos = document.getElementById('perfilMasMenos')
const perfilTextHidden = document.querySelector('.perfilTextHidden');

perfilMasMenos.addEventListener('click', () => {
    if (perfilMasMenos.textContent === 'Leer Más') {
        perfilTextHidden.classList.add('perfilTextVisible')
        perfilMasMenos.textContent = 'Leer Menos'
    }else{
        perfilTextHidden.classList.remove('perfilTextVisible')
        perfilMasMenos.textContent = 'Leer Más'
    }
})