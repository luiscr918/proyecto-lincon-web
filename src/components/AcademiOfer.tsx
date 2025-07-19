import React from 'react';

interface AcademicLevelCardProps {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  altText: string;
}

const AcademicLevelCard = ({
  title,
  description,
  features,
  imageUrl,
  altText,
}: AcademicLevelCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row items-center p-6 space-y-4 md:space-y-0 md:space-x-6 mb-8">
      {/* Columna de Contenido */}
      <div className="md:w-2/3 flex flex-col justify-center text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-left mx-auto md:mx-0">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Columna de Imagen */}
      <div className="md:w-1/3 flex justify-center items-center">
        <img src={imageUrl} alt={altText} className="rounded-lg object-cover w-full h-48 md:h-full max-h-60" />
      </div>
    </div>
  );
};

export default AcademicLevelCard;