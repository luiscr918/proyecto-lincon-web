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
          "https://images.pexels.com/photos/7396522/pexels-photo-7396522.jpeg?_gl=1*12wfsdi*_ga*MTc2OTIxNzQuMTc1MzQxMDMxMA..*_ga_8JE65Q40S6*czE3NTM0MTAzMDkkbzEkZzEkdDE3NTM0MTAzNjYkajMkbDAkaDA.",
          "https://images.pexels.com/photos/10643693/pexels-photo-10643693.jpeg?_gl=1*58n8m3*_ga*MTc2OTIxNzQuMTc1MzQxMDMxMA..*_ga_8JE65Q40S6*czE3NTM0MTAzMDkkbzEkZzEkdDE3NTM0MTA0MjEkajU2JGwwJGgw",
          "https://images.pexels.com/photos/8466017/pexels-photo-8466017.jpeg?_gl=1*531us9*_ga*MTc2OTIxNzQuMTc1MzQxMDMxMA..*_ga_8JE65Q40S6*czE3NTM0MTAzMDkkbzEkZzEkdDE3NTM0MTA0NjAkajE3JGwwJGgw",
          "https://images.pexels.com/photos/2968077/pexels-photo-2968077.jpeg?_gl=1*1ti0b1x*_ga*MTc2OTIxNzQuMTc1MzQxMDMxMA..*_ga_8JE65Q40S6*czE3NTM0MTAzMDkkbzEkZzEkdDE3NTM0MTA0OTIkajU4JGwwJGgw",
          "https://images.pexels.com/photos/8034586/pexels-photo-8034586.jpeg?_gl=1*1psy18n*_ga*MTc2OTIxNzQuMTc1MzQxMDMxMA..*_ga_8JE65Q40S6*czE3NTM0MTAzMDkkbzEkZzEkdDE3NTM0MTA1MTUkajM1JGwwJGgw",
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
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default InicioExtraComponent;
