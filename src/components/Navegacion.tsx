import "../styles/NavBar.css";
import logo from "../assets/imgs/logo.png"
import React, { useState } from "react";

const Navegacion = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div >
            <header className="header">
                <img src={logo} alt="Logo" className="logo-img" />
                <div className="logo-block">
                    <a href="" className="logo">U.E.P</a>
                    <strong>
                    <p style={{ color:"white"}}>Lincon Larrea Benalcazar</p>
                    </strong>
                </div>
                <input type="checkbox" id="check"/>
                <label htmlFor="check" className="icons">
                    <i className="bxr bxs-menu-wider bx-breathe bx-rotate-90" id="menu-icon"/>
                    <i className="bxr bxs-x bx-bounce "  id="close-icon"/>
                </label>
                <nav className="navbar">
                    <a href="">Inicio</a>
                    <a href="">Sobre Nosotros</a>
                    <div
                        className="dropdown"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                        style={{ position: "relative", display: "inline-block" }}
                    >
                        <a href="#" className="dropdown-toggle">
                            Enlaces de Interes 
                        </a>
                        {dropdownOpen && (
                            <div className="dropdown-menu" style={{
                                position: "absolute",
                                top: "100%",
                                left: 0,
                                background: "black",
                                minWidth: "180px",
                                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                                borderRadius: "6px",
                                zIndex: 10
                            }}>
                                <a href="#">Extracurriculares</a>
                                <a href="#">Nuestros Uniformes</a>
                                <a href="#">Inicio de Clases</a>
                                <a href="#">Costos</a>
                            </div>
                        )}
                    </div>
                    <a href="">Oferta Academica</a>
                    <a href="">Contacto</a>
                </nav>
            </header>
        </div>
    );
};

export default Navegacion;