import imagenPromocional from "../assets/imgs/promocionLincoln.png";
import LiquidGlass from "liquid-glass-react";
import "../styles/textoModalInformacion.css";
import "../styles/ModalStyle.css";
interface Props {
  visible: boolean;
  setVisible: (valor: boolean) => void;
}
import "../styles/tailwind.css";
export const ModalInformacion = ({ visible, setVisible }: Props) => {
  return (
    <>
      {visible && (
        <div className="fixed inset-0 z-50 flex items-center  justify-center backdrop-blur-md img-atencion bg-gradient-to-br from-blue-950 via-blue-900  to-red-800">
          <div className=" mr-96 ml-96 custom-margin-lg-up "></div>
          <LiquidGlass
            displacementScale={110} //
            blurAmount={30}
            saturation={130}
            cornerRadius={10}
            elasticity={0}
            aberrationIntensity={2}
            padding="20px"
            style={{
              minWidth: 380,
              width: 1500,
              maxWidth: "95%",
              height: 250,
              minHeight: 250,
              backgroundColor: "transparent",
              marginRight: 370,
            }}
          >
            <div>
              <div className="cursor-pointer">
                <a
                  href="https://wa.me/593983924043?text=Hola%2C%20quiero%20más%20información%20acerca%20de%20las%20matrículas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={imagenPromocional}
                    alt="imagen promocional de la ue lincoln larrea B."
                    className="w-full h-auto rounded-lg "
                  />
                </a>
              </div>
              <div className=" mt-2 text-center cursor-pointer">
                <span
                  onClick={() => setVisible(false)}
                  className="font-semibold hover:text-red-500 blink-outline"
                >
                  Cerrar
                </span>
              </div>
            </div>
          </LiquidGlass>
        </div>
      )}
    </>
  );
};
