import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Este es el Home</p>
      <button onClick={()=> navigate("/prueba")}>Ir a footer</button>
    </div>
  );
};
