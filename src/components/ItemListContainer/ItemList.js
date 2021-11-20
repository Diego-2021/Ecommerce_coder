import React from 'react'
import { Item } from './Item'

export const ItemList = ({ productos = [] }) => {

    return (
        <div className="container">
            
            <h4>Herramientas</h4>
            <hr />

            <div className="row">
                {productos.map((item) => <Item {...item} key={item.id} />)}
            </div>
        </div>
    )
}
