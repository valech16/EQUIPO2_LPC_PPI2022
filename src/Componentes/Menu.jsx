import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';




function Menu() {
    return (
        <div classNameName="header div6">
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

                                        <Link to="/Ingresar">
                                            <div class="d-grid gap-2 col-6 mx-auto pb4">
                                                <button class="btn btn-primary btn-primary-outline-success" type="button"> Ingresar

                                                </button>

                                            </div>
                                        </Link>

                                        <Link to="/Registrar">
                                            <div class="d-grid gap-2 col-6 mx-auto pb4" >
                                                <button class="btn btn-primary btn-primary-outline-success" type="button"> Registrar

                                                 </button>

                                            </div>
                                        </Link>

                                    </ul>
                                </div>
                </div>
            </nav>

                <div classNameName="containe">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="¿Què quieres buscar?" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                
            


        </div> 


    );
}

export default Menu;