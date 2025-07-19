// Eliminamos la importación de React si no se usan hooks aquí directamente
// import React from 'react';
import AcademicLevelCard from '../components/AcademiOfer';
import { ACADEMIC_OFFER_DATA } from '../constants/academicOffer';

const OfertaAcademica = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner Superior - Sin botón de PDF aquí */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-500 py-16 sm:py-20 lg:py-24 text-white">
        <div className="absolute inset-0 opacity-20 bg-pattern-dots" aria-hidden="true"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
          
          {/* Contenido del Banner */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight">
            Oferta Académica
          </h1>
          <p className="text-xl sm:text-2xl font-light max-w-2xl mx-auto"> {/* Eliminado mb-8 ya que no hay botón aquí */}
            Descubre los niveles educativos que ofrecemos para impulsar el futuro de nuestros estudiantes.
          </p>

          {/* *** Se eliminó el botón "Oferta Académica PDF" de aquí *** */}
        </div>
      </div>

      {/* Contenedor principal de las tarjetas con GRID LAYOUT */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        {/* Usamos grid-cols-1 y md:grid-cols-2 para la distribución 1x1 en móvil y 2x2 en pantallas medianas y grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch"> {/* items-stretch para que todas las tarjetas en la fila tengan la misma altura */}
          {ACADEMIC_OFFER_DATA.map((level) => (
            <AcademicLevelCard
              key={level.id}
              title={level.title}
              ageOrCourseInfo={level.ageOrCourseInfo} // Pasamos la nueva prop
              description={level.description}
              features={level.features}
              imageUrl={level.imageUrl}
              altText={level.altText}
              cardBgClass={level.cardBgClass}
              buttonColorClass={level.buttonColorClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfertaAcademica;