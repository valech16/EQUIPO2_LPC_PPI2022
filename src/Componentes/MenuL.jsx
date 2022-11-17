import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';
import medico2 from '../Imagenes/medico 2.webp';




function MenuL() {
    return (
        <div className="row">
            <div className="">
                <div classNameName="header">
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <div classNameName="" style={{ color: "#A3F9D7" }}></div>
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
                                    <Link to="/CerrarSesion">
                                        <div class="s-grid gap-2 col-7 mx-auto pb15" >
                                            <button type="button" class="btn btn-primary btn-primary-outline-success"> Cerrar Sesión</button>

                                        </div>
                                    </Link>


                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div classNameName="containe">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="¿Què quieres buscar?" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="container" style={{ backgroundColor: "#F9D8EE" }}>
                        <div className="p-1">
                            
                        </div>

                    </div>


                    <ul className="nav justify-content">

                        <li className="nav-item text-center">
                            <Link className="nav-link active" aria-current="page" to="/maternidad">Maternidad</Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link className="nav-link" to="/salud">Salud</Link>
                        </li>
                        <li className="nav-item text- center">
                            <Link className="nav-link" to="/medicinaformulada">Medicina Formulada</Link>
                        </li>

                    </ul>
                    <body className="div5">
                <section>
                    <div id="medico2" className="attribution">
                    <img src={medico2} class="card-img-top" sizes="32x32" alt="..."/>
                    </div>
                </section>
            </body>


                </div>

            </div>
        </div>

    );
}

export default MenuL;