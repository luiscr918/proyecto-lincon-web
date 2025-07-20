import * as Imagenes from "../../const/TxtdeIntroduccionHome"

import "../../styles/imagenesanimacionStyle.css"
const ImagenesAnimacionHome = () => {
  return (
    <>
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
    </>
  );
};

export default ImagenesAnimacionHome;
