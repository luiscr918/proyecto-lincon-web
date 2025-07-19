import React from 'react';

interface AcademicLevelCardProps {
  title: string;
  ageOrCourseInfo: string; // Nueva prop
  description: string;
  features: string[];
  imageUrl: string;
  altText: string;
  cardBgClass: string;
  buttonColorClass: string;
}

const AcademicLevelCard = ({
  title,
  ageOrCourseInfo, // Recibimos la nueva prop
  description,
  features,
  imageUrl,
  altText,
  cardBgClass,
  buttonColorClass,
}: AcademicLevelCardProps) => {

  const handleMoreInfoClick = () => {
    alert(`Has solicitado más información sobre: ${title}`);
    // Aquí podrías añadir lógica para navegar a una nueva página,
    // abrir un modal, etc.
  };

  const handleDownloadPDF = () => {
    alert(`Descargando el PDF de Oferta Académica para ${title}...`);
    // En un entorno real, aquí iría la lógica para descargar un PDF específico
    // por ejemplo: window.open(`/pdfs/${title.toLowerCase().replace(/ /g, '_')}.pdf`, '_blank');
  };

  return (
    // La tarjeta ahora ocupa el ancho completo de su columna en el grid.
    // Ajuste de paddings para que se vea más compacto como en el ejemplo.
    <div className={`relative ${cardBgClass} rounded-2xl shadow-xl overflow-hidden flex flex-col h-full`}> {/* h-full para que todas las tarjetas tengan la misma altura en el grid */}
      
      {/* Imagen en la parte superior de la tarjeta */}
      <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-2xl"> {/* rounded-t-2xl para que solo la parte superior sea redondeada */}
        <img src={imageUrl} alt={altText} className="object-cover w-full h-full" />
      </div>

      {/* Contenido de texto - todo en blanco, con padding en el cuerpo */}
      <div className="flex flex-col items-center text-white p-4 sm:p-6 flex-grow"> {/* flex-grow para que el contenido se estire */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">{title}</h2>
        
        {/* Información de edad/cursos */}
        <p className="text-lg font-bold mb-4 opacity-90">{ageOrCourseInfo}</p> {/* Más visible */}

        <p className="text-base sm:text-lg font-light mb-5 leading-relaxed text-center">{description}</p>
        
        <ul className="text-base text-left w-full space-y-2 mb-6 px-2"> {/* Espacio al final ajustado */}
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {/* SVG de checkmark en blanco */}
              <svg className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contenedor de los botones - se asegura que estén abajo */}
      <div className="p-4 sm:p-6 pt-0 flex flex-col gap-3 w-full">
        {/* Botón de Más Información (anterior) */}
        <button
          onClick={handleMoreInfoClick}
          className={`w-full ${buttonColorClass} font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50`}
        >
          Más Información
        </button>

        {/* Nuevo botón "Oferta Académica PDF" */}
        <button
          onClick={handleDownloadPDF}
          className={`w-full bg-white text-${cardBgClass.split('-')[1]}-${cardBgClass.split('-')[2]} hover:bg-gray-200 font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 flex items-center justify-center`}
        >
          {/* Ícono de PDF, puedes reemplazarlo con un SVG si lo tienes */}
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0113 3.414L16.586 7A2 2 0 0118 8.414V16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V8.414A1 1 0 0015.414 7L12 3.586A1 1 0 0011.586 3H6zm5 6a1 1 0 10-2 0v3a1 1 0 102 0V9z" clipRule="evenodd"></path></svg>
          Oferta Académica PDF
        </button>
      </div>
    </div>
  );
};

export default AcademicLevelCard;