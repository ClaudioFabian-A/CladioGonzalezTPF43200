import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../Context/CarritoContext';
import { useContext } from 'react';


const ItemDetail = ({ id, nombre, precio, img, stock }) => {
    const [agregar, setAgregar] = useState(0);

    const { agregarProducto } = useContext(CarritoContext);

    const manejadorUnid = (cantidad) => {
        setAgregar(cantidad);

        const item = { id, nombre, precio };

        agregarProducto(item, cantidad);
    }

    return (
        <div className="cardIt">
            <h2>Articulo:{nombre}</h2>
            <h3>Precio: {precio}</h3>
            <h3>codico: {id}</h3>
            <img src={img} alt={nombre} className='img' />
            {
                agregar > 0 ? (<><Link to="/cart">terminarcompra</Link><Link to="/">Continuar conprando</Link></>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorUnid} />)
            }
        </div>
    )
}
export default ItemDetail