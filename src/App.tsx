import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import OfertaAcademica from "./pages/OfertaAcademica";
import { Contactos } from "./pages/Contactos";
import { Nosotros } from "./pages/Nosotros";
import PanelAdministracion from "./pages/PanelAdministracion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PanelAdministracion />} />
      <Route path="/oferta-academica" element={<OfertaAcademica />} />
      <Route path="/contactanos" element={<Contactos />} />
      <Route path="/sobre-nosotros" element={<Nosotros />} />
    </Routes>
  );
}

export default App;
