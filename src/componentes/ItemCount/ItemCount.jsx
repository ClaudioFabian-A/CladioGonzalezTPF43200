import './ItemCount.css';
import { useState } from 'react'



const ItemCount = ({ inicial, stock, funcionAgregar }) => {

    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }


    }
    return (
        <>
            <div className='boton2'>
                <button className='onclick' onClick={decrementar}> -</button>
                <p>{contador}</p>
                <button className='onclick' onClick={incrementar}> + </button>



            </div>
            <button className='onclick' onClick={() => funcionAgregar(contador)}> Agregar al carrito </button>
        </>
    )
}

export default ItemCount
