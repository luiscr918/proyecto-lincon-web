import imagenCarrusel2 from "../assets/imgs/imagenCarrusel2.jpg";
export interface InfoItem {
  TituloDeIntroduccion: string;
  PlacaDeIntroduccion: string;
  TextoDeIntroduccion: string;
  Imagen: string;
}

export const Informacion: InfoItem[] = [
  {
    TituloDeIntroduccion: "Nuestra Historia",
    PlacaDeIntroduccion: "Desde 1995",
    TextoDeIntroduccion:
      "La Unidad Educativa Lincoln Larrea Benalcázar fue fundada en junio de 1995 en Guamaní. Nació como respuesta a la necesidad de educación de calidad con enfoque personalizado, iniciando como un jardín de infantes con 27 niños.",
    Imagen:
      "https://edulincolnlarrea.wordpress.com/wp-content/uploads/2014/06/dsc00975.jpg",
  },
  {
    TituloDeIntroduccion: "Educación con Valores",
    PlacaDeIntroduccion: "Formación integral",
    TextoDeIntroduccion:
      "Nuestra institución forma estudiantes con principios como respeto, responsabilidad, honestidad y solidaridad, promoviendo la sana convivencia, el liderazgo y el amor por la patria.",
    Imagen: imagenCarrusel2,
  },
  {
    TituloDeIntroduccion: "Compromiso con la Comunidad",
    PlacaDeIntroduccion: "Educación participativa",
    TextoDeIntroduccion:
      "Padres de familia, docentes y estudiantes construyen juntos el camino educativo, promoviendo espacios de diálogo, escuela para padres y proyectos colaborativos.",
    Imagen:
      "https://fundacionmeridional.org/wp-content/uploads/2021/10/Escuela-padres-y-madres.jpg",
  },
  {
    TituloDeIntroduccion: "Formación Docente",
    PlacaDeIntroduccion: "Profesionalismo y vocación",
    TextoDeIntroduccion:
      "Nuestro equipo docente se capacita continuamente en pedagogía, tecnología y liderazgo educativo, garantizando una enseñanza actualizada y comprometida con la excelencia.",
    Imagen:
      "https://cdn.prod.website-files.com/6500724c9ffe6d99bc72ad48/6500724c9ffe6d99bc72ae59_70447-scaled.jpeg",
  },
];

// Imagenes para ImagenesAnimacionHome
export const ofertaAc1 =
  "https://www.inclusion.gob.ec/wp-content/uploads/2023/02/photo_5145740256971173793_y-4.jpg";
export const ofertaAc2 = "https://admisionuniandes.edu.ec/wp-content/uploads/2020/07/Educacio%CC%81n-Ba%CC%81sica-1024x1024_comp.webp";
export const ofertaAc3 = "https://www.muyinteresante.com/wp-content/uploads/sites/5/2023/09/11/64fedc5934d0f.jpeg";
export const ofertaAc4 = "https://www.shutterstock.com/image-photo/photo-sweet-pretty-teen-girl-600nw-2501870029.jpg";
