import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Layout from "../../Components/Layout";
import OrderCard from '../../Components/OrderCard';

function MyOrder() {
    
    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    // esta variable es para cortar en la url todo aquello que está antes del último '/', incluyendo el último '/'
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = context.order?.length - 1  
    
    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-6 '>
                <Link to='/my-orders' className='absolute left-0'>
                    <ChevronLeftIcon className="size-6 text-black cursor-pointer" />
                </Link>
                <h1>My Order</h1>
            </div> 
            <div className='flex flex-col w-80'>
            { /* si tienes una orden, entonces me vas a mostrar el último elemento de esa orden */
                context.order?.[index]?.products.map(product => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                    />
                ))
            }
            </div>
        </Layout>
    )
}

export default MyOrder;