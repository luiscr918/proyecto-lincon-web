// src/const/academicOffer.ts
import BachilleratoImage from "../assets/imgs/BachilleratoTecnicoInformatica.png";
interface AcademicLevel {
  id: string;
  title: string;
  ageOrCourseInfo: string;
  description: string;
  features: string[];
  imageUrl: string;
  altText: string;
  cardBgClass: string;
  buttonColorClass: string;
}

export const Academia_Oferta_DATA: AcademicLevel[] = [
  {
    id: "inicial",
    title: "Educación Inicial",
    ageOrCourseInfo: "Desde 3 años",
    description:
      "En el centro educativo Lincold Larrea Benalcazar, brindamos una educación inicial sólida y divertida para los más pequeños, sentando las bases de su futuro académico.",
    features: [
      "Desarrollo de habilidades motoras y cognitivas.",
      "Estimulación del lenguaje y la creatividad.",
      "Fomento de la socialización y autonomía.",
    ],
    imageUrl: "https://i.postimg.cc/15PqVrfX/uniformes3.jpg",
    altText: "Niños jugando en educación inicial",
    cardBgClass: "bg-white",
    buttonColorClass: "text-blue-900 hover:bg-blue-50",
  },
  {
    id: "basica",
    title: "Educación Básica",
    ageOrCourseInfo: "1ro a 7mo de EGB",
    description:
      "Formamos estudiantes con bases sólidas en todas las materias, promoviendo el pensamiento crítico, la investigación y la resolución de problemas en un ambiente de aprendizaje activo.",
    features: [
      "Currículo actualizado y multidisciplinario.",
      "Desarrollo de competencias académicas clave.",
      "Proyectos innovadores e interdisciplinarios.",
    ],
    imageUrl: "https://i.postimg.cc/LX11LytY/uniformes2.jpg",
    altText: "Estudiantes en un aula de educación básica",
    cardBgClass: "bg-white",
    buttonColorClass: "text-blue-900 hover:bg-blue-50",
  },
  {
    id: "basica-superior",
    title: "Educación Básica Superior",
    ageOrCourseInfo: "8vo a 10mo de EGB",
    description:
      "En este nivel, fortalecemos las habilidades académicas y personales, preparando a los estudiantes para los desafíos del bachillerato. Enfocamos en el razonamiento lógico, el análisis crítico y la toma de decisiones.",
    features: [
      "Profundización en áreas de conocimiento.",
      "Desarrollo de pensamiento lógico y analítico.",
      "Orientación vocacional temprana.",
    ],
    imageUrl: "https://i.postimg.cc/BQdBzK6G/uniformes1.jpg",
    altText: "Jóvenes estudiantes en educación básica superior",
    cardBgClass: "bg-white",
    buttonColorClass: "text-blue-900 hover:bg-blue-50",
  },
  {
    id: "bachillerato",
    title: "Bachillerato Técnico",
    ageOrCourseInfo: "1ro a 3ro de Bachillerato",
    description:
      "Nuestro Bachillerato Técnico ofrece una formación integral y especializada, preparando a los estudiantes para la educación superior y el mercado laboral. Enfocados en competencias técnicas y profesionales.",
    features: [
      "Programas de estudio especializados.",
      "Preparación para la universidad y el mundo laboral.",
      "Desarrollo de habilidades blandas y de investigación.",
    ],
    imageUrl: BachilleratoImage,
    altText: "Jóvenes estudiantes de bachillerato técnico",
    cardBgClass: "bg-white",
    buttonColorClass: "text-blue-900 hover:bg-blue-50",
  },
];
