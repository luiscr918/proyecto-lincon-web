// src/components/ContactInfoSection.tsx
import React from 'react';
import { CONTACT_DATA } from '../constants/contactConst';
import { LordIcon } from '@lordicon/react'; 
const ContactInfoSection = () => { 
  const { infoSection } = CONTACT_DATA;

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 shadow-md rounded-lg mx-auto max-w-4xl -mt-20 relative z-20">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-4">
        {infoSection.title}
      </h2>
      <p className="text-xl font-semibold text-blue-600 uppercase text-center mb-8">
        {infoSection.subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
        {/* Email */}
        <div className="flex items-center justify-center md:justify-start">
          <LordIcon
            src={`https://cdn.lordicon.com/${infoSection.emailIcon.name}.json`} // src basado en el nombre del ícono
            trigger={infoSection.emailIcon.trigger}
            colors={infoSection.emailIcon.colors}
            style={{ width: '32px', height: '32px', marginRight: '12px' }}
          />
          <a href={`mailto:${infoSection.email}`} className="text-gray-700 text-lg hover:underline">
            {infoSection.email}
          </a>
        </div>

        {/* Teléfonos */}
        {infoSection.phones.map((phone, index) => (
          <div key={index} className="flex items-center justify-center md:justify-start">
            <LordIcon
              src={`https://cdn.lordicon.com/${phone.icon.name}.json`} // src basado en el nombre del ícono
              trigger={phone.icon.trigger}
              colors={phone.icon.colors}
              style={{ width: '32px', height: '32px', marginRight: '12px' }}
            />
            <a href={`tel:${phone.number.replace(/\s/g, '')}`} className="text-gray-700 text-lg hover:underline">
              {phone.number}
            </a>
          </div>
        ))}

        {/* Dirección */}
        <div className="flex items-center justify-center md:justify-start md:col-span-full lg:col-span-1">
          <LordIcon
            src={`https://cdn.lordicon.com/${infoSection.addressIcon.name}.json`} // src basado en el nombre del ícono
            trigger={infoSection.addressIcon.trigger}
            colors={infoSection.addressIcon.colors}
            style={{ width: '32px', height: '32px', marginRight: '12px' }}
          />
          <p className="text-gray-700 text-lg">{infoSection.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;