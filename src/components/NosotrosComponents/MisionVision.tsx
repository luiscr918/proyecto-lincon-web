// src/pages/MisionVision.js
import "../../styles/EstilosDaniel/MisionVision.css";
import Navegacion from "../../components/Navegacion";
import FooterHomeComponent from "../../components/FooterHomeComponent";
import { FloatingSocialBar } from "../../components/FloatingSocialBar";

import img2 from "../../assets/imgs/imagen2.jpg";
import img3 from "../../assets/imgs/imagen3.jpg";
import img4 from "../../assets/imgs/imagen4.jpg";
import img5 from "../../assets/imgs/imagen5.jpg";
import img6 from "../../assets/imgs/imagen6.jpg";
import img7 from "../../assets/imgs/imagen7.jpg";

export const MisionVision = () => (
  <div className="contactos-container">
    <Navegacion />

    <section className="mision-vision-container">
      {/* Fondo con figuras animadas */}
      <ul className="floating-shapes">
        {Array.from({ length: 12 }).map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>

      <h2 className="seccion-titulo">MISIÓN</h2>
      <div className="mision-bloques">
        <Card
          delay="0.2s"
          img={img6}
          titulo="Educación personalizada y desarrollo integral"
          texto="Promovemos el desarrollo integral de cada estudiante en un ambiente de respeto, inclusión y colaboración."
        />
        <Card
          delay="0.4s"
          img={img5}
          titulo="Pensamiento crítico y formación científica"
          texto="Fomentamos el pensamiento crítico y la curiosidad científica como herramientas para transformar el mundo."
        />
        <Card
          delay="0.6s"
          img={img4}
          titulo="Valores y ciudadanía"
          texto="Formamos personas responsables, solidarias y comprometidas con su entorno social a través de valores sólidos."
        />
      </div>

      <h2 className="seccion-titulo">VISIÓN</h2>
      <div className="vision-bloques">
        <Card
          delay="0.2s"
          img={img3}
          titulo="Formación integral"
          texto="Buscamos formar estudiantes íntegros, autónomos y líderes capaces de enfrentar los retos del futuro."
        />
        <Card
          delay="0.4s"
          img={img2}
          titulo="Inclusión y cobertura"
          texto="Garantizamos una educación inclusiva, equitativa y de calidad para todos los niños, niñas y adolescentes."
        />
        <Card
          delay="0.6s"
          img={img7}
          titulo="Perfil del egresado"
          texto="Nuestros egresados destacan por su pensamiento crítico, valores y compromiso social."
        />
      </div>
    </section>
  </div>
);

// ───────── Componentes auxiliares ─────────
const Card = ({ delay, img, titulo, texto }) => (
  <div className="bloque-vertical" style={{ animationDelay: delay }}>
    <h2>{titulo}</h2>
    <img className="bloque-img" src={img} alt={titulo} />
    <p>{texto}</p>
  </div>
);
