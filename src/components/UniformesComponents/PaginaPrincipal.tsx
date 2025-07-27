import "../../styles/inicioExtracurri.css";
import { useEffect, useState } from "react";
import "../../styles/Uniformes.css";
import paradaImg from "../../assets/imgs/Parada.png";
import educacionImg from "../../assets/imgs/Educaion.png";

const uniformes = [
  {
    titulo: "Uniforme de Parada",
    descripcion:
      "Utilizado en eventos formales y ceremonias, representa el respeto y la identidad de nuestra comunidad educativa.",
    imagen: paradaImg,
    clase: "parada",
  },
  {
    titulo: "Uniforme de Educación Física",
    descripcion:
      "Diseñado para brindar comodidad y libertad de movimiento durante las actividades deportivas.",
    imagen: educacionImg,
    clase: "educacion",
  },
];

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
          "https://i.postimg.cc/ncNmhGsf/imagen-2025-07-27-114608039.png",
          "https://i.postimg.cc/k4ZJvfPn/imagen-2025-07-27-114715112.png",
          "https://i.postimg.cc/Y9XGK6cV/imagen-2025-07-27-114639264.png",
          "https://i.postimg.cc/SNLXmbpC/imagen-2025-07-27-114822538.png",
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
      <section className="bg-white py-12 px-4 md:px-12">
  <h2 className="text-3xl font-bold text-center mb-4 text-cyan-700">
    Galería de Uniformes
  </h2>
  <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
    Observa con detalle los uniformes que representan nuestra identidad educativa. Cada uno está diseñado para reflejar nuestros valores y funcionalidad.
  </p>
        <div className="uniformes-container">
          {uniformes.map((u) => (
            <div className={`uniform-card ${u.clase}`} key={u.titulo}>
              <div className="uniform-imgs">
                <img src={u.imagen} alt={u.titulo} />
              </div>
              <div className="uniform-title">{u.titulo}</div>
              <p>{u.descripcion}</p>
            </div>
          ))}
        </div>
</section>


    </div>
  );
};

export default PaginaPrincipal;

