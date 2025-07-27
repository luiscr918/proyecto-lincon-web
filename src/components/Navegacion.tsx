import "../styles/NavBar.css";
import logo from "../assets/imgs/logo.png";
import { Link } from "react-router-dom";
const Navegacion = () => {

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
          <Link to={"/"} >Inicio</Link>
          <div className="dropdown">
            <button
              className="dropbtn"
              type="button"
              
            >
              Enlaces de Interes
            </button>
            <div
              className="dropdown-content"
            >
              <Link to="/inscripciones">Inicio de Clases</Link>
              <Link to="/extracurriculares">Extracurriculares</Link>
              <Link to="/uniformes">Uniformes</Link>
            </div>
          </div>
          <Link to={"/sobre-nosotros"} >Sobre Nosotros</Link>
          <Link to={"/oferta-academica"} >Oferta Academica</Link>
          <Link to={"/contactanos"} >Contacto</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navegacion;
