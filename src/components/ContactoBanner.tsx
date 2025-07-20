import React from 'react';
import { CONTACT_DATA } from '../constants/contactConst';
import { Player } from '@lordicon/react'; 

const ContactBanner = () => { 
  const { banner } = CONTACT_DATA;

  return (
    <div className="relative overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center text-white">
      <img
        src={banner.image}
        alt="Banner de Contacto"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="absolute top-8 left-8 text-xl sm:text-2xl font-semibold text-white uppercase tracking-wider">
          CONTACTO
        </p>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
          {banner.title}
        </h1>
        <p className="text-xl sm:text-2xl font-medium mb-8 max-w-2xl mx-auto">
          {banner.subtitle}
        </p>
        <a
          href={banner.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          {/* Icono de WhatsApp con Player */}
          <Player
            src={`https://cdn.lordicon.com/pkmgqzbi.json`} // Reemplaza con el src exacto del icono de WhatsApp de Lordicon si es diferente
            trigger={banner.whatsappIcon.trigger}
            colors={banner.whatsappIcon.colors}
            style={{ width: '28px', height: '28px', marginRight: '8px' }} 
          />
          {banner.whatsappButtonText}
        </a>
      </div>
    </div>
  );
};

export default ContactBanner;
