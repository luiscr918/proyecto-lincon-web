import { useState, useEffect } from "react";
import { Informacion } from "../../const/TxtdeIntroduccionHome";
import "../../styles/introduccionHome.css";

const IntroduccionComponent = () => {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (index + 1) % Informacion.length;
      setNextIndex(newIndex);

      setTimeout(() => {
        setIndex(newIndex);
        setNextIndex(null);

        setTimeout(() => {
          setIndex(newIndex);
          setNextIndex(null);
          setFade(false);
        }, 500);

        setFade(true);
        setTimeout(() => setFade(false), 500);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const info = Informacion[index];

  return (
    <div className="body">
      <div
        className="bg-layer layer-1"
        style={{ backgroundImage: `url(${info.Imagen})` }}
      />
      {nextIndex !== null && (
        <div
          className="bg-layer layer-2"
          style={{ backgroundImage: `url(${Informacion[nextIndex].Imagen})` }}
        />
      )}

      <div className="content ">
        <div className="carousel-right">
          {Informacion.map((item, i) => (
            <div
              key={i}
              className={`thumbnail thumbnail-${i} ${
                i === index ? "active" : ""
              }`}
            >
              <img src={item.Imagen} alt={`img-${i}`} />
            </div>
          ))}
        </div>

        <div className={`info-box ${fade ? "fade-in" : ""}`}>
          <h5 className="titulo">{info.TituloDeIntroduccion}</h5>
          <h1 className="place">{info.PlacaDeIntroduccion}</h1>
          <p className="texto">{info.TextoDeIntroduccion}</p>
        </div>

        <div className="bottom-bar">
          <div className="line" />
          <div className="counter">{String(index + 1).padStart(2, "0")}</div>
        </div>
      </div>
    </div>
  );
};

export default IntroduccionComponent;
