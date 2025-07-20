import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import OfertaAcademica from "./pages/OfertaAcademica";
import { Contactos } from "./pages/Contactos";
import { Nosotros } from "./pages/Nosotros";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/oferta-academica" element={<OfertaAcademica />} />
      <Route path="/contactanos" element={<Contactos />} />
      <Route path="/sobre-nosotros" element={<Nosotros />} />
    </Routes>
  );
}

export default App;
