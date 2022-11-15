import React from "react";
//import { Link } from 'react-router-dom';
import cicatri from '../Imagenes/cicatri.jpg';
import aspi from '../Imagenes/aspi.webp';
import talco from '../Imagenes/talco.webp';
import Jabon from '../Imagenes/Jabon.jpg';
import Aspirina from '../Imagenes/Aspirina.webp';
import dulco from '../Imagenes/dulco.webp';
import plus3 from '../Imagenes/plus3.webp';
import chicle from '../Imagenes/chicle.webp';
import vitac from '../Imagenes/vitac.webp';
//import {BsFillBasket2Fill} from 'react-icons/ai';

function SaludH() {
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={cicatri} class="card-img-top" alt="..."/>
      <div class="card-body">
        <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-primary" type="button">Button</button>
        </div>
        <h5 class="card-title"><strong>Cicatricure Gel Cicatrices Tubo X 30 Gr</strong></h5>
        <p class="card-text">$36.000</p>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={aspi} class="card-img-top" alt="..."/>
      <div class="card-body">
      <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-primary" type="button">Button</button>
        </div>
        <h5 class="card-title"><strong>Cardioaspirina 81 Mg Caja X 30 Tabl</strong></h5>
        <p class="card-text"> $22.400</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={talco} class="card-img-top" alt="..."/>
      <div class="card-body">
      <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-primary" type="button">Button</button>
        </div>
        <h5 class="card-title"><strong>Talco Arden For Men Frasco X 300 Gr + 85 Gr + 30 Gr Precio Especial</strong></h5>
        <p class="card-text">$13.600</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Jabon} class="card-img-top" alt="..."/>
      <div class="card-body">
      <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-primary" type="button">Button</button>
        </div>
        <h5 class="card-title"><strong>Efal Jabon Liquido Calendula Frasco X 270 Gr</strong></h5>
        <p class="card-text">$59.200</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Aspirina} class="card-img-top" alt="..."/>
      <div class="card-body">
      <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-primary" type="button">Button</button>
        </div>
        <h5 class="card-title"><strong>Aspirina Ultra 500 Mg Caja X 20 Tabl</strong></h5>
        <p class="card-text">10.300</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={dulco} class="card-img-top" alt="..."/>
      <div class="card-body">
      <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-primary" type="button">Button</button>
        </div>
        <h5 class="card-title"><strong>Dulcolax Caja X 20 Tabl</strong></h5>
        <p class="card-text">$18.300</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={plus3} class="card-img-top" alt="..."/>
      <div class="card-body">
      <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-primary" type="button">Button</button>
        </div>
        <h5 class="card-title"><strong>Aqualen Hidratante Frasco X 240 Gr</strong></h5>
        <p class="card-text">$67.200</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={chicle} class="card-img-top" alt="..."/>
      <div class="card-body">
      <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-primary" type="button">Button</button>
        </div>
        <h5 class="card-title"><strong>Giralmet 1000 Ui Frasco X 30 Tabl</strong></h5>
        <p class="card-text">$18.100</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={vitac} class="card-img-top" alt="..."/>
      <div class="card-body">
      <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-primary" type="button">Button</button>
        </div>
        <h5 class="card-title"><strong>Vical (vitamina C + Zinc) Naranja Caja X 100 Tabletas Masticable</strong></h5>
        <p class="card-text">$32.100</p>
      </div>
    </div>
  </div>


</div>
           
    );
}

export default SaludH;