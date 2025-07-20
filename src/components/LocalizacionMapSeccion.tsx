// src/components/LocationMapSection.tsx
import React from 'react';
import { CONTACT_DATA } from '../constants/contactConst';

const LocationMapSection = () => { // Usamos la sintaxis de función de flecha directamente
  const { locationSection } = CONTACT_DATA;

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-4">
          {locationSection.title}
        </h2>
        <p className="text-xl font-medium text-gray-700 text-center mb-12">
          {locationSection.description}
        </p>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
          <iframe
            src={locationSection.mapEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de la institución"
          ></iframe>
        </div>

        <div className="text-center">
          <a
            href={locationSection.mapEmbedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            {locationSection.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationMapSection;