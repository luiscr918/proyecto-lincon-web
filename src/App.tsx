import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Navegacion from '../components/Navegacion';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/navegacion" element={<Navegacion />} />
    </Routes>
  );
}

export default App;
