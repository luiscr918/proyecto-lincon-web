import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nosotros } from "./pages/Nosotros";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
    </Routes>
  );
}

export default App;
