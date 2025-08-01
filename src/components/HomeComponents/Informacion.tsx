import "../../styles/informacion.css";

export const Informacion = () => {
  return (
    <>
      <div className="m-10">
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          ¿Por qué Estudiar Con Nosotros?
        </h2>
      </div>
      <div className="contene-card">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="https://i.postimg.cc/y8sm7d6t/corazonestudiante.jpg" alt="" />
            </div>
            <div className="card-back1 flex-col">
              <h1 className="mb-4 text-xl font-extrabold tracking-tight  text-white mt-5 text-center">
                🌱 Educación Personalizada e Inclusiva
              </h1>
              <p className="text-sm text-center">
                En nuestra institución, cada estudiante es único. Brindamos una
                educación personalizada, inclusiva y de calidad, que potencia
                las habilidades de niñas, niños y adolescentes con calidez y
                respeto, promoviendo el pensamiento crítico y los valores
                ciudadanos.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="https://i.postimg.cc/pLcHPmYL/paseoescuela.jpg" alt="" />
            </div>
            <div className="card-back2 flex-col">
              <h1 className="mb-4 text-xl font-extrabold tracking-tight  text-white mt-5 text-center">
                🌎 Compromiso con el Futuro
              </h1>
              <p className="text-sm text-center">
                Nos proyectamos hacia el futuro con una visión integral:
                ciencia, tecnología, cultura y sostenibilidad. Promovemos el uso
                ético del conocimiento y el cuidado del medio ambiente,
                preparando ciudadanos auténticos, críticos y comprometidos con
                su comunidad y el mundo.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="https://i.postimg.cc/XvZKZ5w1/profesora.jpg" alt="" />
            </div>

            <div className="card-back3 flex-col">
              <h1 className="mb-4 text-xl font-extrabold tracking-tight  text-white mt-5 text-center">
                🧠 Excelencia Académica y Docente
              </h1>
              <p className="text-sm text-center">
                Contamos con un equipo docente comprometido con la mejora
                continua, capacitado constantemente para aplicar métodos
                modernos y efectivos. Nuestro modelo pedagógico integra
                tecnologías y recursos didácticos para lograr aprendizajes
                significativos y de alto nivel.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="https://i.postimg.cc/FzS6XRF1/paseoestudiante.jpg" alt="" />
            </div>
            <div className="card-back4 flex-col">
              <h1 className="mb-4 text-xl font-extrabold tracking-tight  text-white mt-5 text-center">
                🤝 Formación en Valores y Convivencia
              </h1>
              <p className="text-sm text-center">
                Fomentamos una comunidad educativa basada en el respeto, la
                solidaridad, la responsabilidad y el amor por la patria. Creamos
                un ambiente sano donde se prioriza el buen vivir, la sana
                convivencia y el desarrollo del liderazgo estudiantil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
