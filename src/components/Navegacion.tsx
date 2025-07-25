import "../styles/NavBar.css";
import logo from "../assets/imgs/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Extracurriculares } from '../pages/Extracurriculares';

const Navegacion = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      <header className="header">
        <img src={logo} alt="Logo" className="logo-img" />
        <div className="logo-block">
          <a href="" className="logo">
            U.E.P
          </a>
          <strong>
            <p style={{ color: "white" }}>Lincoln Larrea Benalcazar</p>
          </strong>
        </div>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
          <i className='bxr  bx-menu-wider'  ></i>
          <i className="bxr bxs-x bx-bounce " id="close-icon" />
        </label>
        <nav className="navbar">
          <Link to={"/"}>Inicio</Link>
          <Link to={"/sobre-nosotros"}>Sobre Nosotros</Link>
          <div className="relative inline-block text-left">
  <button
    onClick={() => setDropdownOpen(!dropdownOpen)}
    className="inline-flex justify-center items-center gap-2 rounded-md "
  >
    Enlaces de Interes
    <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
    </svg>
  </button>

  {dropdownOpen && (
    <div className="absolute right-0 z-50 mt-2 w-56 rounded-mna shadow-lg ring-1 ring-black/5">
      <div className="py-1 text-sm text-gray-700">
        <a href="#" className="block px-4 py-2 hover:bg-black">Extracurriculares</a>
        <a href="#" className="block px-4 py-2 hover:bg-black">Inicio de Clases </a>
        <a href="#" className="block px-4 py-2 hover:bg-black">Uniformes</a>
        <a href="#" className="block px-4 py-2 hover:bg-black">Costos</a>
      </div>
    </div>
  )}
</div>

          <Link to={"/oferta-academica"}>Oferta Academica</Link>
          <Link to={"/contactanos"}>Contacto</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navegacion;
