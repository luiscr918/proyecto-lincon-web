import portada from "../../assets/imgs/contactos.jpg";
import BlurText from "../Componentes de prueba/BlurText"; // ajusta la ruta si es necesario

export default function Portada() {
  return (
    <section className="contacto-hero">
      <div className="contacto-hero-contenido">
        <div
          className="overlay"
          style={{
            backgroundImage: `url(${portada})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20px",
            padding: "20rem 1rem",
            color: "#fff",
            position: "relative",
            animation: "fadeIn 1.5s ease-out",
          }}
        >
          {/* Capa oscura */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.5)",
              borderRadius: "16px",
              zIndex: 1,
            }}
          />

          {/* Contenido */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%", // para centrar verticalmente si lo deseas
            }}
          >
            <BlurText
              text="Contáctanos"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl font-bold text-white "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
