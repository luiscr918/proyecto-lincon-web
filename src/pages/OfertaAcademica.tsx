import AcademicLevelCard from "../components/AcademiOfer";
import BotonFlotante from "../components/BotonFlotanteComponent";
import { FloatingSocialBar } from "../components/FloatingSocialBar";
import FooterHomeComponent from "../components/FooterHomeComponent";
import { Academia_Oferta_DATA } from "../const/academicOffer";

const OfertaAcademica = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Encabezado de la pagina */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-500 py-16 sm:py-20 lg:py-24 text-white">
        <div
          className="absolute inset-0 opacity-20 bg-pattern-dots"
          aria-hidden="true"
        ></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight">
            Oferta Académica
          </h1>
          <p className="text-xl sm:text-2xl font-light max-w-2xl mx-auto">
            Descubre los niveles educativos que ofrecemos para impulsar el
            futuro de nuestros estudiantes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {Academia_Oferta_DATA.map((level) => (
            <AcademicLevelCard
              key={level.id}
              title={level.title}
              ageOrCourseInfo={level.ageOrCourseInfo}
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
      <FloatingSocialBar />
      <BotonFlotante />
      <FooterHomeComponent />
    </div>
  );
};

export default OfertaAcademica;
