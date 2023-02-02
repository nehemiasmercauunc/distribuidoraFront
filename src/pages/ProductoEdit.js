import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function GetDataProduct() {
  const { productoId } = useParams();
  console.log(productoId);
  const [items, setItems] = useState([])
  const url = 'http://186.64.123.48/api.distri/api/producto/' + productoId;
  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      },
      )
  }, [])
  return items;
}


const ProductoEdit = () => {
  const { nombre, precioCosto, codigo, minimo } = GetDataProduct();

  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <h2>Editar Producto</h2>
        </div>
        <div className="col-md-4">
          <div>
            <Link to='/productos' className='btn btn-outline btn-warning pull-right'>Volver al Listado</Link>
          </div>
        </div>
      </div>
      <div className="form-horizontal form">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="col-md-4 control-label">Nombre</label>
              <div className="col-md-10">
                <input type="text" className="form-control" value={nombre} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 control-label">Precio de Costo</label>
              <div className="col-md-10">
                <input type="text" id="PrecioCosto" className="form-control" value={precioCosto} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 control-label">Minimo</label>
              <div className="col-md-10">
                <input type="text" className="form-control" value={minimo} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 control-label">Código</label>
              <div className="col-md-10">
                <input type="text" className="form-control" value={codigo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>



  );
};

export default ProductoEdit;
