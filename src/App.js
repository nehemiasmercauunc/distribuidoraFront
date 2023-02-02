import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Producto from './pages/Producto';
import Error from './pages/Error';
import About from './pages/About';
import SharedLayout from './pages/SharedLayout';
import SharedProductLayout from './pages/SharedProductLayout';
import ProductoEdit from './pages/ProductoEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='productos' element={<SharedProductLayout />}>
            <Route index element={<Productos />} />
            <Route path="nuevo" element={<Producto />} />
            <Route path="editar/:productoId" element={<ProductoEdit />} />
          </Route>

          {/* <Route path='ventas' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':ventaId' element={<SingleProduct />} />
          </Route>

          <Route path='clientes' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':clientesId' element={<SingleProduct />} />
          </Route>

          <Route path='remitos' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':remitoId' element={<SingleProduct />} />
          </Route>

          <Route path='marcas' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':marcaId' element={<SingleProduct />} />
          </Route>

          <Route path='rubros' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':rubroId' element={<SingleProduct />} />
          </Route>

          <Route path='transportistas' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':transportistaId' element={<SingleProduct />} />
          </Route> */}

          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
