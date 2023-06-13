import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';



const CartItem = ({item, cantidad,}) => {

    const { deleteProducto } = useContext(CarritoContext);


    return (
        <div>
            <h3>{item.nombre}</h3>            
            <p>Cantidad : {cantidad}</p>            
            <p>Precio :${item.precio}</p>
            <button onClick={() => deleteProducto(item.id)}>Eliminar articulio</button>

        </div>
    )
}

export default CartItem
