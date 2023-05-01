
import './App.css';//importo el CSS general
import Navbar from './Navbar/Navbar'; //importo el componente Navbar y lo añado en el div
import Carousel from './Carousel/Carousel'; //importo el componente Carouser y lo añado en el div
//import Login from "./Login/Login" //importo el componente Login y lo añado en el div
//import Home from "./Login/Home" //importo el componente Login y lo añado en el div

import img4 from "./image/informe.png";
import img5 from "./image/hucha.png";
import img6 from "./image/equipo.png";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <div>
        <h4>Servicios</h4>
          <div className="container">
          <div className="columns">
            <li className="box"><img src = {img4} alt="Logo informe" width = "200px" height ="200px"/><p>Te facilitamos informes financieros entendibles.</p><p>Un buen informe financiero vale más que mil palabras.</p></li>
            <li className="box"><img src = {img5} alt="Logo hucha" width = "200px" height ="200px"/><p>Olvídate de la ingeniería fiscal.</p><p>Tú te encargas de tu negocio y nosotros de optimizar tus impuestos.</p></li>
            <li className="box"><img src = {img6} alt="Logo pieza puzzle" width = "200px" height ="200px"/><p>Formamos parte de tu equipo.</p><p>Colaboramos en definir tu estrategia para alcanzar mejores resultados.</p></li>
          </div>
          </div>
      </div>
    </div>
  );
}

   


export default App;
