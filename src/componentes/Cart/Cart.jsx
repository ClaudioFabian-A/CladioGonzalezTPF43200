import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../Context/CarritoContext';
import CartItem from '../CartItem/CartItem';


const Cart = () => {

    const { cart, deleteCart, total, cantidad } = useContext(CarritoContext);
    
       
    
    if (cantidad === 0) {
        return (
            <>
                <h3>Carrito vacio</h3>
                <Link to='/'> Comenzar la compra</Link>


            </>
        )
    }
    return (
        <div>

            {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
            
            <h4>Cantiad de articulos : {cantidad}</h4>
            <h4>Total :$ {total}</h4>
            <button onClick={() => deleteCart()}>Vaciar el carrito</button>
            <Link to='/Checkout'> Finalizar la compra. </Link>


        </div>
    )
}

export default Cart
