
import { Link } from 'react-router-dom'



const Item = ({ id, name, img, price, stock, category }) => {
    return (
        <div className='flex justify-center items-center'>
            <article className='max-h-max p-4 border border-red-700    '>
                <header className='bg-white'>
                    <h2 className='text-black'>                   
                         {name}
                    </h2>
                </header>
                <picture className='flex items-center justify-center bg-white'>
                    <img src={img} alt={name} className='max-h-96 max-w-48' />
                </picture>
                <section className='bg-white'>
                    <p className='text-black'>
                        Precio: ${price}
                    </p>
                    <p className='text-black'>
                        Categoria: {category}
                    </p>

                    <p className='text-black'>
                        Stock disponible: {stock}
                    </p>
                </section>
                <footer className='bg-red-800 m-4 border border-black '>
                    <Link to={`/item/${id}`} className='text-white' >Ver detalle</Link>
                </footer>
            </article>
        </div>

    )
}


export default Item