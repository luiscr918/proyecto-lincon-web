import { useEffect, useState } from "react";
import { FloatingSocialBar } from "../components/FloatingSocialBar";
import IntroduccionComponent from "../components/HomeComponents/IntroduccionComponent";
import ImagenesAnimacionHome from "../components/HomeComponents/ImagenesAnimacionHome";
import BotonFlotante from "../components/BotonFlotanteComponent";
import FooterHomeComponent from "../components/FooterHomeComponent";
import Navegacion from "../components/Navegacion";
import { ModalInformacion } from "../components/ModalInformacion";
import { Informacion } from "../components/HomeComponents/Informacion";
import { ScrollTransition } from "../components/ScrollAnimacionComponent";
export const Home = () => {
  const [visible, setvisible] = useState(false);

  useEffect(() => {
    const yaMostrado = sessionStorage.getItem("modalMostrado");

    if (!yaMostrado) {
      setvisible(true);
      sessionStorage.setItem("modalMostrado", "true");
    }
  }, []);
  return (
    <>
      <Navegacion />

      <ModalInformacion visible={visible} setVisible={setvisible} />

      <ScrollTransition>
        <div className="relative overflow-hidden  mt-28 ">
          <IntroduccionComponent />
        </div>
      </ScrollTransition>

      <ScrollTransition>
        <Informacion />
      </ScrollTransition>
      <ImagenesAnimacionHome />
      <BotonFlotante />
      <div className="hide-below-1416">
        <FloatingSocialBar modalHome={visible} />
      </div>
      <FooterHomeComponent />
    </>
  );
};
