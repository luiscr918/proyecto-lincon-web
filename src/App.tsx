import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import OfertaAcademica from "./pages/OfertaAcademica";
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nosotros />} />
    </Routes>
  );
}

export default App;
