import { useState, createContext } from "react";

export const CarritoContext = createContext({
    cart: [],
    total: 0,
    cantidad: 0
});

export const CarritoProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidad, setCantidad] = useState(0);




    const agregarProducto = (item, cantidad) => {

        const isInCart = cart.find(prod => prod.item.id === item.id);

        if (!isInCart) {
            setCart(prev => [...prev, { item, cantidad }]);
            setCantidad(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));

        } else {
            const newCart = cart.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
            setCart(newCart);
            setCantidad(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));

        }
    };

    const deleteProducto = (id) => {
        const newCart = cart.filter(prod => prod.item.id !== id);
        const deleteArt = cart.find(prod => prod.item.id === id);
        setCart(newCart);
        setCantidad(prev => prev - deleteArt.cantidad);
        setTotal(prev => prev - (deleteArt.item.precio * deleteArt.cantidad));

    };
    const deleteCart = () => {
        setCart([]);
        setTotal(0);
        setCantidad(0);
    };

    return (

        <CarritoContext.Provider value={{ total, cantidad, cart, agregarProducto, deleteProducto, deleteCart }}>

            {children}

        </CarritoContext.Provider>
    )
}