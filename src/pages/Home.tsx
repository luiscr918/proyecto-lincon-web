// Home.tsx
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/nosotros"); // Navega a la página /nosotros
  };

  return (
    <div>
      <p>Este es el Home</p>
      <button onClick={handleClick}>Ir a Nosotros</button>
    </div>
  );
};
