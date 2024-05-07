const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')
let imagenes = ["assets/img/img1.jpg", "assets/img/img2.jpg","assets/img/img3.jpg"]
let intervalo = null;


// FUNCIÓN QUE HACE QUE SE RECORRA EL CARROUSEL DE FORMA AUTOMATICA
// Tiene un parametro que indica en la posición que debe iniciar
const start = (position) => {
    let operation = 0
    intervalo = setInterval(function () {
        // Modifica la posición, en este caso corresponde a 3 imágenes
        operation = position * -33.3
        // Traslada el div con las imágenes posicionando a la que corresponde
        grande.style.transform = `translateX(${operation}%)`
        // Recorre cada uno de los botones y le saca la clase activo
        punto.forEach((cadaPunto, i) => {
           punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[position].classList.add('activo')
        // Si llegamos a la última posición vuelve a cero. Este caso es para tres imágenes
        position >= 2 ? (position = 0) : (position++)
    }, 3500)
}
// FUNCIÓN QUE DETIENE LA REPRODUCCIÓN AUTOMÁTICA
const stop = () => {
    clearInterval(intervalo);
};

// FUNCIÓN PARA MOVER LAS IMÁGENES DESDE LOS BOTONES
// Recorrer TODOS los punto
punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
        // Al hacer click lo primero que hace es detener la reproducción automática
        stop()
        // Guardar la posición de ese PUNTO
        let position = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operation = position * -33.3
        // MOVEMOS el grande
        grande.style.transform = `translateX(${operation}%)`
        // Recorremos TODOS los punto
        punto.forEach((cadaPunto, i) => {
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')
        //Una vez que ya se detuvo la reproducción automática para ver la imagen,
        // vuelve a reproducirse indicando desde que imágen debe hacerlo 
        start(i)
    })
})

start(0)