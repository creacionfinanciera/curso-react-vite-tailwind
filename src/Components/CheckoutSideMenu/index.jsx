import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import { totalPrice } from '../../utils';
import './styles.css';

const CheckoutSideMenu = () => {
    
    const context = useContext(ShoppingCartContext);
    // console.log('CART: ', context.cartProducts);

    // creamos una función para eliminar los productos cada vez que le demos click en la 'X', el parametro 'id' es el que me va a permitir cual es el elemento al que le estoy dando click
    const handleDelete = (id) => {
        // aqui le estoy diciendo, toma lo que ya tenía en 'cartProducts' pero quitale el producto que sea igual al 'id' que te estoy pasando como parametro
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        // le enviamos a nuestro estado, los productos filtrados
        context.setCartProducts(filteredProducts)
    } 
    
    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon 
                    className="size-6 text-black cursor-pointer"
                    onClick={() => context.closeCheckoutSideMenu()}
                    ></XMarkIcon>
                </div>
            </div>
            
            {/* aqui hasta el momento solamente tenemos un título y un ícono que nos cierra nuestro menú, pero nos hace falta pintar nuestras cards, para que se pinten dependiendo de lo que tenemos agregado en nuestro carrito  */}
            {/* vemos que como 'cartProducts' es un array, entonces necesitamos iterarlo como '.map', por cada producto necesitamos que pinte una 'OrderCar' */}
            {/* al final lo que le estamos diciendo es, en este 'aside' pintame por cada uno de los productos que yo ya tenga en mi carrito 'cartProducts', estos 4 elementos */}
            {/* como estamos renderizando la 'OrderCard' originalmente debe ir un 'return' para que lo podamos visualizar, y en este caso lo cambiamos por dos parentesis (), y asi no es necesario colocar la palabra 'return' */}
            {/* 'overflow-y-scroll' es para poder visualizar todos los productos que superan el alto de la pantalla, haciendo scroll, y que vayan apareciendo */}
            <div className='px-6 overflow-y-scroll'>
            {
                context.cartProducts.map(product => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        handleDelete={handleDelete}
                    />
                ))
            }
            </div>

            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts )}</span>
                </p>
            </div>
            
        </aside>
    )
}

export default CheckoutSideMenu;