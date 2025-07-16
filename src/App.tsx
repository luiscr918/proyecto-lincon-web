import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Footer from "./components/FooterComponenet";
import BotonPrueba from "./components/BotonPrueba";
/* import BotonFlotante from "./components/BotonFlotanteComponent"; */
/* import FooterAnimado from "./components/FooterAnimacion"; */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/prueba" element={<BotonPrueba />} />
      {/* <Route path="/boton" element={<BotonFlotante />} /> */}
      {/* <Route path="/animado" element={<FooterAnimado/>}/> */}
    </Routes>
  );
}

export default App;
