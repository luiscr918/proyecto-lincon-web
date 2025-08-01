import "../../styles/inicioExtracurri.css";
import { useEffect, useState } from "react";
import "../../styles/Uniformes.css";

const PaginaPrincipal = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev % 5) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="contenedor-inicio">
        <input
          type="radio"
          id="slide1"
          name="group"
          checked={currentSlide === 1}
          readOnly
        />
        <input
          type="radio"
          id="slide2"
          name="group"
          checked={currentSlide === 2}
          readOnly
        />
        <input
          type="radio"
          id="slide3"
          name="group"
          checked={currentSlide === 3}
          readOnly
        />
        <input
          type="radio"
          id="slide4"
          name="group"
          checked={currentSlide === 4}
          readOnly
        />
        <input
          type="radio"
          id="slide5"
          name="group"
          checked={currentSlide === 5}
          readOnly
        />

        <div className="dots">
          <label htmlFor="slide1" onClick={() => setCurrentSlide(1)}></label>
          <label htmlFor="slide2" onClick={() => setCurrentSlide(2)}></label>
          <label htmlFor="slide3" onClick={() => setCurrentSlide(3)}></label>
          <label htmlFor="slide4" onClick={() => setCurrentSlide(4)}></label>
        </div>

        <div className="slider">
          {[
            {
              url: "https://i.postimg.cc/15PqVrfX/uniformes3.jpg",
              text: "Educación Inicial",
            },
            {
              url: "https://i.postimg.cc/LX11LytY/uniformes2.jpg",
              text: "Educación Básica",
            },
            {
              url: "https://i.postimg.cc/BQdBzK6G/uniformes1.jpg",
              text: "Educación Básica Superior",
            },
            {
              url: "https://i.postimg.cc/9QFHwNLw/imagen-2025-07-27-140913085.png",
              text: "Bachillerato Técnico",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="slide relative rounded-lg overflow-hidden"
              style={
                {
                  "--img": `url("${item.url}")`,
                } as React.CSSProperties
              }
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.url})` }}
              ></div>
              <div className="absolute inset-0 "></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold bg-transparent px-4 py-2 rounded-md shadow-md text-center">
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaginaPrincipal;
