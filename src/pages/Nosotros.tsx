import BotonFlotante from "../components/BotonFlotanteComponent";
import { FloatingSocialBar } from "../components/FloatingSocialBar";
import FooterHomeComponent from "../components/FooterHomeComponent";
import Navegacion from "../components/Navegacion";
import { Header } from "../components/NosotrosComponents/Header";
import { MisionVision } from "../components/NosotrosComponents/MisionVision";
import "../styles/nosotrosStyle.css";
export const Nosotros = () => {
  return (
    <>
      <Navegacion />
      <div className="hide-below-1416">
        <FloatingSocialBar />
      </div>
      <BotonFlotante />
      <div className="relative overflow-hidden  mt-28 comenzarNosotros ">
        <Header />
      </div>
      <MisionVision />
      <FooterHomeComponent />
    </>
  );
};
