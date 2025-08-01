import ScrollStack from "../components/Componentes de prueba/ScrollStack";
import DemoScrollStackItems from "../components/Componentes de prueba/GaleriaCards";
import FooterHomeComponent from "../components/FooterHomeComponent";
import Navegacion from "../components/Navegacion";
import Portada from "../components/ContactosComponents/PortadaComponents";
import CustomCursor from "../components/Componentes de prueba/CustomCursor";
import ContactCards from "../components/Componentes de prueba/ContactCards";
import Mapa from "../components/ContactosComponents/MapaComponents";

import BlurText from "../components/Componentes de prueba/BlurText"; // IMPORTA AQUÍ
import BotonFlotante from "../components/BotonFlotanteComponent";

export const Contactos = () => {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        overflowY: "auto",
        backgroundColor: "transparent",
        color: "white",
      }}
    >
      <div style={{ position: "relative", zIndex: 10 }}>
        <CustomCursor />
        <Navegacion />
        <Portada />

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "3rem",
            padding: "3rem 2rem",
            flexWrap: "wrap",
            color: "white",
            minHeight: "25vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
              maxWidth: "600px",
              textAlign: "center",
            }}
          >
            {/* Aquí el título animado con BlurText */}
            <BlurText
              text="ACCESO RÁPIDO"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl font-bold mb-8 text-white"
            />
            <ContactCards />
          </div>
        </section>
        <div className="flex justify-center mt-0">
          <Mapa />
        </div>
        <section
          style={{
            position: "relative",
            zIndex: 10,
            paddingBottom: "4rem",
            textAlign: "center",
          }}
        >
          {/* Título animado Preguntas Frecuentes */}
          <div className="w-full flex justify-center items-center">
            <BlurText
              text="Preguntas Frecuentes"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl font-bold mb-8 text-white"
            />
          </div>

          <ScrollStack>
            <DemoScrollStackItems />
          </ScrollStack>
        </section>
        <BotonFlotante />
        <FooterHomeComponent />
      </div>
    </div>
  );
};
