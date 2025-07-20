import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nosotros } from "./pages/Nosotros";
import { Contactos } from "./pages/Contactos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contactos" element={<Contactos />} />
    </Routes>
  );
}

export default App;
