import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import Layout from "../../Components/Layout";
import OrderCard from '../../Components/OrderCard';

function MyOrder() {
    
    const context = useContext(ShoppingCartContext);
    
    return (
        <Layout>
            MyOrder
            <div className='flex flex-col w-80'>
            { /* si tienes una orden, entonces me vas a mostrar el último elemento de esa orden */
                context.order.slice(-1)[0].products.map(product => (
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