// src/pages/Contacto.tsx
import React from 'react';
import ContactBanner from '../components/ContactoBanner';
import ContactInfoSection from '../components/ContactInfoSeccion';
import LocationMapSection from '../components/LocalizacionMapSeccion';
const Contacto = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <ContactBanner />
      <ContactInfoSection />
      <LocationMapSection />
    </div>
  );
};

export default Contacto;