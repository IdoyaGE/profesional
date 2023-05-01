import React, { useState } from "react"; // Importo React u useState (Hook que permite cambiar el estado a un componente de la función)
import "./Navbar.css";
//Componente React para una barra de navegación
//Función Navbar: se declara inicialmente false y con ShowNav se convierte en true
//El componente devuelve un contenedor con logo y cuatro enlaces
//Con el toogle oculto la barra de navegación y se activa con un click mostrando la lista desplegable

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
              Quienes somos
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="/Form">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


