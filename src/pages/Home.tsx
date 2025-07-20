import { useEffect, useState } from "react";
import { FloatingSocialBar } from "../components/FloatingSocialBar";
import IntroduccionComponent from "../components/HomeComponents/IntroduccionComponent";
import ImagenesAnimacionHome from "../components/HomeComponents/ImagenesAnimacionHome";
import BotonFlotante from "../components/BotonFlotanteComponent";
import FooterHomeComponent from "../components/FooterHomeComponent";
import Navegacion from "../components/Navegacion";
import { ModalInformacion } from "../components/ModalInformacion";
import { Informacion } from "../components/HomeComponents/Informacion";
export const Home = () => {
  const [visible, setvisible] = useState(false);

  useEffect(() => {
    setvisible(true);
  }, []);
  return (
    <div>
      <Navegacion />
      {/*   <ModalInformacion visible={visible} setVisible={setvisible} /> */}
      <FloatingSocialBar modalHome={visible} />
      <IntroduccionComponent />
      <Informacion/>
      <ImagenesAnimacionHome />
      <BotonFlotante />
      <FooterHomeComponent />
    </div>
  );
};
