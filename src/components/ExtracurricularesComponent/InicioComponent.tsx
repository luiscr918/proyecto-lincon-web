import "../../styles/inicioExtracurri.css";
import { useEffect, useState } from "react";

const InicioExtraComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev % 5) + 1); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="contenedor-inicio">
      <input type="radio" id="slide1" name="group" checked={currentSlide === 1} readOnly />
      <input type="radio" id="slide2" name="group" checked={currentSlide === 2} readOnly />
      <input type="radio" id="slide3" name="group" checked={currentSlide === 3} readOnly />
      <input type="radio" id="slide4" name="group" checked={currentSlide === 4} readOnly />
      <input type="radio" id="slide5" name="group" checked={currentSlide === 5} readOnly />

      <div className="dots">
        <label htmlFor="slide1" onClick={() => setCurrentSlide(1)}></label>
        <label htmlFor="slide2" onClick={() => setCurrentSlide(2)}></label>
        <label htmlFor="slide3" onClick={() => setCurrentSlide(3)}></label>
        <label htmlFor="slide4" onClick={() => setCurrentSlide(4)}></label>
        <label htmlFor="slide5" onClick={() => setCurrentSlide(5)}></label>
      </div>

      <div className="slider">
        {[
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAS92gYn8cWwD9JqRAUleYJiHgMO4bjEfFug&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlmWueUsfk-7eDhFEOyKZAUkQVLj2fpWqSw&s",
          "https://media.istockphoto.com/id/636379014/es/foto/manos-la-formaci%C3%B3n-de-una-forma-de-coraz%C3%B3n-con-silueta-al-atardecer.jpg?s=612x612&w=0&k=20&c=R2BE-RgICBnTUjmxB8K9U0wTkNoCKZRi-Jjge8o_OgE=",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGF8FwEQcN76kLjRHfGta7dnHHM0BgeFQ7Wg&s",
          "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9db5/live/48fd9010-c1c1-11ee-9519-97453607d43e.jpg.webp",
        ].map((imgUrl, index) => (
          <div
            key={index}
            className="slide"
            style={
              {
                "--img": `url("${imgUrl}")`,
              } as React.CSSProperties
            }
          >
            <div className="conteent">
              <h2>HOLA {index + 1}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                deserunt assumenda minus id quibusdam error tempora laborum
                corrupti quis, exercitationem, ratione ipsam nihil, beatae
                similique omnis mollitia veritatis aperiam ducimus.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InicioExtraComponent;
