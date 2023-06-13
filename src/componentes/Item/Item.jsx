import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'






const Item = ({ id, nombre, precio, img, descripcion }) => {
  return (
    <div className='itemC'>
      <img src={img} alt={nombre} className='imgI' />
      <h3>Articulo: {nombre}</h3>
      <h4>{descripcion}</h4>
      <h4>Precio: ${precio}</h4>
      <h5>Id Producto: {id}</h5>
      <Link to={`/item/${id}`}>Detalle</Link>

    </div>
  )
}

export default Item




