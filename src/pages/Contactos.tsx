import { useState } from "react";
import Aurora from "../components/ContactosComponents/componentePrueba";
import ContactoInfo from "../components/ContactosComponents/ContactoInfoComponents";
import Mapa from "../components/ContactosComponents/MapaComponents";
import Portada from "../components/ContactosComponents/PortadaComponents";
import PreguntasContactosComponents from "../components/ContactosComponents/PreguntasContactosComponents";
import { FloatingSocialBar } from "../components/FloatingSocialBar";
import FooterHomeComponent from "../components/FooterHomeComponent";
import Navegacion from "../components/Navegacion";
import img1 from "../assets/imgs/cientifico.png";
import { useNavigate } from "react-router-dom";

export const Contactos = () => {
  const [showFAQ, setShowFAQ] = useState(false);
  const navigate = useNavigate();

  const irAContactos2 = () => {
    navigate("/contactos2");
  };

  const toggleFAQVisibility = () => {
    setShowFAQ(!showFAQ);
  };

  return (
    <div
      className="contactos-container"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >




      <div style={{ position: "relative", zIndex: 1 }}>
        <Navegacion />
      

        <Portada />
        <section className="contacto-info-mapa">
          <div>
            <br />
            <br />
            <br />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <div style={{ flex: "1 1 100%", maxWidth: "500px" }}>
                <ContactoInfo />
                  <div style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>

<button
  onClick={irAContactos2}
  style={{
    padding: "0.75rem 1.5rem",
    margin: "1rem",
    fontSize: "1.1rem",
    fontWeight: "bold",
    borderRadius: "10px",
    backgroundColor: "#ff6f61",
    color: "#ffffff",
    border: "2px solid #ffffff",
    cursor: "pointer",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s ease",
    position: "relative", // 👈 importante para zIndex
    zIndex: 99,            // 👈 más alto que el fondo
  }}
>
  Ir a Contactos 2
</button>








</div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "1.5rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "fit-content",
                    transform: "translateX(-15%)",
                  }}
                >
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: "1.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Preguntas Frecuentes
                  </h3>
                  <img
                    src={img1}
                    alt="Imagen Científica"
                    style={{
                      maxWidth: "100px",
                      height: "auto",
                      cursor: "pointer",
                      borderRadius: "8px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                      transition: "transform 0.3s ease",
                      marginBottom: "0.5rem",
                    }}
                    onClick={toggleFAQVisibility}
                  />
                  <div
                    style={{
                      color: "#fff",
                      fontSize: "0.9rem",
                      textAlign: "center",
                    }}
                  >
                    Haz clic en el científico para mostrar/ocultar las preguntas
                    frecuentes.
                  </div>
                </div>
              </div>

              <div style={{ flex: "1 1 100%", maxWidth: "650px" }}>
                <Mapa />
              </div>
            </div>

            {showFAQ && <PreguntasContactosComponents />}
          </div>
        </section>

        <FloatingSocialBar />
        <FooterHomeComponent />
      </div>
    </div>
  );
};