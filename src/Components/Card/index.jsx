import { useContext } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

// preparamos la card para recibir la información de la api, a través de 'data', que es el array dónde se encuentran todos nuestros elementos
const Card = (data) => {
    // de esta manera leemos el contexto global que creamos
    const context = useContext(ShoppingCartContext);
    
    return (
        <div className="bg-white w-56 h-60 cursor-pointer rounded-lg"
        // yo quiero que cuando el usuario de clic en cualquier parte de este contenedor, se abra el 'ProductDetail', y esto lo logramos ejecutando la función respectiva, ya que alla por defecto tiene estado 'false'
        onClick={() => context.openProductDetail()}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.image} alt={data.data.title} />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    // necesitamos que cuando el usuario de click en el '+', se vaya incrementando el contador del carrito de compras
                    onClick={() => context.setCount(context.count + 1)}>
                    {/* este es el icono del + traido de la librería 'Heroicons' */}
                    <PlusIcon className="size-6 text-black"></PlusIcon>
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light truncate mr-2">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>   
    )
}

export default Card;