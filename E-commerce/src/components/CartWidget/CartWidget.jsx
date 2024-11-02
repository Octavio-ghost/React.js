import cart from './assets/cart.svg'


const CartWidget = () => {
    const cartItemCount = 0; // Número de artículos en el carrito

    return (
        <div className="bg-slate-200 h-11 w-16 grid grid-cols-2 absolute bottom-4 left-52 rounded-md  ">
            <img className='w-16  relative top-1 left-1' src={cart} alt="cart-widget" />
            <span className="text-black relative top-1">{cartItemCount}</span>
        </div>
    );
};

export default CartWidget
