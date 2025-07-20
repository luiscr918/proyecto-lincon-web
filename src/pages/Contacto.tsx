// src/pages/Contacto.tsx
import React from 'react';
import ContactBanner from '../components/ContactoBanner';
import ContactInfoSection from '../components/ContactInfoSeccion';
import LocationMapSection from '../components/LocalizacionMapSeccion';

// NO IMPORTAMOS EL FOOTER AQUÍ, ASUMIMOS QUE ES MANEJADO POR EL LAYOUT O App.tsx
// import Footer from '../components/Footer'; 

const Contacto = () => {
  return (
    // Puedes envolver esto en un div que tenga el layout completo (Header, Footer)
    // si tu App.tsx o Layout.tsx no lo hace automáticamente.
    // Ejemplo si tu layout global maneja el Header/Footer:
    // <Layout>
    //   <div className="bg-gray-100 min-h-screen">
    //     <ContactBanner />
    //     <ContactInfoSection />
    //     <LocationMapSection />
    //   </div>
    // </Layout>
    
    // Si tu App.tsx solo renderiza el componente de la ruta, entonces Contacto solo necesita su contenido:
    <div className="bg-gray-100 min-h-screen">
      <ContactBanner />
      <ContactInfoSection />
      <LocationMapSection />
      {/* El footer global de tus compañeros se renderizará aquí o en el nivel superior */}
    </div>
  );
};

export default Contacto;