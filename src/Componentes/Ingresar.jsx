import React from "react";


function Iniciarsesion() {
    return (
        <div className=" border-radius div2">
            <div className="container ">
                <div className="row">


                    <div className="container pb2">
                        <div className="mx-auto" style={{ margin: "15px" }} />

                        <div class="card">
                            <div class="card-header">
                                <strong>
                                    Iniciar sesiòn
                                </strong>
                            </div>
                            <div class="card-body">
                                <form action="/homeL" method="get">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Ingrese tu correo electrònico</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" class="form-text">Ingrese tu correo electrònico.</div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Acepta terminos y condicciones</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Ingresar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>




    );
}

export default Iniciarsesion;