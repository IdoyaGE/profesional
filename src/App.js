
import './App.css';//importo el CSS general
import Navbar from './Navbar/Navbar'; //importo el componente Navbar y lo añado en el div
import Carousel from './Carousel/Carousel'; //importo el componente Carouser y lo añado en el div



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
    </div>
  )
}

export default App;
