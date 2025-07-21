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
    setvisible(true);
  }, []);
  return (
    <div>
      
      <Navegacion />

      <ModalInformacion visible={visible} setVisible={setvisible} />
      <div className="hide-below-1416">
        <FloatingSocialBar modalHome={visible} />
      </div>

      <ScrollTransition>
      <IntroduccionComponent />
      </ScrollTransition>

       <ScrollTransition>
      <Informacion />
      </ScrollTransition>
      
       <ScrollTransition>
      <ImagenesAnimacionHome />
      </ScrollTransition>

       
      <BotonFlotante />

      <FooterHomeComponent />

    </div>
  );
};
