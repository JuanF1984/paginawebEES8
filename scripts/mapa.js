// Inicializa el mapa y establece la vista centrada en la Escuela Secundaria Nº 8
var map = L.map('map').setView([-34.4514, -59.4561], 14);

// Agrega la capa de mapa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Agrega un marcador en la Escuela Secundaria Nº 8
L.marker([-34.4546086, -59.4404068]).addTo(map)
    .bindPopup('Escuela Secundaria Nº 8, San Andrés de Giles')
    .openPopup();