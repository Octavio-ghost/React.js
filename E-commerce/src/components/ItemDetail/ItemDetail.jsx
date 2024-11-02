import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article className="bg-indigo-300 grid grid-cols-1 gap-10 p-5 border border-red-600">
            <header >
                <h2 className="text-black">{name}</h2>
            </header>


            <picture>
                <img className="h-5/6 w-11/12" src={img} alt={name} />
            </picture>
            <section>
                <p className="text-black">Categoria: {category}</p>
                <p className="text-black">Descripción:{description}</p>
                <p className="text-black">Precio: {price}</p>

            </section>
            <footer>
                <ItemCount intial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
            </footer>

        </article>
    )
}

export default ItemDetail