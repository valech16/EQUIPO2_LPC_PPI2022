import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';
import mujer from '../Imagenes/mujer.png';
import Gel from '../Imagenes/Gel.jpg';
import toallas from '../Imagenes/toallas.webp';


function MiCarrito2H() {
    return (
        <div className="row">
             <div className="  div5">
                <div classNameName="header">
                     <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                             <div classNameName="container" style={{color: "#A3F9D7" }}></div>
                             <Link className="navbar-brand" cto="/">
                                 <i>
                                <strong>
                                MEDICINE VITAL
                                </strong> 
                                </i>
                             </Link>
                        
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                    <Link to="/Perfil">
                                            <div class="d-grid gap-2 col-7 mx-auto pb15" >
                                                <button class="btn btn-primary btn-primary-outline-success" type="button"> Perfil

                                                 </button>

                                            </div>
                                        </Link>
                                        <Link to="/MiCarrito">
                                            <div class="d-grid gap-2 col-7 mx-auto pb15" >
                                            <button class="btn btn-primary btn-primary-outline-success" type="button"> Mi Carrito

                                            </button>
                                            </div>
                                        </Link>
                                        <Link to="/CerrarSessión">
                                            <div class="s-grid gap-2 col-7 mx-auto pb15" >
                                            <button type="button" class="btn btn-primary btn-primary-outline-success"> Cerrar Sesión</button>

                                            </div>
                                        </Link>
                                </ul>
                            </div>
                         </div>
                     </nav>
                    

                     <div class="row">
                    <div class="col-lg-4">
                        <div class="card mb-4">
                            <div class="card-body text-center">
                                <img src={mujer} class="card-img-top " alt="avatar"/> 
                                 
                                <h5 class="my-3">Carla Smith</h5>
                                <p class="text-muted mb-1">Full Stack Developer</p>
                                <p class="text-muted mb-4">Comuna, Aranjuez, C</p>
                               <div class="d-flex justify-content-center mb-2">
                                    
                                    
                               <Link to="/HomeL">
                                            <div class="d-grid gap-2 col-6 mx-auto pb4">
                                                <button class="btn btn-primary btn-primary-outline-success" type="button">HomeL

                                                </button>

                                            </div>
                                        </Link>
                                        

  
                   
                                </div>
                            </div>
                        </div>

                    </div>
            <div class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">


                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0"><strong>Productos</strong></p>
                    </div>
                    <div class="col-sm-9">
                    </div>
                  </div>

                  <div class="col">
                      <div class="card mb-3" style={{margin: "15px"}}>
  <div class="row g-0">
    <div class="col-md-4">
    <img src={Gel} class="card-img-top" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"><strong>Antiestrias Julienne Gel Tubo X 200 Gr</strong></h5>
        <p class="card-text"><small class="text-muted">$45.000Mil</small></p>
      </div>
    </div>
  </div>
</div>
  </div>
  <div class="container">
                      <div class="card mb-3" style={{margin: "15px"}}>
  <div class="row g-0">
    <div class="col-md-3">
    <img src={toallas} class="card-img-top" alt="..."/>
    </div>
    <div class="col-md-3">
      <div class="card-body">
        <h5 class="card-title"><strong>Toallas Humedas Huggies Antibacterial Pqte X 80 Und</strong></h5>
        <p class="card-text"><small class="text-muted">$7.300.000Mil</small></p>
      </div>
    </div>
  </div>
</div>
  </div>
  
  <Link to="/Pedido">
         <div class="d-grid gap-2 col-6 mx-auto pb4">
          <button class="btn btn-primary btn-primary-outline-success" type="button">Ir a pagar

          </button>

          </div>
          </Link>
 





                </div>
              </div>

            </div>
          </div>



                 </div>
            </div>
        </div>

    );
}

export default MiCarrito2H;