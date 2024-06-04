const perfilMasMenos = document.getElementById('perfilMasMenos');
const perfilTextHidden = document.querySelector('.perfilTextHidden');
const perfilText = document.querySelector('.perfilText');

perfilMasMenos.addEventListener('click', () => {
    if (perfilMasMenos.textContent === 'Leer Más') {
        perfilTextHidden.classList.add('perfilTextVisible')
        perfilText.classList.add('perfilTextHidden')
        perfilMasMenos.textContent = 'Leer Menos'
    }else{
        perfilTextHidden.classList.remove('perfilTextVisible')
        perfilText.classList.remove('perfilTextHidden')
        perfilMasMenos.textContent = 'Leer Más'
    }
})