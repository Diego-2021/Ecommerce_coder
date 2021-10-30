import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../firebase/config'
import { Loader } from '../Loader/Loader'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(UIContext)


    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const db = getFirestore()
        const productos = categoryId
            ? db.collection('productos').where('category', '==', categoryId)
            : db.collection('productos')

        productos.get()
            .then((response) => {
                const newItems = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })

                setItems(newItems)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            }
            )

    }, [categoryId, setLoading])

    return (
        <section className="container my-5">
            {
                loading
                    ? <Loader/>
                    : <ItemList productos={items} />
            }

        </section>
    )
}