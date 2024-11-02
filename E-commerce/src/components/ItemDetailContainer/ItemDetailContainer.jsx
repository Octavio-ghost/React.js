
import { useState, useEffect } from 'react'
import { getProductsById } from '../../data/asynProducts'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)

    const {itemId} = useParams()    

    useEffect(() => {
        getProductsById(itemId)
            .then(Response => {
                setProducts(Response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (

        <div className='ItemDetailContainer'>
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer
