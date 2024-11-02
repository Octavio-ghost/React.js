import CartWidget from '../CartWidget/CartWidget'



import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className='relative bottom-16'>


        <div className='flex items-center justify-center p-9'>
            <Link className='bg-gradient-to-br from-red-500 to-sky-500 w-96 h-20 flex items-center justify-center  ' to='/'>
            <h3 className='text-white  text-3xl'>MDZ 3D</h3>
            </Link>
        </div> 
        <div className='grid grid-cols-3 gap-8 p-5'>
               <Link className='text-white bg-gradient-to-b from-red-500 to-gray-500 flex items-center justify-center ' to='/category/Impresoras 3D'  >Impresoras 3D </Link>
               <Link className='text-white bg-gradient-to-b from-red-500 to-gray-500 flex items-center justify-center ' to='/category/Filamentos 3D' >Filamentos 3D </Link>
               <Link className='text-white bg-gradient-to-b from-red-500 to-gray-500 flex items-center justify-center ' to='/category/Accesorios 3D' >Accesorios 3D </Link>
        </div> 
        <div className='absolute right-20 top-28'><CartWidget /></div>  
             
             </div>
    )
}
export default NavBar