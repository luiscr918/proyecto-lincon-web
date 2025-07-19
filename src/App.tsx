import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import OfertaAcademica from "./pages/OfertaAcademica";
function App() {
  return (
    <Routes>
      <Route path="/" element={<OfertaAcademica />} />
    </Routes>
  );
}

export default App;
