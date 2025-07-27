import "../../styles/Uniformes.css";
import img8 from "../../assets/imgs/Parada.png";
import img9 from "../../assets/imgs/Educaion.png";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".uniform-card");
    cards.forEach((card, i) => {
      card.classList.add("fade-in");
      (card as HTMLElement).style.animationDelay = `${i * 0.3 + 0.2}s`;
    });
  }, []);

  return (
    <div>
      <div className="uniformes-container">
        <div className="uniform-card parada">
          <div className="uniform-imgs">
            <img src={img8} alt="Chico parada" />
          </div>
          <div className="uniform-title">Uniforme de parada</div>
          <p>Descripción del uniforme de parada...</p>
        </div>

        <div className="uniform-card educacion">
          <div className="uniform-imgs">
            <img src={img9} alt="Chico parada" />
          </div>
          <div className="uniform-title">Uniforme de educación física</div>
          <p>Descripción del uniforme de educación física...</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
