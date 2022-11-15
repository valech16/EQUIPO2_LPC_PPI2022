import React from "react";
import { Link } from "react-router-dom";
import mujer from '../Imagenes/mujer.png';



function PerfilH() {
    return (
        <section style={{backgroundColor: "#eee"}}>
            <div class="container py-5">
                <div class="row">
                    <div class="col">

                    </div>
                </div>
      
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
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0"><strong>Nombre completo</strong></p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">Carla Smith</p>
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0"><strong>Correo electronico</strong></p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">carla077@gmail.com</p>
                    </div>
                  </div>

                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0"><strong>Número</strong></p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">3004142122</p>
                    </div>
                  </div>

                  <div class="row">
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0"><strong>Fecha de cumpleaños</strong></p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">11/10/2002</p>
                    </div>
                  </div>
                  <hr/>

                  
                  <div class="row">
                  <div class="col-sm-3">
                      <p class="mb-0"><strong>Genero</strong></p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">Mujer</p>
                    </div>
                        </div>
                  </div>

                  <hr/>

                  <div class="row">
                  <div class="col-sm-3">
                      <p class="mb-0"><strong>Ocupación</strong></p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">Madre de hogar</p>
                    </div>
                        </div>
                  

                  <hr/>


                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Carla</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">Comuna-Aranjuez</p>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        </section>
    );
}

export default PerfilH;