import { useState, useEffect } from 'react';
import { json, Link } from 'react-router-dom';

function GetDataProducts() {
  const [items, setItems] = useState([])
  const url = 'http://186.64.123.48/api.distri/api/productos';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log('data',data);
        setItems(data);
      },
      )
  }, [])
  return items;
}


const Products = () => {
  let data = GetDataProducts();

  return (
    <section className='section'>
      <div className="row">
        <div className="col-md-12">
          <h2>Listado de Productos</h2>
          <hr />
          <p>
            <Link to='/productos/nuevo' className='btn btn-outline btn-primary pull-left'>Crear Nuevo Producto</Link>
            <Link to='/' className='btn btn-outline btn-warning pull-right'>Volver al Inicio</Link>
          </p>
        </div>
      </div>
      <hr />


      <div className='row'>
        <div className='col-md-12'>
          <table className='table table-striped table-bordered datatable' data-excel='true' data-pdf='true' data-imprimir='true'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio de Costo</th>
                <th>Mínimo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((product) => {
                  return (
                    <tr key={product.productoId}>
                      <td>{product.nombre}</td>
                      <td>{product.precioCosto}</td>
                      <td>{product.minimo}</td>
                      <td>
                        <Link to={`/productos/editar/${product.productoId}`} className='btn btn-outline btn-primary'>Editar</Link>
                        <Link to={`/productos/eliminar/${product.productoId}`} className='btn btn-outline btn-danger'>Eliminar</Link>
                      </td>
                    </tr>
                  );
                }
                )
              }
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
};

export default Products;
