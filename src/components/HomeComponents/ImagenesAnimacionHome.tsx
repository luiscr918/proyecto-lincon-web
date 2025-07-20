import * as Imagenes from "../../const/TxtdeIntroduccionHome"

import "../../styles/imagenesanimacionStyle.css"
const ImagenesAnimacionHome = () => {
  return (
    <div className="m-10">
      <div className="m-1.5">
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-blue-950 md:text-5xl lg:text-6xl">¿Que Ofrecemos?</h2>
      </div>
      <ul className="contenedor">
        <li>
          <img src={Imagenes.img} alt={"Imagen1"} />
          <div className="contenido">
            <span>
              <h2>jajajaja</h2>
              <p>
                <a href="#"><i className="material-icons">arrow_forward</i></a>
              </p>
            </span>
          </div>
        </li>

        <li>
          <img src="#" alt={"Imagen1"} />
          <div className="contenido">
            <span>
              <h2>jajajaja</h2>
              <p>
                <a href="#"><i className="material-icons">arrow_forward</i></a>
              </p>
            </span>
          </div>
        </li>

         <li>
          <img src="#" alt={"Imagen1"} />
          <div className="contenido">
            <span>
              <h2>jajajaja</h2>
              <p>
                <a href="#"><i className="material-icons">arrow_forward</i></a>
              </p>
            </span>
          </div>
        </li>

         <li>
          <img src="#" alt={"Imagen1"} />
          <div className="contenido">
            <span>
              <h2>jajajaja</h2>
              <p>
                <a href="#"><i className="material-icons">arrow_forward</i></a>
              </p>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ImagenesAnimacionHome;
