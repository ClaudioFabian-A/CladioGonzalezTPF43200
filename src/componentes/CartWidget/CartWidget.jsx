import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';


const CartWidget = () => {
 const {cantidad} = useContext(CarritoContext);

    const carrito = "https://www.goodfreephotos.com/albums/vector-images/shopping-cart-vector-clipart.png";
    return (
        <>
            <Link to ='/cart'>
                <img src={carrito} className='imgCarrito' />
                {
                    cantidad > 0 && <spam>{cantidad}</spam>
                }
               

            </Link>
        </>
    )
}

export default CartWidget
