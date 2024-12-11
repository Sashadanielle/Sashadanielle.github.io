// Seleccionar el botón de menú y el contenedor del menú
const menuToggle = document.getElementById('menu-toggle');
const menuItems = document.getElementById('menu-items');

// Añadir un evento de clic al botón de menú
menuToggle.addEventListener('click', () => {
    // Alternar la clase 'show' en el contenedor del menú
    menuItems.classList.toggle('show');
});


(function () {
    // -------- Variables y Funciones del Banner -------- //
    let currentBannerIndex = 0;
    const bannerImages = [
        'Img-Encabezado/Encabezado.png',
        'Img-Encabezado/Encabezado1.png',
        'Img-Encabezado/Encabezado2.png',
        'Img-Encabezado/Encabezado3.png',
        'Img-Encabezado/Encabezado4.png',
        'Img-Encabezado/Encabezado5.png',
    ];

    const banner = document.querySelector('.banner');
    const prevBannerBtn = document.querySelector('.banner-prev');
    const nextBannerBtn = document.querySelector('.banner-next');

    // Validar si el banner y los botones existen
    if (!banner || !prevBannerBtn || !nextBannerBtn) {
        console.error('Error: Elementos del banner no encontrados.');
    } else {
        function loadBannerImage(index) {
            if (bannerImages.length === 0) {
                console.error('Error: No hay imágenes en el banner.');
                return;
            }
            banner.style.backgroundImage = `url(${bannerImages[index]})`;
        }

        function nextBanner() {
            currentBannerIndex = (currentBannerIndex + 1) % bannerImages.length;
            loadBannerImage(currentBannerIndex);
        }

        prevBannerBtn.addEventListener('click', () => {
            currentBannerIndex = (currentBannerIndex - 1 + bannerImages.length) % bannerImages.length;
            loadBannerImage(currentBannerIndex);
        });

        nextBannerBtn.addEventListener('click', () => {
            nextBanner();
        });

        // Cambio automático cada 5 segundos
        setInterval(nextBanner, 5000);
    }

    // -------- Variables y Funciones del Carrusel -------- //
    // Validar si el carrusel y sus elementos existen
    (function () {
        const carouselSlides = document.querySelectorAll('.carousel-slide');
        const carouselTrack = document.querySelector('.carousel-track');
        const prevCarouselBtn = document.querySelector('.carousel-btn.prev');
        const nextCarouselBtn = document.querySelector('.carousel-btn.next');
    
        if (!carouselSlides.length || !carouselTrack || !prevCarouselBtn || !nextCarouselBtn) {
            console.error('Error: Elementos del carrusel no encontrados o vacíos.');
            return;
        }
    
        let currentCarouselIndex = 0;
    
        function updateCarouselPosition() {
            const slideWidth = carouselSlides[0].offsetWidth;
            if (!slideWidth) {
                console.error('Error: El ancho de las diapositivas es 0. Revisa los estilos CSS.');
                return;
            }
            carouselTrack.style.transform = `translateX(-${currentCarouselIndex * slideWidth}px)`;
        }
    
        prevCarouselBtn.addEventListener('click', () => {
            currentCarouselIndex = (currentCarouselIndex - 1 + carouselSlides.length) % carouselSlides.length;
            updateCarouselPosition();
        });
    
        nextCarouselBtn.addEventListener('click', () => {
            currentCarouselIndex = (currentCarouselIndex + 1) % carouselSlides.length;
            updateCarouselPosition();
        });
    
        // Inicializa el carrusel en su posición inicial
        updateCarouselPosition();
    })();
    

    // -------- Inicialización General -------- //
    window.onload = () => {
        // Inicializa el banner
        if (banner) loadBannerImage(currentBannerIndex);

        // Asegúrate de que el carrusel inicie correctamente si tiene slides
        if (carouselSlides.length > 0) {
            updateCarouselPosition();
        }
    };
})();



//*   PARTE DE SUSCRIPCIÓN*//
 // Seleccionar el formulario y el mensaje
const form = document.getElementById('newsletter-form');
const successMessage = document.getElementById('success-message');

// Agregar un evento de escucha al formulario
form.addEventListener('submit', function (event) {
    // Prevenir el comportamiento por defecto del formulario
    event.preventDefault();
    
    // Mostrar el mensaje de éxito
    successMessage.style.display = 'block';

    // Ocultar automáticamente el mensaje después de 3 segundos
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000); // Tiempo en milisegundos (3000 ms = 3 segundos)

    // Reiniciar el formulario
    form.reset();
});
