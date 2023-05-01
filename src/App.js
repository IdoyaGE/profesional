
import './App.css';//importo el CSS general
import Navbar from './Navbar/Navbar'; //importo el componente Navbar y lo añado en el div
import Carousel from './Carousel/Carousel'; //importo el componente Carouser y lo añado en el div
//import Login from "./Login/Login" //importo el componente Login y lo añado en el div
//import Home from "./Login/Home" //importo el componente Login y lo añado en el div
import img4 from "./image/informe.png";
import img5 from "./image/hucha.png";
import img6 from "./image/equipo.png";
import AppForm from './Form/AppForm';
import Footer from './Footer/Footer';
import img11 from "./image/exitos.png";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <div>
        <h4>Servicios</h4>
          <div className="container">
          <ul className="columns">
            <li className="box"><img src = {img4} id="iconos" alt="Logo informe" width = "150px" height ="150px"/><p>Te facilitamos informes financieros entendibles</p><p><b>Un buen informe financiero vale más que mil palabras</b></p></li>
            <li className="box"><img src = {img5} id="iconos" alt="Logo hucha" width = "150px" height ="150px"/><p>Olvídate de la ingeniería fiscal</p><p><b>Tú a tu negocio y nosotros a optimizar tus impuestos</b></p></li>
            <li className="box"><img src = {img6} id="iconos" alt="Logo pieza puzzle" width = "150px" height ="150px"/><p>Formamos parte de tu equipo</p><p><b>Juntos definimos la planificación estratégica</b></p></li>
          </ul>
          <div className="aboutus">
          <p><b>Somos una consultoría financiera con más de 20 años de experiencia en el control de gestión de las empresas</b></p>
          <h4>Nuestros casos de éxito</h4>
          <img src = {img11} className="exitos" alt="Logos empresas"/>
          <p><b>Si quieres contactar con el equipo, escríbemos:</b></p>
          </div>
          </div>
      </div>
      <AppForm/>
      <Footer/>
    </div>
  );
}

export default App;
