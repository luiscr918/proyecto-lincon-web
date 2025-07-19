import React from 'react'; 
import AcademicLevelCard from '../components/AcademiOfer';
import { ACADEMIC_OFFER_DATA } from '../constants/academicOffer';

const OfertaAcademica = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-12 animate-fadeInDown">
          Nuestra Oferta Académica
        </h1>

        <div className="space-y-12">
          {ACADEMIC_OFFER_DATA.map((level, index) => (
            <AcademicLevelCard
              key={level.id}
              title={level.title}
              description={level.description}
              features={level.features}
              imageUrl={level.imageUrl}
              altText={level.altText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfertaAcademica;