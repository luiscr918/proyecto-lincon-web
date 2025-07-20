import { useEffect, useState } from "react";
import { FloatingSocialBar } from "../components/FloatingSocialBar";
import IntroduccionComponent from "../components/HomeComponents/IntroduccionComponent";
import ImagenesAnimacionHome from "../components/HomeComponents/ImagenesAnimacionHome";
import BotonFlotante from "../components/BotonFlotanteComponent";
import FooterHomeComponent from "../components/FooterHomeComponent";
import { useNavigate } from "react-router-dom";
import Navegacion from "../components/Navegacion";
import { ModalInformacion } from "../components/ModalInformacion";
export const Home = () => {
  const [visible, setvisible] = useState(false);

  useEffect(() => {
    setvisible(true);
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <Navegacion />
      {/*   <ModalInformacion visible={visible} setVisible={setvisible} /> */}
      <FloatingSocialBar modalHome={visible} />
      <IntroduccionComponent />
      <ImagenesAnimacionHome />
      <BotonFlotante />
      <FooterHomeComponent />
    </div>
  );
};
