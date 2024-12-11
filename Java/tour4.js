// Seleccionar el botón de menú y el contenedor del menú
const menuToggle = document.getElementById('menu-toggle');
const menuItems = document.getElementById('menu-items');

// Añadir un evento de clic al botón de menú
menuToggle.addEventListener('click', () => {
    // Alternar la clase 'show' en el contenedor del menú
    menuItems.classList.toggle('show');
});

// Cambia de pestañas
function openTab(evt, tabId) {
    // Oculta todas las pestañas
    const panes = document.querySelectorAll(".tab-pane");
    panes.forEach(pane => pane.classList.remove("active"));

    // Desactiva todos los botones
    const links = document.querySelectorAll(".tab-link");
    links.forEach(link => link.classList.remove("active"));

    // Activa la pestaña seleccionada
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Desplazamiento suave
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// Función para calcular el total
function calculateTotal() {
    // Obtener los elementos necesarios
    const quantityInput = document.getElementById('quantity');
    const totalElement = document.getElementById('total');
    const quantityDisplay = document.getElementById('quantityDisplay');

    // Precio por persona
    const pricePerPerson = 80.00;

    // Obtener la cantidad ingresada y validar que sea un número válido
    const quantity = parseInt(quantityInput.value, 10) || 1; // Si no es válido, usar 1 como valor predeterminado

    // Calcular el total
    const total = pricePerPerson * quantity;

    // Actualizar el texto del total y cantidad
    totalElement.textContent = total.toFixed(2); // Asegura que siempre tenga dos decimales
    quantityDisplay.textContent = quantity; // Muestra la cantidad actualizada
}

// Función para manejar el botón "Añadir al carrito"
function addToCart() {
    const totalElement = document.getElementById('total');
    const quantityInput = document.getElementById('quantity');
    
    const total = totalElement.textContent;
    const quantity = quantityInput.value;

    // Mostrar mensaje (puedes personalizar esta lógica)
    alert(`Has añadido ${quantity} personas al carrito. Total: S/ ${total}`);
}

// Conectar eventos
document.getElementById('quantity').addEventListener('change', calculateTotal);
document.getElementById('addToCart').addEventListener('click', addToCart);

// Función para redirigir a WhatsApp
function redirectToWhatsApp() {
    const quantity = document.getElementById('quantity').value || 1;
    const total = document.getElementById('total').textContent;

    const phoneNumber = "+51900693140";
    const message = `Hola, quiero realizar una reserva para ${quantity} persona(s) con un total de S/ ${total}.`;

    // Generar el enlace de WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Redirigir al enlace
    window.open(whatsappLink, "_blank");
}

// Conectar eventos
document.getElementById('quantity').addEventListener('change', calculateTotal);
document.getElementById('whatsappButton').addEventListener('click', redirectToWhatsApp);


// Función para manejar el botón "Añadir al carrito"
function addToCart() {
    const overlay = document.getElementById('overlay');

    // Mostrar el overlay y animación
    overlay.style.display = 'flex';

    // Ocultar la animación después de 2.5 segundos
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 2500);
}

// Conectar el evento al botón
document.getElementById('addToCart').addEventListener('click', addToCart);
