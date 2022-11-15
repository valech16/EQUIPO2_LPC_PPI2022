import React from "react";


function Register() {
    return (
        <div className=" border-radius div2">
            <div className="container ">
                <div className="row">
                

                    <div className="mx.auto text.center py-4" >
                        <h1>
                            <strong>
                            Registrate
                            </strong>
                            
                        </h1>
                        <p> 
                            <strong> 
                            Y obten los mejores medicamentos que necesitas
                            </strong> 
                        </p>
                    </div>

                    <div className="container pb7">
                    <div className="mx-auto" style={{margin: "15px"}}/>

                        <form class="row g-3" action="homeL" method="get" >
                            <div class=" text-center col-md-5">
                                <label for="inputEmail4" class="form-label"> <strong>Correo electronico</strong> </label>
                                <input type="email" class="form-control" id="inputEmail4"/>
                            </div>
                            <div class=" text-center col-md-5">
                                <label for="inputPassword4" class="form-label"> <strong> Contraseña</strong> </label>
                                <input type="password" class="form-control" id="inputPassword4"/>
                            </div>
                            <div class=" text-center col-5">
                                <label for="inputAddress" class="form-label"> <strong> Nombres</strong> </label>
                                <input type="text" class="form-control" id="inputAddress" />
                            </div>
                            <div class=" text-center col-5">
                                <label for="inputAddress2" class="form-label"> <strong> Apellidos</strong></label>
                                <input type="text" class="form-control" id="inputAddress2" />
                            </div>
                            <div class="text-center col-md-5">
                                <label for="inputCity" class="form-label"> <strong> Comuna de residencia</strong></label>
                                <select id="inputState" class="form-select">
                                   <option>Selecione</option>              
                                   <option>Comuna 1 - Popular</option>
                                   <option>Comuna 2 - Santa Cruz</option>
                                   <option>Comuna 3 - Manrique</option>
                                   <option>Comuna 4 - Aranjuez</option>
                                   <option>Comuna 5 - Castilla</option>
                                   <option>Comuna 6 - Doce de Octubre</option>
                                   <option>Comuna 7 - Robledo</option>
                                   <option>Comuna 8 - Villa Hermosa</option>
                                   <option>Comuna 9 - Buenos Aires</option>
                                   <option>Comuna 10 - La Candelaria</option>
                                   <option>Comuna 11 - Laureles-Estadio</option>
                                   <option>Comuna 12 - La América</option>
                                   <option>Comuna 13 - San Javier</option>
                                   <option>Comuna 14 - El Poblado</option>
                                   <option>Comuna 15 - Guayabal</option>
                                   <option>Comuna 16 - Belén</option>
                                </select>
                            </div>
                            <div class=" text-center col-md-5">
                                <label for="inputState" class="form-label"> <strong> Genero</strong></label>
                                <select id="inputState" class="form-select"> 
                                   <option>Seleccione</option>              
                                   <option>Mujer</option>
                                   <option>Hombre</option>
                                   <option>Otro</option>
                                </select>
                            </div>
                            <div class="text-center col-md-5">
                                <label for="inputZip" class="form-label"> <strong> Ocupaciòn</strong></label>
                                <input type="text" class="form-control" id="inputZip"/>
                            </div>
                            <div class=" col-5">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                    <label class="form-check-label" for="gridCheck">
                                        Acepto terminos y condiciones
                                    </label>
                                </div>
                            </div>
                            <div class="col-5">
                                <button type="submit" class="btn btn-primary"> <strong> Registrame</strong></button>
                            </div>
                        </form>

                    </div>
                </div>
            
            </div>
        </div>    
    );
}

export default Register;