import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';

const ItemListContainer = () => {

    const [articulos, setArticulos] = useState([]);
    const { idCat } = useParams();

    useEffect(() => {
        const misArticulos = idCat ? query(collection(db, "articulos"), where("idCat", "==", idCat)) : collection(db, "articulos");

        getDocs(misArticulos)
            .then(res => {
                const newArticulos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setArticulos(newArticulos)
            })
            .catch(<h2>Link dañado, no es posible comunicarse con la base de datos.</h2>)



    }, [idCat])

    return (
        <>
            <h2 style={{ textAlign: "center" }}> Articulos</h2>
            <ItemList articulos={articulos} />

        </>

    )
}
export default ItemListContainer 