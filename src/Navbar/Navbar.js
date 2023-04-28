import React, {useState} from 'react';//hook useState
import "./Navbar.css";
// Importo React al componente Navbar 
const Navbar = () => {
    const [isOpen, setIsOpen]=useState(false) //Creo una constante que es un array con un estado que importamos en React
    //Añado un onclick en toggle para que cambie de estado al hacer click en la hamburguesa y agrego una función con la variable isOpen
    //Agrego a nav_items y a nav_toggle la clase open 
    return(
        <div className="navbar">
            <div className="nav_logo">Arkabaia</div>
            <div className={`nav_items ${isOpen &&"open"}`}>
                <div className="nav_toggle">
                <i class="fas fa-bars"></i>
                </div>

                <a href="#">Inicio</a>
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

export default Navbar;