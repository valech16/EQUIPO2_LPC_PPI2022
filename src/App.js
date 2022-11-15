import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './Paginas/Inicio';
import Ingresar from './Paginas/Ingresar';
import Registar from './Paginas/Registrar';
import Maternidad from './Paginas/Maternidad2';
import Salud from './Paginas/Salud';
import HomeL from './Paginas/HomeL';
import Perfil from './Paginas/Perfil';
import MedicinaFormulada from './Paginas/MedicinaFormulada';
import Pago from './Paginas/Pago';
import MiCarrito2 from './Paginas/MiCarrito2';
import Pedido from './Paginas/Pedido';
import CerrarSesion from './Paginas/CerarSesion';



function App() {
  return (
    <Router>
      <Routes>

        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/ingresar' element={<Ingresar/>}/>
        <Route exact path='/registrar' element={<Registar/>}/>
        <Route exact path='/maternidad' element={<Maternidad/>}/>
        <Route exact path='/salud' element={<Salud/>}/>
        <Route exact path='/medicinaformulada' element={<MedicinaFormulada/>}/>
        <Route exact path='/homeL' element={<HomeL/>}/>
        <Route exact path='/Perfil' element={<Perfil/>}/>
        <Route exact path='/micarrito' element={<MiCarrito2/>}/>
        <Route exact path='/pago' element={<Pago/>}/>
        <Route exact path='/pedido' element={<Pedido/>}/>
        <Route exact path='/cerrarsesion' element={<CerrarSesion/>}/>
        
        
        
      </Routes>
    </Router>
  
  );
}

export default App;
