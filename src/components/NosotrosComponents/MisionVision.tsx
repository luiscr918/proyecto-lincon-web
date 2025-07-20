import "../../styles/EstilosDaniel/MisionVision.css";

export const MisionVision = () => {
  return (
    <div className="mision-vision-container">
      <h2 className="seccion-titulo">MISIÓN</h2>

      <div className="mision-bloques">
        <div className="bloque-vertical bg-rosa">
          <h2>Educación personalizada y desarrollo integral</h2>
          <img
            className="bloque-img"
            src="../../assets/imgs/imagen1.jpg"
            alt="Educación integral"
          />
          <p>
            La escuela promueve el desarrollo integral de todos los estudiantes,
            potenciando sus capacidades en un ambiente de respeto, inclusión y
            colaboración.
          </p>
        </div>

        <div className="bloque-vertical bg-verde">
          <h2>Pensamiento crítico y formación científica</h2>
          <img
            className="bloque-img"
            src="/src/imgs/imagen1.jpg"
            alt="Pensamiento científico"
          />
          <p>
            Fomentamos el pensamiento crítico y la curiosidad científica como
            herramientas para enfrentar los desafíos del mundo actual.
          </p>
        </div>

        <div className="bloque-vertical bg-celeste">
          <h2>Valores y ciudadanía</h2>
          <img
            className="bloque-img"
            src="/src/imgs/imagen1.jpg"
            alt="Valores ciudadanos"
          />
          <p>
            Promovemos la práctica de valores como el respeto, la honestidad y
            la solidaridad para formar ciudadanos responsables y comprometidos
            con su comunidad.
          </p>
        </div>
      </div>

      <h2 className="seccion-titulo">VISIÓN</h2>

      <div className="vision-bloques">
        <div className="bloque-vertical bg-rosado">
          <h2>Formación integral</h2>
          <img
            className="bloque-img"
            src="/src/imgs/imagen1.jpg"
            alt="Formación integral"
          />
          <p>
            Buscamos formar estudiantes íntegros, autónomos y con liderazgo para
            enfrentar con éxito los retos del futuro.
          </p>
        </div>

        <div className="bloque-vertical bg-verde-agua">
          <h2>Inclusión y cobertura</h2>
          <img
            className="bloque-img"
            src="/src/imgs/imagen1.jpg"
            alt="Inclusión y cobertura"
          />
          <p>
            Nuestra visión es brindar educación de calidad, inclusiva y
            equitativa para todos los niños, niñas y adolescentes.
          </p>
        </div>

        <div className="bloque-vertical bg-naranja">
          <h2>Perfil del egresado</h2>
          <img
            className="bloque-img"
            src="/src/imgs/imagen1.jpg"
            alt="Perfil del egresado"
          />
          <p>
            Formamos egresados con pensamiento crítico, valores sólidos y
            compromiso con su entorno social.
          </p>
        </div>
      </div>
    </div>
  );
};
