// src/components/Header.js
import { useEffect } from "react";
import "../../styles/EstilosDaniel/QuienesSomos.css";
import imagen1 from "../../assets/imgs/imagen1.jpg";

export const Header = () => {
  // Parallax sutil al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const bg = document.querySelector(".img-fondo");
      if (bg) {
        const y = window.pageYOffset * 0.25;
        bg.style.transform = `scale(1.15) translateY(${y}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="quienes-container">
      <img src={imagen1} alt="Portada" className="img-fondo" />

      {/* Círculos flotando de fondo */}
      <ul className="circles">
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>

      <div className="overlay">
        <h1 className="titulo2">¿Quiénes somos?</h1>
        <h3 className="subtitulo">
          UNIDAD EDUCATIVA PARTICULAR
          <br />
          "LINCON&nbsp;LARREA&nbsp;BENALCÁZAR"
        </h3>
        <p className="descripcion">
          EDUCACIÓN PERSONALIZADA
          <br />
          Y&nbsp;DE&nbsp;ALTA&nbsp;CALIDAD
        </p>
      </div>
    </div>
  );
};
