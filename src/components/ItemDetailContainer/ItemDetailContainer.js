import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'
import { getFirestore } from '../../firebase/config'
import { ItemDetail } from './ItemDetail'



export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const db = getFirestore()
        const productos = db.collection('productos')
        const item = productos.doc(itemId)

        item.get()
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [itemId, setLoading])

    return (
        <div>
            {
                loading
                    ? <Loader />
                    : <ItemDetail {...item} />
            }
        </div>
    )
}
