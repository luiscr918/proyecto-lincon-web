import { useEffect, useState } from "react";
import { ModalInformacion } from "../components/ModalInformacion";
import { FloatingSocialBar } from "../components/FloatingSocialBar";

export const Home = () => {
  const [visible, setvisible] = useState(false);

  useEffect(() => {
    setvisible(true);
  }, []);

  return (
    <div className="w-screen min-h-screen bg-green-500 ">
      <p className="text-center mt-10">Este es el Home</p>
      <ModalInformacion visible={visible} setVisible={setvisible} />
      <FloatingSocialBar modalHome={visible} />
    </div>
  );
};
