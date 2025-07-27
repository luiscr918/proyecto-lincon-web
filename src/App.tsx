import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import OfertaAcademica from "./pages/OfertaAcademica";
import { Contactos } from "./pages/Contactos";
import { Nosotros } from "./pages/Nosotros";
import { Login } from "./pages/Login";
import AdminDashboard from "./pages/PanelAdministracion";
import { NotFound } from "./pages/NotFound";
import ScrollToHashElement from "./components/ScrollToHashElement";
import { Inscripciones } from "./pages/Inscripciones";
import { Extracurriculares } from "./pages/Extracurriculares";
import ParticlesComponent from "./components/OfertaAcaComponents/ParticlesComponent";
//google analitycs
import { useEffect } from "react";
import { trackPageView } from "./utils/googleAnalytics";
import Uniformes from "./pages/Uniformes";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Esto enviará un pageview a GA cuando la ruta cambie
    trackPageView(location.pathname + location.search);
  }, [location]);
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticlesComponent />

      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oferta-academica" element={<OfertaAcademica />} />
        <Route path="/contactanos" element={<Contactos />} />
        <Route path="/sobre-nosotros" element={<Nosotros />} />
        <Route path="/actualizar-fechas" element={<Login />} />
        <Route path="/uniformes" element={<Uniformes/>} />
        <Route path="/inscripciones" element={<Inscripciones />} />
        <Route path="/extracurriculares" element={<Extracurriculares />} />
        <Route
          path="/form-actualizar/:verificado"
          element={<AdminDashboard />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
