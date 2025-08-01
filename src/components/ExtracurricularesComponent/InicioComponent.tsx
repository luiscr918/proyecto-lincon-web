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
    <div className="contenedor-inicio mt-32">
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
        <label htmlFor="slide5" onClick={() => setCurrentSlide(5)}></label>
      </div>

      <div className="slider">
        {[
          "https://i.postimg.cc/D0nRKG00/intercurri1.jpg",
          "https://i.postimg.cc/WbDw13Z1/inter2.jpg",
          "https://i.postimg.cc/YCHRD742/inter3.jpg",
          "https://i.postimg.cc/LX1ZMq7c/extra4.jpg",
          "https://i.postimg.cc/rFmM06ym/extra5.jpg",
        ].map((imgUrl, index) => (
          <div
            key={index}
            className="slide"
            style={
              {
                "--img": `url("${imgUrl}")`,
              } as React.CSSProperties
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default InicioExtraComponent;
