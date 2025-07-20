const CONTACT_BANNER_IMAGE = '../assets/contacto/img_contacto02.png'; 

const WHATSAPP_URL = 'https://wa.me/593939545376?text=Hola!%20Me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n.';

const Maps_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4732.627452654536!2d-78.55774232503536!3d-0.34686449964972693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5a3065bf2dbe9%3A0x69ac28c78652f29b!2sLincoln%20Larrea%20Benalcazar!5e1!3m2!1ses!2sec!4v1752985040345!5m2!1ses!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'; // URL de ejemplo para Guamani, Quito

export const CONTACT_DATA = {
  banner: {
    image: CONTACT_BANNER_IMAGE,
    title: '¿Cómo podemos ayudarte?',
    subtitle: '¿Tienes preguntas? Estamos listos para ayudarte.',
    whatsappButtonText: 'Haz una pregunta',
    whatsappUrl: WHATSAPP_URL,

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