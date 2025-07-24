import { motion, type Variants } from "framer-motion";
import AcademicLevelCard from "../components/OfertaAcaComponents/AcademiOfer";
import BotonFlotante from "../components/BotonFlotanteComponent";
import { FloatingSocialBar } from "../components/FloatingSocialBar";
import FooterHomeComponent from "../components/FooterHomeComponent";
import { Academia_Oferta_DATA } from "../const/academicOffer";
import ParticlesComponent from "../components/OfertaAcaComponents/ParticlesComponent";
import Navegacion from "../components/Navegacion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const titleAnimation: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const wordAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const OfertaAcademica = () => {
  const titleText = "Oferta Académica".split(" ");

  return (
    <div className="bg-slate-900">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 to-blue-700 py-24 lg:py-32 text-white">
        <ParticlesComponent />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
          <motion.h1
            variants={titleAnimation}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
          >
            {titleText.map((word, index) => (
              <motion.span
                key={index}
                variants={wordAnimation}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="text-xl sm:text-2xl font-light max-w-2xl mx-auto"
          >
            Descubre los niveles educativos que ofrecemos para impulsar el
            futuro de nuestros estudiantes.
          </motion.p>
        </div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {Academia_Oferta_DATA.map((level) => (
            <AcademicLevelCard
              key={level.id}
              id={level.id} 
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
      </motion.div>

      <FloatingSocialBar />
      <BotonFlotante />
      <FooterHomeComponent />
      <Navegacion />
    </div>
  );
};

export default OfertaAcademica;
