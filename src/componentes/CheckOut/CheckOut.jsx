

import './CheckOut.css';
import { useState, useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const CheckOut = () => {

    const { cart, deleteCart } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [emailConfirmacion, setEmailConfirnacion] = useState("");
    const [orderId, setOrderId] = useState("");



    const manejadorSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Complete todos los campos requeridos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los Email no son identicos");
            return;
        }
        const order = {

            items: cart.map(prod => ({
                id: prod.item.id,
                nombre: prod.item.nombre,
                cantidad: prod.cantidad,
            })),
            total: cart.reduce((total, prod) => total + prod.item.precio * prod.cantidad),
            nombre,
            apellido,
            telefono,
            email

        };




        addDoc(collection(db, "orders"), order)

            .then((docRef) => {
                setOrderId(docRef.id);
                deleteCart();

            })
            .catch((error) => {
                console.log("erro al cargar la orden", error);

                setError("intente mas terde");

            })

    }


    return (
        <div>
            <h2>Check Out</h2>
            <form onSubmit={manejadorSubmit} className="formulario">
                {cart.map(prod => (
                    <div key={prod.item.id}>
                        <p>{prod.item.nombre} x {prod.cantidad}</p>
                        <p>Precio: ${prod.item.precio}</p>
                        <hr />
                    </div>
                ))}

                <hr />

                
                <div className="formGroup">
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                
                <div className="formGroup">
                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="formGroup">
                    <label htmlFor="">Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="formGroup">
                    <label htmlFor="">Email</label>
                    <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="formGroup">
                    <label htmlFor="">Repita Email</label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirnacion(e.target.value)} />
                </div>
                {
                    error && <p> {error} </p>
                }
                <button type="submit"> finalizar la compra</button>

                {
                    orderId && (<strong className='orderId'>su numero de orden es : {orderId}</strong>)
                }
            </form>
        </div>
    )
}

export default CheckOut
