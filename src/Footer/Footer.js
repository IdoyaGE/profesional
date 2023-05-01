import React from 'react';
import img7 from "../image/fb.jpg";
import img8 from "../image/inst.jpg";
import img9 from "../image/lin.jpg";
import img10 from "../image/tw.jpg";
import './Footer.css';



const Footer = () => {
    return (
        <div class="footer">
        <footer class="container">
            <div>
                <ul class="footernavbar">
                <li class="footernav-item"><a href="#Inicio">Inicio</a></li>
                <li class="footernav-item"><a href="#Servicios">Servicios</a></li>
                <li class="footernav-item"><a href="#Quienes somos">Quienes somos</a></li>
                <li class="footernav-item"><a href="#Contacto"></a></li>
                </ul>
            </div>
                  
            <div class="newsletter">
              <form>
                <h5>Suscríbete a nuestra Newsletter</h5>
                <p>Te enviaremos mensualmente información financiera interesante.</p>
                <div class="newsletter1">
                  <label for="newsletter2" class="visually-hidden"></label>
                  <input id="newsletter3" type="text" class="form-control" placeholder="Correo electrónico"></input>
                  <button class="subscribe" type="button">Enviar</button>
                </div>
              </form>
            </div>
          
      
          <div class="redessociales">
            <p>&copy; 2023 Arkabaia</p>
            <ul class="list-unstyled d-flexiconosredes">
              <li class="facebook"><img src = {img7} id="iconos" alt="Logo facebook" width = "75px" height ="75px"/><a href="https://www.facebook.com/public/Idoya-Garcia"></a></li>
              <li class="instagram"><img src = {img8} id="iconos" alt="Logo instagram" width = "75px" height ="75px"/><a href="https://www.instagram.com/igetxe/"></a></li>
              <li class="linkedin"><img src = {img9} id="iconos" alt="Logo linkedin" width = "75px" height ="75px"/><a href="https://www.linkedin.com/in/idoyagarciacontroller/"></a></li>
              <li class="twitter"><img src = {img10} id="iconos" alt="Logo twitter" width = "75px" height ="75px"/><a href="https://twitter.com/GIdoya"></a></li>
            </ul>
          </div>
        </footer>
        </div>
    )};

export default Footer;