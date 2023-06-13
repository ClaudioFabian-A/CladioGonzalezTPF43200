import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {db} from '../../services/config';
import {getDoc, doc} from 'firebase/firestore';



const ItemDetailContainer = () => {

   const [articulo, setArticulo] = useState(null);
   const { idItem } = useParams();

   useEffect(() => {
     
     const newDoc = doc(db, "articulos", idItem);

     getDoc(newDoc)
     .then(res=>{
      const data = res.data();
      const newProd = { id: res.id, ...data}
      setArticulo(newProd);
     }).catch(error=>console.log(error))
          
      
   }, [idItem])

   return (
      <div>
         <ItemDetail {...articulo} />
      </div>
   )


}
export default ItemDetailContainer