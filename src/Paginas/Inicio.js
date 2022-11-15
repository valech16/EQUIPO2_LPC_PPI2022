import React from "react";
import Menu from '../Componentes/Menu';
import Portada from '../Componentes/Portada';
import CerrarSesionH from '../Componentes/CerrarSesion';

function Inicio() {
    return (
        <div className="Inicio">
            <Menu/>
            <Portada/>
            <CerrarSesionH/>
        </div>
    );
} 

export default Inicio;
