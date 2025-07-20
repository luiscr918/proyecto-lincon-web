import { useEffect, useState } from "react";
import { ModalInformacion } from "../components/ModalInformacion";
import { FloatingSocialBar } from "../components/FloatingSocialBar";
import IntroduccionComponent from "../components/HomeComponents/IntroduccionComponent";
import ImagenesAnimacionHome from "../components/HomeComponents/ImagenesAnimacionHome";
import BotonFlotante from "../components/BotonFlotanteComponent";
import FooterHomeComponent from "../components/FooterHomeComponent";

export const Home = () => {
  const [visible, setvisible] = useState(false);

  useEffect(() => {
    setvisible(true);
  }, []);

  return (
    <div>
      <ModalInformacion visible={visible} setVisible={setvisible} />
      <FloatingSocialBar modalHome={visible} />
      <IntroduccionComponent />
      <ImagenesAnimacionHome />
      <BotonFlotante />
      <FooterHomeComponent />
    </div>
  );
};
