import { useEffect, useState } from "react";
import { FloatingSocialBar } from "../components/FloatingSocialBar";
import IntroduccionComponent from "../components/HomeComponents/IntroduccionComponent";
import ImagenesAnimacionHome from "../components/HomeComponents/ImagenesAnimacionHome";
import BotonFlotante from "../components/BotonFlotanteComponent";
import FooterHomeComponent from "../components/FooterHomeComponent";
import { useNavigate } from "react-router-dom";
import Navegacion from "../components/Navegacion";
export const Home = () => {
  const [visible, setvisible] = useState(false);

  useEffect(() => {
    setvisible(true);
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <Navegacion/>
      {/* <ModalInformacion visible={visible} setVisible={setvisible} /> */}
      <FloatingSocialBar modalHome={visible} />
      <IntroduccionComponent />
      <button onClick={() => navigate("/oferta-academica")}>
        IR A OFERTA ACADEMICA
      </button>
      <br />
      <button onClick={() => navigate("/contactanos")}>
        IR A Contactanos
      </button>
      <br />
      <button onClick={() => navigate("/sobre-nosotros")}>
        IR A Sobre nosotros
      </button>
      <ImagenesAnimacionHome />
      <BotonFlotante />
      <FooterHomeComponent />
    </div>
  );
};
