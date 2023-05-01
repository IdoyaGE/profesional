import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; //He intalado npm install react-responsive-carousel --save
import "./Carousel.css";//importo los estilos del CSS
//He importado las tres imágenes para que me las reconozca  en el carrousel
import img1 from "../image/finanzas.png";
import img2 from "../image/impuestos.png";
import img3 from "../image/estrategia.png";

//Función de React llamada "Slider" que devuelve un componente de carrusel, utilizando la librería react-resposive-carousel
        function Slider(){
            return(
                <Carousel showThumbs={false}>
                    
                        <div>
                            <img src={img1} alt="Finanzas"/>
                        </div>
                        <div>
                            <img src={img2} alt="Impuestos"/>
                        </div>
                        <div>
                            <img src={img3} alt="Estrategia"/>
                        </div>
                       
                    
                </Carousel>
            );
        }
        
export default Slider;