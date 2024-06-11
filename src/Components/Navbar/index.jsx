import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

const Navbar = () => {
    
    const context = useContext(ShoppingCartContext);
    
    // esto en teoría, se toma de la página de React Router, pero no lo encontré allá, entonces estoy copiando como lo hizo la profe en el video, a ver si funciona
    const activeStyle = 'underline underline-offset-4';

    return (
        // esta es la barra de navegación de la parte de arriba de la página principal
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            {/* este es el primer contenedor que va hacia el lado izquierdo del navbar */}
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        // vamos a escuchar el click, para enviarle la categoría que queremos que muestre
                        onClick={() => context.setSearchByCategory()}
                        // esto también se toma de la página de React Router, y se repite para todos los componentes
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        onClick={() => context.setSearchByCategory("men's clothing")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/jewelery'
                        onClick={() => context.setSearchByCategory('jewelery')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/others'
                        onClick={() => context.setSearchByCategory("women's clothing")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            {/* este es el segundo contenedor que va hacia el lado derecho del navbar */}
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    luiskentor@gmail.com
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Sign in
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    {/* este es el icono del carrito de compras traido de la librería 'Heroicons' */}
                    <ShoppingBagIcon className="size-6 text-black"></ShoppingBagIcon>
                    <div>{context.count}</div> 
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;