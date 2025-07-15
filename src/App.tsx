import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Footer from "./components/FooterComponenet";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  );
}

export default App;
