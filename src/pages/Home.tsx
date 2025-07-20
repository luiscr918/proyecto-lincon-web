// Home.tsx
import { useNavigate } from "react-router-dom";
import { Contactos } from './Contactos';

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/nosotros"); 
    navigate("/contactos"); 
  };

  return (
    <div>
      <p>Este es el Home</p>
      <button onClick={handleClick}>Ir a Nosotros</button><br />
      <button onClick={handleClick}>Ir a Contactos</button>
    </div>
  );
};
