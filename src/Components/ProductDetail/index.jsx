import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import './styles.css';

const ProductDetail = () => {
    
    // de esta manera leemos el contexto global que creamos
    const context = useContext(ShoppingCartContext);
    // console.log('PRODUCT TO SHOW: ', context.productToShow);
    
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
                    <XMarkIcon 
                    className="size-6 text-black cursor-pointer"
                    // cuando demos click en la X, necesitamos que se cierre el 'ProductDetail', entonces simplemente llamamos la función que ya habiamos escrito en nuestro contexto global
                    onClick={() => context.closeProductDetail()}
                    ></XMarkIcon>
                </div>
            </div>
            <figure className='px-6'>
                <img 
                    className='w-full h-full rounded-lg' 
                    src={context.productToShow.image} 
                    alt={context.productToShow.title} 
                />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>    
        </aside>
    )
}

export default ProductDetail;