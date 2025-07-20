// src/constants/contactData.ts

// Asegúrate de que esta ruta sea correcta para tu imagen de banner
const CONTACT_BANNER_IMAGE = '/assets/imgsContacto/contact_banner.jpg'; 

// URL para el botón de WhatsApp (reemplaza con tu número y mensaje)
const WHATSAPP_URL = 'https://wa.me/593939545376?text=Hola!%20Me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n.';

// URL del mapa de Google Maps (¡REEMPLAZA ESTA URL CON LA EMBED DE TU UBICACIÓN EXACTA!)
// Ve a Google Maps, busca tu ubicación, haz clic en "Compartir", luego en "Insertar un mapa" y copia la URL del src del <iframe>
const Maps_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6672323869917!2d-78.5529965259775!3d-0.3477815996614457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58d92a1a1f879%3A0x6a1f8d9f10a1b0c9!2sGuamani%2C%20Quito!5e0!3m2!1ses!2sec!4v1721272710323!5m2!1ses!2sec'; // URL de ejemplo para Guamani, Quito

export const CONTACT_DATA = {
  banner: {
    image: CONTACT_BANNER_IMAGE,
    title: '¿Cómo podemos ayudarte?',
    subtitle: '¿Tienes preguntas? Estamos listos para ayudarte.',
    whatsappButtonText: 'Haz una pregunta',
    whatsappUrl: WHATSAPP_URL,
    // Icono de WhatsApp para Lordicon (ejemplo, busca uno adecuado)
    whatsappIcon: { name: 'whatsapp', trigger: 'hover', colors: 'primary:#ffffff' } // Ejemplo de cómo Lordicon usa nombres/colores
  },
  infoSection: {
    title: 'Contactos',
    subtitle: 'INFORMACIÓN DE CONTACTO',
    email: 'institucion@gmail.com',
    // Nombres de íconos de Lordicon. ¡DEBES BUSCAR LOS NOMBRES EXACTOS EN LA LIBRERÍA!
    // Te daré sugerencias, pero verifica en https://lordicon.com/icons
    emailIcon: { name: 'paper-plane', trigger: 'hover', colors: 'primary:#2563EB' }, // Azul vibrante
    phones: [
      { number: '+593 93 954 5376', icon: { name: 'phone', trigger: 'hover', colors: 'primary:#2563EB' } },
      { number: '+593 99 988 8863', icon: { name: 'phone', trigger: 'hover', colors: 'primary:#2563EB' } },
      { number: '+593 98 714 7390', icon: { name: 'phone', trigger: 'hover', colors: 'primary:#2563EB' } },
    ],
    address: 'Guamani, sector la Victoria calle 4A lote 189',
    addressIcon: { name: 'map-pin', trigger: 'hover', colors: 'primary:#2563EB' },
  },
  locationSection: {
    title: 'Ubícanos Fácilmente',
    description: 'Encuentra nuestra institución en el mapa y visítanos.',
    mapEmbedUrl: Maps_EMBED_URL,
    buttonText: 'IR A UBICACIÓN',
  },
  footer: {
    contact: {
      title: 'Contáctanos',
      email: 'institucion@gmail.com',
      phones: [
        '+593 991854101',
        '-0987147390',
      ],
      address: 'Guamani, sector la Victoria calle 4A lote 189',
      city: 'Quito-Ecuador',
    },
    links: {
      title: 'Enlaces de interés',
      items: [
        'Extracurriculares',
        'Inicio de Clases',
        'Uniformes',
        'Costos',
      ],
    },
    social: {
      title: 'Síguenos en nuestras RS',
      icons: [
        // Busca nombres de íconos de Lordicon para redes sociales
        { name: 'facebook-circle', url: '#', iconProps: { trigger: 'hover', colors: 'primary:#ffffff' } },
        { name: 'instagram-circle', url: '#', iconProps: { trigger: 'hover', colors: 'primary:#ffffff' } },
        { name: 'youtube-circle', url: '#', iconProps: { trigger: 'hover', colors: 'primary:#ffffff' } },
        { name: 'twitter-x-alt', url: '#', iconProps: { trigger: 'hover', colors: 'primary:#ffffff' } }, // Para X (anteriormente Twitter)
      ],
    },
    copyright: 'Todos los derechos reservados 2025 Unidad Educativa Lincoln Larrea Benalcázar',
  },
};