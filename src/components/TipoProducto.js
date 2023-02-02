// import { useState, useEffect } from 'react';
import React from 'react'
import Select from 'react-select'

const alert = (props) => {
    console.log(props);
}

const TipoProducto = ({ data}) => {
    data = data.map((item) => {
        const { tipoProductoId, nombre } = item;
        return { label: nombre, value: tipoProductoId }
    })


    return (
        <>
            <div className="form-group">
                <label className="col-md-4 control-label">Tipo de Producto</label>
                <div className="col-md-10">
                    <Select id="sssss" onChange={alert} options={data} />
                </div>
            </div>
        </>
    )
}

export default TipoProducto;
