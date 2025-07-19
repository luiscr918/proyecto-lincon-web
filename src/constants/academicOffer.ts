import InicialImage from '../assets/imgsOA/EducacionInicial.png';
import BasicaImage from '../assets/imgsOA/EducacionBasica.png';
import BachilleratoImage from '../assets/imgsOA/BachilleratoTecnicoInformatica.png';
import BasicaSuperiorImage from '../assets/imgsOA/EducacionBasicaSuperior.png';

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

export const ACADEMIC_OFFER_DATA: AcademicLevel[] = [
  {
    id: 'inicial',
    title: 'Educación Inicial',
    ageOrCourseInfo: 'Desde 3 años', 
    description: 'En el centro educativo Lincold Larrea Benalcazar, brindamos una educación inicial sólida y divertida para los más pequeños, sentando las bases de su futuro académico.', // Texto exacto
    features: [
      'Desarrollo de habilidades motoras y cognitivas.',
      'Estimulación del lenguaje y la creatividad.',
      'Fomento de la socialización y autonomía.',
    ],
    imageUrl: InicialImage,
    altText: 'Niños jugando en educación inicial',
    cardBgClass: 'bg-cyan-600',
    buttonColorClass: 'bg-white text-cyan-600 hover:bg-cyan-50'
  },
  {
    id: 'basica',
    title: 'Educación Básica',
    ageOrCourseInfo: 'Abarca 1ro a 7mo de EGB', // Texto exacto
    description: 'Formamos estudiantes con bases sólidas en todas las materias, promoviendo el pensamiento crítico, la investigación y la resolución de problemas en un ambiente de aprendizaje activo.', // Texto exacto
    features: [
      'Currículo actualizado y multidisciplinario.',
      'Desarrollo de competencias académicas clave.',
      'Proyectos innovadores e interdisciplinarios.',
    ],
    imageUrl: BasicaImage,
    altText: 'Estudiantes en un aula de educación básica',
    cardBgClass: 'bg-orange-500',
    buttonColorClass: 'bg-white text-orange-500 hover:bg-orange-50'
  },
  {
    id: 'basica-superior',
    title: 'Educación Básica Superior',
    ageOrCourseInfo: 'Abarca 8vo a 10mo de EGB', // Texto exacto
    description: 'En este nivel, fortalecemos las habilidades académicas y personales, preparando a los estudiantes para los desafíos del bachillerato. Enfocamos en el razonamiento lógico, el análisis crítico y la toma de decisiones.', // Texto exacto
    features: [
      'Profundización en áreas de conocimiento.',
      'Desarrollo de pensamiento lógico y analítico.',
      'Orientación vocacional temprana.',
    ],
    imageUrl: BasicaSuperiorImage,
    altText: 'Jóvenes estudiantes en educación básica superior',
    cardBgClass: 'bg-purple-600',
    buttonColorClass: 'bg-white text-purple-600 hover:bg-purple-50'
  },
  {
    id: 'bachillerato',
    title: 'Bachillerato Técnico',
    ageOrCourseInfo: 'Abarca 1ro a 3ro de Bachillerato', // Texto exacto
    description: 'Nuestro Bachillerato Técnico ofrece una formación integral y especializada, preparando a los estudiantes para la educación superior y el mercado laboral. Enfocados en competencias técnicas y profesionales.', // Texto exacto
    features: [
      'Programas de estudio especializados.',
      'Preparación para la universidad y el mundo laboral.',
      'Desarrollo de habilidades blandas y de investigación.',
    ],
    imageUrl: BachilleratoImage,
    altText: 'Jóvenes estudiantes de bachillerato técnico',
    cardBgClass: 'bg-blue-600',
    buttonColorClass: 'bg-white text-blue-600 hover:bg-blue-50'
  },
];