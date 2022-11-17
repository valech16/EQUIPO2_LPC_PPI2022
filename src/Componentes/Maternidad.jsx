import React from "react";
import { Link } from 'react-router-dom';
import Gel from '../Imagenes/Gel.jpg';
import leche from '../Imagenes/leche.jpg';
import protector from '../Imagenes/protector.jpg';
import toallas from '../Imagenes/toallas.webp';
import Sampoo from '../Imagenes/Sampoo.jpg';
import pañal from '../Imagenes/pañal.webp';
import nestum from '../Imagenes/nestum.jpg';
import polvo from '../Imagenes/polvo.webp';
import tetero from '../Imagenes/tetero.webp';
import { BsFillBasket2Fill } from 'react-icons/bs';

function MaternidadH() {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-3">
      <div class="col">
        <div class="card">
          <img src={Gel} class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="d-grid gap-2 d-md-block">


              <Link to="/MiCarrito">
                <div class="s-grid gap-2 col-7 mx-auto pb15" >
                  <button type="button" class="btn btn-primary btn-primary-outline-success"><p><small> <BsFillBasket2Fill /> Carrito</small></p></button>

                </div>
              </Link>

            </div>
            <h5 class="card-title"><strong>Antiestrias Julienne Gel Tubo X 200 Gr</strong></h5>
            <p class="card-text">$45.000</p>

          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={leche} class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="d-grid gap-2 d-md-block">
              <button class="btn btn-primary" type="button"><p><small> <BsFillBasket2Fill /> Carrito</small></p></button>
            </div>
            <h5 class="card-title"><strong>Extractor De Leche Plus Richard Vidrio Caja X 1 Und</strong></h5>
            <p class="card-text"> $15.400</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={protector} class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="d-grid gap-2 d-md-block">
              <button class="btn btn-primary" type="button"><p><small> <BsFillBasket2Fill /> Carrito</small></p></button>
            </div>
            <h5 class="card-title">Es</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={toallas} class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="d-grid gap-2 d-md-block">
              <Link to="/MiCarrito">
                <div class="s-grid gap-2 col-7 mx-auto pb15" >
                  <Link to="/MiCarrito">
                    <div class="s-grid gap-2 col-7 mx-auto pb15" >
                      <button type="button" class="btn btn-primary btn-primary-outline-success"><p><small> <BsFillBasket2Fill /> Carrito</small></p></button>

                    </div>
                  </Link>
                </div>
              </Link>

            </div>
            <h5 class="card-title"><strong>Toallas Humedas Huggies Antibacterial Pqte X 80 Und</strong></h5>
            <p class="card-text">$7.200</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={Sampoo} class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="d-grid gap-2 d-md-block">
              <button class="btn btn-primary" type="button"><p><small> <BsFillBasket2Fill /> Carrito</small></p></button>
            </div>
            <h5 class="card-title"><strong>Shampoo Arrurru Ph Equilibrado Frasco X 800 Ml</strong></h5>
            <p class="card-text">$22.300</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={pañal} class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="d-grid gap-2 d-md-block">
              <button class="btn btn-primary" type="button"><p><small> <BsFillBasket2Fill /> Carrito</small></p></button>
            </div>
            <h5 class="card-title"><strong>Pañal Huggies Natural Care Pants Talla Xxg Pqte X 36 Unidades</strong></h5>
            <p class="card-text">$43.300</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={nestum} class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="d-grid gap-2 d-md-block">
              <button class="btn btn-primary" type="button"><p><small> <BsFillBasket2Fill /> Carrito</small></p></button>
            </div>
            <h5 class="card-title"><strong>Nestum Trigo Miel Caja X 350 Gr</strong></h5>
            <p class="card-text">$15.200</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={polvo} class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="d-grid gap-2 d-md-block">
              <button class="btn btn-primary" type="button"><p><small> <BsFillBasket2Fill /> Carrito</small></p></button>
            </div>
            <h5 class="card-title"><strong>Alula Progress Gold 3 Tarro X 900 Gr</strong></h5>
            <p class="card-text">$64.100</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={tetero} class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="d-grid gap-2 d-md-block">
              <button class="btn btn-primary" type="button"><p><small> <BsFillBasket2Fill /> Carrito</small></p></button>
            </div>
            <h5 class="card-title"><strong>Tetero Nuby Con Manijas X 320 Ml</strong></h5>
            <p class="card-text">$32.1o00</p>
          </div>
        </div>
      </div>


    </div>

  );
}

export default MaternidadH;