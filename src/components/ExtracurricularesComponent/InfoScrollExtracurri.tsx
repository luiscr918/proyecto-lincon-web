import { useEffect } from "react";
import Extracurricular from "./SvgExtracurricular";
import "../../styles/infoScrollExtracurri.css";

const InfoScrollExtracurri = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="banner">
      <div className="title">
        <Extracurricular />
      </div>
    </div>
  );
};

export default InfoScrollExtracurri;
