import "../../styles/inicioExtracurri.css";
import { ModalInformacion } from "../ModalInformacion";

const InicioExtraComponent = () => {
  return (
    <div className="contenedor-inicio">
      <input type="radio" id="slide1" name="group" defaultChecked />
      <input type="radio" id="slide2" name="group" />
      <input type="radio" id="slide3" name="group" />
      <input type="radio" id="slide4" name="group" />
      <input type="radio" id="slide5" name="group" />

      <div className="dots">
        <label htmlFor="slide1"></label>
        <label htmlFor="slide2"></label>
        <label htmlFor="slide3"></label>
        <label htmlFor="slide4"></label>
        <label htmlFor="slide5"></label>
      </div>

      <div className="slider">
        <div
          className="slide"
          style={
            {
              "--img": 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAS92gYn8cWwD9JqRAUleYJiHgMO4bjEfFug&s")',
            } as React.CSSProperties
          }
        >
          <div className="conteent">
            <h2>HOLA 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              deserunt assumenda minus id quibusdam error tempora laborum
              corrupti quis, exercitationem, ratione ipsam nihil, beatae
              similique omnis mollitia veritatis aperiam ducimus.
            </p>
          </div>
        </div>

        <div
          className="slide"
          style={
            {
              "--img": 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlmWueUsfk-7eDhFEOyKZAUkQVLj2fpWqSw&s")',
            } as React.CSSProperties
          }
        >
          <div className="conteent">
            <h2>HOLA 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              deserunt assumenda minus id quibusdam error tempora laborum
              corrupti quis, exercitationem, ratione ipsam nihil, beatae
              similique omnis mollitia veritatis aperiam ducimus.
            </p>
          </div>
        </div>

        <div
          className="slide"
          style={
            {
              "--img": 'url("https://media.istockphoto.com/id/636379014/es/foto/manos-la-formaci%C3%B3n-de-una-forma-de-coraz%C3%B3n-con-silueta-al-atardecer.jpg?s=612x612&w=0&k=20&c=R2BE-RgICBnTUjmxB8K9U0wTkNoCKZRi-Jjge8o_OgE=")',
            } as React.CSSProperties
          }
        >
          <div className="conteent">
            <h2>HOLA 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              deserunt assumenda minus id quibusdam error tempora laborum
              corrupti quis, exercitationem, ratione ipsam nihil, beatae
              similique omnis mollitia veritatis aperiam ducimus.
            </p>
          </div>
        </div>

        <div
          className="slide"
          style={
            {
              "--img": 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGF8FwEQcN76kLjRHfGta7dnHHM0BgeFQ7Wg&s")',
            } as React.CSSProperties
          }
        >
          <div className="conteent">
            <h2>HOLA 4</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              deserunt assumenda minus id quibusdam error tempora laborum
              corrupti quis, exercitationem, ratione ipsam nihil, beatae
              similique omnis mollitia veritatis aperiam ducimus.
            </p>
          </div>
        </div>

        <div
          className="slide"
          style={
            {
              "--img": 'url("https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9db5/live/48fd9010-c1c1-11ee-9519-97453607d43e.jpg.webp")',
            } as React.CSSProperties
          }
        >
          <div className="conteent">
            <h2>HOLA 5</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              deserunt assumenda minus id quibusdam error tempora laborum
              corrupti quis, exercitationem, ratione ipsam nihil, beatae
              similique omnis mollitia veritatis aperiam ducimus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioExtraComponent;
