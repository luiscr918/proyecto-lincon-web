import QuienesSomosBanner from '../assets/nosotros/postive-caring-relationships-teachers 1.png'; 

import {
  Nosotros_TEXT, 
  MISSION_VISION_DATOS,
} from '../constants/NosotrosConst';

const Nosotros = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Sección 1: Banner */}
      <div className="relative overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center text-white">
        <img
          src={QuienesSomosBanner}
          alt="Banner Quiénes Somos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight">
            {Nosotros_TEXT.mainTitle}
          </h1>
          <p className="text-xl sm:text-2xl font-semibold mb-2 max-w-3xl mx-auto">
            {Nosotros_TEXT.subtitle}
          </p>
          <p className="text-3xl sm:text-4xl font-bold mb-4 max-w-3xl mx-auto">
            {Nosotros_TEXT.name}
          </p>
          <p className="text-2xl sm:text-3xl font-medium max-w-3xl mx-auto">
            {Nosotros_TEXT.description}
          </p>
        </div>
      </div>

      {/* Sección 2: Misión  */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-blue-700 mb-6 text-center">
          {MISSION_VISION_DATOS.mission.title}
        </h2>
        <div className="h-1.5 w-24 bg-blue-700 mx-auto mb-16"></div> 

        <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-xl"> 
          {MISSION_VISION_DATOS.mission.sections.map((section, index) => (
            <div key={index} className="mb-8 last:mb-0"> 
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{section.subtitle}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sección 3: Visión   */}
      <div className="py-16 px-4 sm:px-6 lg:px-8"> 
        <h2 className="text-5xl font-extrabold text-blue-700 mb-6 text-center">
          {MISSION_VISION_DATOS.vision.title}
        </h2>
        <div className="h-1.5 w-24 bg-blue-700 mx-auto mb-16"></div> 

        <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-xl"> 
          {MISSION_VISION_DATOS.vision.sections.map((section, index) => (
            <div key={index} className="mb-8 last:mb-0"> 
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{section.subtitle}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Nosotros;