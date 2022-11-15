import React from "react";
//import { Link } from 'react-router-dom';
import ibu from '../Imagenes/ibu.webp';
import jarabe from '../Imagenes/jarabe.png';
import aceta from '../Imagenes/aceta.png';

import {BsFillBasket2Fill} from 'react-icons/bs';

function MaternidadH() {
    return(
        <div class="row row-cols-1 row-cols-md-3 g-3">
  <div class="col">
    <div class="card">
      <img src={ibu} class="card-img-top" alt="..."/>
      <div class="card-body">
        <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-primary" type="button">
            <p><small> <BsFillBasket2Fill/> Carrito</small></p>
            </button>
        </div>
        <h5 class="card-title"><strong>Ibuprofeno Suspension Frasco X 120 Ml</strong></h5>
        <p>Producto con prescripción. Requiere fórmula médica</p>
        <p class="card-text">$8.900</p>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={jarabe} class="card-img-top" alt="..."/>
      <div class="card-body">
      <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-primary" type="button"><p><small> <BsFillBasket2Fill/> Carrito</small></p></button>
        </div>
        <h5 class="card-title"><strong>Acetaminofen Jarabe Frasco X 120 Ml</strong></h5>
        <p class="card-text"> $8.400</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={aceta} class="card-img-top" alt="..."/>
      <div class="card-body">
      <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-primary" type="button"><p><small> <BsFillBasket2Fill/> Carrito</small></p></button>
        </div>
        <h5 class="card-title"><strong>Acetaminofen+codeina 325/8 Mg Caja X 20 Tab</strong></h5>
        <p class="card-text">$19.200</p>
      </div>
    </div>
  </div>


</div>
           
    );
}

export default MaternidadH;