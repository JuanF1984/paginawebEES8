const punto = document.querySelectorAll('.punto')
let imagenes = {
    0:{ 
        "src":"assets/img/escnueva/05.webp",
        "title":"Imagen del frente del colegio",
        "alt":"Imagen del frente del colegio"},
    1:{
        "src":"assets/img//escnueva/01.webp",
        "title": "Estudiantes y docente en clase de prácticas de lenguaje",
        "alt": "Estudiantes y docente en clase de prácticas de lenguaje"},
    2:{
        "src":"assets/img/escnueva/02.webp",
        "title": "Estudiantes en clase de prácticas de historia",
        "alt": "Estudiantes en clase de prácticas de historia"},
       
    }
    
let intervalo = null;

// FUNCIÓN QUE HACE QUE SE RECORRA EL CARROUSEL DE FORMA AUTOMATICA
// Tiene un parametro que indica en la posición que debe iniciar
const start = (position) => {
    intervalo = setInterval(function () {
        insertarImagen(position)
        position >= 2 ? (position = 0) : (position++)
    }, 3500)
}

// FUNCIÓN QUE DETIENE LA REPRODUCCIÓN AUTOMÁTICA
const stop = () => {
    clearInterval(intervalo);
};

const insertarImagen = (position) => {
    // se agregan los distintos atributos a la etiqueta imagen del carrousel
    document.imagen.src = imagenes[position].src
    document.imagen.title=imagenes[position].title
    document.imagen.alt=imagenes[position].alt
    punto.forEach((cadaPunto, i) => {
        // Quitamos la clase ACTIVO a TODOS los punto
        punto[i].classList.remove('activo')
    })
    // se le agrega la clase ACTIVO al botón que representa al lugar de la imagen correspondiente
    punto[position].classList.add('activo')
}

// FUNCIÓN PARA MOVER LAS IMÁGENES DESDE LOS BOTONES
// Recorrer TODOS los punto
punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
        // Al hacer click lo primero que hace es detener la reproducción automática
        stop()
        // Se llama a la función para que ponga imagen en la etiqueta correspondiente
        insertarImagen(i)
        // Se llama nuevamente a la reproducción automática de imagenes
        start(i)
    })
})

// iniciamos la reproducción de imagenes en la segunda imagen porque inicialmente inicia en la primera 
// se carga junto c;on la página la primer página antes de que inicie la reproducción automática
start(1)