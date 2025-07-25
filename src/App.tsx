import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import OfertaAcademica from "./pages/OfertaAcademica";
import { Contactos } from "./pages/Contactos";
import { Nosotros } from "./pages/Nosotros";
import { Login } from "./pages/Login";
import AdminDashboard from "./pages/PanelAdministracion";
import { NotFound } from "./pages/NotFound";
import ScrollToHashElement from "./components/ScrollToHashElement";
import { Inscripciones } from "./pages/Inscripciones";

function App() {
  return (
    <>
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oferta-academica" element={<OfertaAcademica />} />
        <Route path="/contactanos" element={<Contactos />} />
        <Route path="/sobre-nosotros" element={<Nosotros />} />
        <Route path="/actualizar-fechas" element={<Login />} />
        <Route path="/inscripciones" element={<Inscripciones />} />
        <Route
          path="/form-actualizar/:verificado"
          element={<AdminDashboard />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
