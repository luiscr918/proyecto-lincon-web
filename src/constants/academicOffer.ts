
interface AcademicLevel {
  id: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string; 
  altText: string;
}

export const ACADEMIC_OFFER_DATA: AcademicLevel[] = [
  {
    id: 'inicial',
    title: 'Educación Inicial',
    description: 'Nivel educativo fundamental para el desarrollo integral de los más pequeños, sentando las bases para su futuro aprendizaje.',
    features: [
      'Desarrollo de habilidades motoras finas y gruesas.',
      'Estimulación del lenguaje y comunicación.',
      'Fomento de la socialización y autonomía.',
      'Actividades lúdicas y creativas.',
      'Introducción a conceptos básicos de lectura y escritura.',
      'Ambiente seguro y acogedor.'
    ],
    imageUrl: 'https://via.placeholder.com/600x400?text=Educacion+Inicial', 
    altText: 'Niños jugando en educación inicial'
  },
  {
    id: 'basica',
    title: 'Educación Básica',
    description: 'Etapa esencial que consolida conocimientos fundamentales en diversas áreas, promoviendo el pensamiento crítico y la exploración.',
    features: [
      'Currículo integral y actualizado.',
      'Desarrollo de competencias académicas clave.',
      'Actividades extracurriculares variadas.',
      'Proyectos interdisciplinarios.',
      'Tutorías personalizadas.',
      'Fomento de valores y ciudadanía.'
    ],
    imageUrl: 'https://via.placeholder.com/600x400?text=Educacion+Basica', 
    altText: 'Estudiantes en un aula de educación básica'
  },
  {
    id: 'bachillerato',
    title: 'Bachillerato',
    description: 'Nivel preuniversitario que prepara a los estudiantes con conocimientos avanzados y habilidades para acceder a la educación superior y el mundo laboral.',
    features: [
      'Programas de estudio especializados.',
      'Orientación vocacional y profesional.',
      'Preparación para pruebas de acceso a la universidad.',
      'Participación en proyectos de investigación.',
      'Taller de desarrollo de habilidades blandas.',
      'Intercambios estudiantiles y culturales.'
    ],
    imageUrl: 'https://via.placeholder.com/600x400?text=Bachillerato', 
    altText: 'Jóvenes estudiantes de bachillerato en una biblioteca'
  },
];