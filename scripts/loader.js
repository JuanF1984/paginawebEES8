document.addEventListener("DOMContentLoaded", () => {
    let preloader = document.getElementById("loaderContainer");
    let content = document.getElementById("bodyContainer");
    let images = document.images;
    let imagesTotalCount = images.length;
    let imagesLoadedCount = 0;

    const imageLoaded = () => {
        imagesLoadedCount++;
        if (imagesLoadedCount === imagesTotalCount) {
            preloader.style.display = "none";
            content.style.display = "block";
            document.body.style.overflow = "auto"; // Permite el scroll después de la carga
        }
    };

    (imagesTotalCount === 0) ? imageLoaded() : (
        Array.from(images).forEach(image => {
            let img = new Image();
            img.onload = imageLoaded;
            img.onerror = imageLoaded;
            img.src = image.src;
        })
    );
});