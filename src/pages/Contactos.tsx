import Portada from "../components/ContactosComponents/PortadaComponents";
import ContactoInfo from "../components/ContactosComponents/ContactoInfoComponents";
import PreguntasContactosComponents from "../components/ContactosComponents/PreguntasContactosComponents";
import Mapa from "../components/ContactosComponents/MapaComponents";
import { useState } from "react";
import { FloatingSocialBar } from "../components/FloatingSocialBar";
import BotonFlotante from "../components/BotonFlotanteComponent";
import FooterHomeComponent from "../components/FooterHomeComponent";
import Navegacion from "../components/Navegacion";

export const Contactos = () => {
  const [showFAQ, setShowFAQ] = useState(false);

  const toggleFAQVisibility = () => {
    setShowFAQ(!showFAQ);
  };

  return (
    <div className="contactos-container">
      <Navegacion/>
      <Portada />
      <section className="contacto-info-mapa">
        <div
          style={{
            background: "#072c56ff",
            borderRadius: "16px",
            padding: "2rem",
            marginTop: "2rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {/* Información de contacto */}
            <div style={{ flex: "1 1 100%", maxWidth: "500px" }}>
              <ContactoInfo />

              {/* Científico con título encima */}
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
                  src="/src/img/cientifico.png"
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

            {/* Mapa */}
            <div style={{ flex: "1 1 100%", maxWidth: "650px" }}>
              <Mapa />
            </div>
          </div>

          {/* Preguntas Frecuentes */}
          {showFAQ && (
            <>
              <PreguntasContactosComponents />
            </>
          )}
        </div>
      </section>
      <FloatingSocialBar />
      <BotonFlotante />
      <FooterHomeComponent />
    </div>
  );
};
