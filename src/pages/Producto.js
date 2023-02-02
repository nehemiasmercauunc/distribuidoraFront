import { Link } from 'react-router-dom';
import React from 'react'
import TipoProducto from '../components/TipoProducto';
import { useState, useEffect } from 'react';

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
// ]

function GetDataTipoProductos() {
    const [items, setItems] = useState([])
    const url = 'http://186.64.123.48/api.distri/api/tipoProductos';
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log('data', data);
                setItems(data);
            },
            )
    }, [])
    return items;
}



const Producto = () => {
    const [value, setValue] = useState({
        
            nombre: '',
            tipoProductoId: 0,
            tipoDuracionId: 0,
            proveedorId: 0,
            marcaId: 0,
            precioCosto: 0,
            minimo: 0,
            codigo: ''
    });
    const handleChange = (e) => {
        setValue((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
    console.log('value', value);
    // submit1 = (state) => {
    //     console.log('state', state);
    //     //get values from form and set to state
    //     const { nombre, tipoProductoId, tipoDuracionId, proveedorId, marcaId, precioCosto, minimo, codigo } = state;
    //     const producto = {
    //         nombre: nombre,
    //         tipoProductoId: tipoProductoId,
    //         tipoDuracionId: tipoDuracionId,
    //         proveedorId: proveedorId,
    //         marcaId: marcaId,
    //         precioCosto: precioCosto,
    //         minimo: minimo,
    //         codigo: codigo
    //     }
    //     console.log('producto', producto);
    //     const url = 'http://186.64.123.48/api.distri/api/producto'
    //     fetch(url, {
    //         method: 'POST',
    //         body: JSON.stringify(producto),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('data', data);
    //         })

    // }

    // let dataTipoProductos = GetDataTipoProductos();
    return (
        <>
            <div className="row">
                <div className="col-md-8">
                    <h2>Crear Nuevo Producto</h2>
                </div>
                <div className="col-md-4">
                    <div>
                        <Link to='/productos' className='btn btn-warning pull-right'>Volver al Listado</Link>
                    </div>
                </div>
            </div>

                <div className="form-horizontal form">
                    <hr />

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="control-label col-md-6">Nombre</label>
                                <div className="col-md-10">
                                    <input id="Nombre" name="nombre" value={value.nombre} onChange={handleChange} type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-md-6">Precio de Costo</label>
                                <div className="col-md-10">
                                    <input id="PrecioCosto" name="precioCosto" value={value.precioCosto} onChange={handleChange} type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-md-6">Mínimo</label>
                                <div className="col-md-10">
                                    <input id="Minimo" name="minimo" value={value.minimo} onChange={handleChange} type="number" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label">Código</label>
                                <div className="col-md-10">
                                    <input type="text" name="codigo" value={value.codigo} onChange={handleChange} className="form-control" />
                                </div>
                            </div>
                            <select name='select'>
                                <option value=''>-- Seleccione --</option>
                                <option value='1'>Chancho Feliz</option>
                                <option value='2'>Chanchito Feliz</option>
                                <option value='3'>Chanchito triste</option>
                                <option value='4'>Felipe</option>
                            </select>
                            {/* <TipoProducto data={dataTipoProductos} /> */}
                            <div className="form-group">
                                <div className="col-md-offset-2 col-md-10">
                                    <input type="submit" value="Crear Producto" className="btn btn-outline-success" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </>
    )
}

export default Producto;