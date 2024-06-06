import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import './styles.css';

const ProductDetail = () => {
    
    // de esta manera leemos el contexto global que creamos
    const context = useContext(ShoppingCartContext);
    
    return (
        // aqui vamos a crear una clase personalizada 'product-detail' para manipular directamente con css algo que tailwind no tiene configurado de forma generica
        // tambien necesitamos que este 'ProductDetail', se muestre o no se muestre dependiendo del valor de 'isProductDetailOpen'
        // necesitamos meter dentro de las clases de tailwind una lógica adicional, le vamos a decir entonces que cuando el estado 'isProductDetailOPen' sea 'true', le coloque la clase 'flex', y que cuando sea 'false', le coloque la clase 'hidden'
        // para lo anterior encerramos todo con las comillas invertidas ``
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    {/* este es el icono de la X traido de la librería 'Heroicons' */}
                    <XMarkIcon className="size-6 text-black"></XMarkIcon>
                </div>
            </div>    
        </aside>
    )
}

export default ProductDetail;