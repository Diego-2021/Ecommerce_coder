import React from 'react'
import { useHistory } from 'react-router'


export const ItemDetail = ({ id, name, price, img, description, category} ) => {

    const {goBack, push} = useHistory()

    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{description}</p>
            <h4>Precio: ${price}</h4>
            <h4>Categoria:{category}</h4>
            {/* Montar el boton de compra con opciones de cantidades*/}

            <button 
                className="btn btn-primary"
                onClick={() => goBack()}
            >
                Volver
            </button>

            <button onClick={() => push("/")}>
                Inicio
            </button>
        </div>
    )
}
