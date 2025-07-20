import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import OfertaAcademica from "./pages/OfertaAcademica";
import Contacto from "./pages/Contacto";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Contacto />} />
    </Routes>
  );
}

export default App;
