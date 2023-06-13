
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './componentes/Cart/Cart';
import { CarritoProvider } from './Context/CarritoContext';
import CheckOut from './componentes/CheckOut/CheckOut';




function App() {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCat' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          
          <Route path='/Cart' element={<Cart />} />
          <Route path='/CheckOut' element={< CheckOut />} />        
          <Route path='*' element={<h2>sitio en construccion</h2>} />


        </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
