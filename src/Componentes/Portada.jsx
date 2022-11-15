import React from "react";
import Logo from '../Imagenes/Logo.png';

function Portada() {
    return (
        <div className=" mix-auto div1">
            <div className="container">
                <div className="container">
                    <h4 className="text-center">
                        <strong>
                        La mejor y màs eficiente farmacia esta en tu farmacia, esta en tu forma de cuidarte
                        </strong>
                        
                    </h4> 
                    <p className="text-center">
                        <strong>
                        Haz el Farmacia del mes sin filas y sin salir de casa
                        </strong>                        
                    </p>
                      
                    <div className="row">
                        <img src={Logo} alt="Logo" className="mx-auto" style={{margin: "15px"}}/>
                         <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    </div>
                        </div>           
                    </div> 
                </div>
            </div> 
        </div> 
    );
}

export default Portada;