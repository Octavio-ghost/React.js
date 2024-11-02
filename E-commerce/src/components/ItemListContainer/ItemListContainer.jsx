import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from '../../data/asynProducts'
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'





const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
         const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])



    return (
        <div  className=" flex items-center justify-center h-2/6 w-sw">

            <h1>{greeting}</h1>
            
            <ItemList className='flex items-center justify-center' products={products} />
        </div>
    )


}
export default ItemListContainer