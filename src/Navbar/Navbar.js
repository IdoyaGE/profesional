import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const handleNavToggle = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-logo" href="/">
          Arkabaia
        </a>
        <div className="navbar-toggle" onClick={handleNavToggle}>
          <div className="navbar-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={`navbar-menu ${showNav ? "active" : ""}`}>
          <li className="navbar-item">
            <a className="navbar-link" href="/Inicio">
              Inicio
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="/Servicios">
              Servicios
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="/Quienes somos">
              Acerca
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="/Contacto">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;



/*import React, {useState} from 'react';//hook useState
import "./Navbar.css";
// Importo React al componente Navbar 
const Navbar = () => {
    const [isOpen, setIsOpen]=useState(false) //Creo una constante que es un array con un estado que importamos en React
    //Añado un onclick en toggle para que cambie de estado al hacer click en la hamburguesa y agrego una función con la variable isOpen
    //Agrego a nav_items y a nav_toggle la clase open 
    return(
        <div className="navbar">
            <div className="nav_logo">Arkabaia</div>
            <div className={`nav_items ${isOpen &&"open"}`} onClick={() =>setIsOpen(!isOpen)}>
                <div className="nav_toggle">
                <span className="hamburger"></span>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
                </div>

                <a href="#">Quienes somos</a>
                <a href="#">Servicios</a>
                <a href="#">Blog</a>
                <a href="#">Contacto</a>
                
            </div>
            <div className={`nav_toggle ${isOpen &&"open"}`} onClick={ () => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Navbar;*/