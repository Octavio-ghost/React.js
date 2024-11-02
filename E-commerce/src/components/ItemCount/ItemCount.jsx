
import { useState } from 'react'



function ItemCount() {
    const [count, setCount] = useState(0)

    const HandleAdd = () => setCount(count + 1)
    const HandleSub = () => setCount(count - 1)


    return (
        <div>
            <p className='text-black'>{count}</p>

            <button className='bg-red-600 m-5' onClick={HandleSub}>-</button >

            <button className='bg-cyan-700'>Agregar al carrito</button>

            <button className=" bg-red-600 m-5" onClick={HandleAdd}>+</button>
        </div>
    )


}
export default ItemCount 