import * as Imagenes from "../../const/TxtdeIntroduccionHome";

import "../../styles/imagenesanimacionStyle.css";
const ImagenesAnimacionHome = () => {
  return (
    <div className="m-10">
      <div className="m-1.5">
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-blue-950 md:text-5xl lg:text-6xl">
          ¿Qué Ofrecemos?
        </h2>
      </div>
      <ul className="contenedor">
        <li>
          <img src={Imagenes.ofertaAc1} alt={"Imagen1"} />
          <div className="contenido">
            <span>
              <h2>Educación Inicial</h2>
              <p>
                <a href="#">
                  <i className="material-icons">arrow_forward</i>
                </a>
              </p>
            </span>
          </div>
        </li>

        <li>
          <img src={Imagenes.ofertaAc2} alt={"Imagen1"} />
          <div className="contenido">
            <span>
              <h2>Educación Básica</h2>
              <p>
                <a href="#">
                  <i className="material-icons">arrow_forward</i>
                </a>
              </p>
            </span>
          </div>
        </li>

        <li>
          <img src={Imagenes.ofertaAc3} alt={"Imagen1"} />
          <div className="contenido">
            <span>
              <h2>Educación Básica Superior</h2>
              <p>
                <a href="#">
                  <i className="material-icons">arrow_forward</i>
                </a>
              </p>
            </span>
          </div>
        </li>

        <li>
          <img src={Imagenes.ofertaAc4} alt={"Imagen1"} />
          <div className="contenido">
            <span>
              <h2>Bachillerato Técnico en Informática</h2>
              <p>
                <a href="#">
                  <i className="material-icons">arrow_forward</i>
                </a>
              </p>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ImagenesAnimacionHome;
