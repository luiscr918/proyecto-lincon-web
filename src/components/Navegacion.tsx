import "../styles/NavBar.css";
import logo from "../assets/imgs/logo.png";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";

const Navegacion = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <header className="header">
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
        <div className="logo-block">
          <Link to={"/"} className="logo">
            U.E.P
            <strong>
              <p style={{ color: "white" }}>Lincoln Larrea Benalcazar</p>
            </strong>
          </Link>
        </div>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
          <i className="bxr bx-menu-wider"></i>
          <i className="bxr bxs-x bx-bounce" id="close-icon" />
        </label>
        <nav className="navbar">
          <Link to={"/"}>Inicio</Link>

          <div className="dropdown" ref={dropdownRef}>
            <button
              className="dropbtn"
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Enlaces de Interés
              <FiChevronDown
                className={`inline ml-2 transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`dropdown-content ${
                dropdownOpen ? "block" : "hidden"
              }`}
            >
              <Link to="/inscripciones">Inicio de Clases</Link>
              <Link to="/extracurriculares">Extracurriculares</Link>
              <Link to="/uniformes">Uniformes</Link>
            </div>
          </div>

          <Link to={"/sobre-nosotros"}>Sobre Nosotros</Link>
          <Link to={"/oferta-academica"}>Oferta Académica</Link>
          <Link to={"/contactanos"}>Contacto</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navegacion;
