import imagenPromocional from "../assets/imgs/promocionLincoln.png";
import LiquidGlass from "liquid-glass-react";
interface Props {
  visible: boolean;
  setVisible: (valor: boolean) => void;
}
export const ModalInformacion = ({ visible, setVisible }: Props) => {
  return (
    <>
      {visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md ">
          <LiquidGlass
            displacementScale={100} //
            blurAmount={30}
            saturation={110}
            cornerRadius={10}
            padding="20px"
            style={{
              width: "30%",
              maxWidth: "90%",
              backgroundColor: "transparent",
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
                    className="w-full h-auto rounded-lg"
                  />
                </a>
              </div>
              <div className="mt-2 text-center">
                <button
                  onClick={() => setVisible(false)}
                  className="text-white font-semibold hover:text-red-400"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </LiquidGlass>
        </div>
      )}
    </>
  );
};
