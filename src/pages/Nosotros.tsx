import BotonFlotante from "../components/BotonFlotanteComponent";
import { FloatingSocialBar } from "../components/FloatingSocialBar";
import FooterHomeComponent from "../components/FooterHomeComponent";
import Navegacion from "../components/Navegacion";
import { Header } from "../components/NosotrosComponents/Header";
import { MisionVision } from "../components/NosotrosComponents/MisionVision";
import "../styles/EstilosDaniel/MisionVision.css";
import "../styles/EstilosDaniel/QuienesSomos.css";

export const Nosotros = () => {
  return (
    <>
      <Navegacion />
      <Header />
      <MisionVision />
      <FloatingSocialBar />
      <BotonFlotante />
      <FooterHomeComponent />
    </>
  );
};
