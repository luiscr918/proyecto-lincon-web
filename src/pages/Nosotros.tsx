import BotonFlotante from "../components/BotonFlotanteComponent";
import { FloatingSocialBar } from "../components/FloatingSocialBar";
import FooterHomeComponent from "../components/FooterHomeComponent";
import Navegacion from "../components/Navegacion";
import { Header } from "../components/NosotrosComponents/Header";
import { MisionVision } from "../components/NosotrosComponents/MisionVision";
import { ScrollTransition } from "../components/ScrollAnimacionComponent";
import "../styles/nosotrosStyle.css";
export const Nosotros = () => {
  return (
    <>
      <Navegacion />
      <div className="relative overflow-hidden  mt-28 comenzarNosotros ">
        <Header />
      </div>
      <ScrollTransition>
        <MisionVision />
      </ScrollTransition>
      <FloatingSocialBar />
      <BotonFlotante />
      <ScrollTransition>
        <FooterHomeComponent />
      </ScrollTransition>
    </>
  );
};
