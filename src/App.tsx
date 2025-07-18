import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Informacion from '../components/Informacion';
import NavBar from '../components/NavBar';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/navegacion" element={<NavBar />} />
      <Route path="/informacion" element={<Informacion/>}/>
    </Routes>
  );
}

export default App;
