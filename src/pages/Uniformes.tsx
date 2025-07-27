import BotonFlotante from "../components/BotonFlotanteComponent";
import { FloatingSocialBar } from "../components/FloatingSocialBar";
import FooterHomeComponent from "../components/FooterHomeComponent";
import Navegacion from "../components/Navegacion";
import ModalUniforme from "../components/UniformesComponents/ModalUniforme";
import PaginaPrincipal from "../components/UniformesComponents/PaginaPrincipal";

const Uniformes = () => {
  return (
    <>
      <Navegacion />
      <div className="relative overflow-hidden  mt-28 ">
        <PaginaPrincipal />
      </div>
      <ModalUniforme />
      <BotonFlotante />
      <FloatingSocialBar />
      <FooterHomeComponent />
    </>
  );
};
export default Uniformes;
