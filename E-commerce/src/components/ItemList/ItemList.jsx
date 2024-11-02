
import Item from '../Item/Item'



function ItemList ({products}){
    return(
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-3/4 h-4/5'>
      {products.map(prod => <Item key={prod.id} {...prod}/>)}

     </div>
    )
}

export default ItemList