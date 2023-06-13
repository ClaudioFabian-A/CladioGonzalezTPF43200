import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'


const ItemList = ({ articulos }) => {
    return (
        <div className="art2">
            {articulos.map(art => <Item key={art.id} {...art} />)}
        </div>
    )
}

export default ItemList
