import { useContext } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

// preparamos la card para recibir la información de la api, a través de 'data', que es el array dónde se encuentran todos nuestros elementos
const Card = (data) => {
    // de esta manera leemos el contexto global que creamos
    const context = useContext(ShoppingCartContext);
    
    // creamos una sola función que se ejecutara cuando el usuario haga click en la 'Card'
    const showProduct = (productDetail) => {
        // yo quiero que cuando el usuario de clic en cualquier parte de este contenedor, se abra el 'ProductDetail', y esto lo logramos ejecutando la función respectiva, ya que allá por defecto tiene estado 'false'
        context.openProductDetail()
        // tambien necesitamos que cada vez que nosotros le demos click a la 'Card', ella coja toda la información de la card y la mande a un nuevo estado en 'Context', donde se va a almacenar, para luego ser pintada en 'ProductDetail'
        // se agrega el argumento 'ProductDetail', porque esa es la información que tiene la card en ese momento
        context.setProductToShow(productDetail)
    }
    
    // creamos la función que va a agregar los productos al carrito de compras, el argumento 'productData' es para recibir la información de 'data.data' que se esta enviando desde la propiedad de 'onClick'
    const addProductsToCart = (productData) => {
        // necesitamos que cuando el usuario de click en el '+', se vaya incrementando el contador del carrito de compras
        context.setCount(context.count + 1)
        // ahora lo único que tenemos que hacer es modificar ese estado, lo que queremos que haga es que deje lo que ya existe y agregue lo nuevo que hay
        context.setCartProducts([...context.cartProducts, productData])
        console.log('CART: ', context.cartProducts)
    }

    return (
        <div className="bg-white w-56 h-60 cursor-pointer rounded-lg"
        // y aqui ejecutamos la función creada, al momento en que el usuario hace click
        // le entregamos como argumento 'data.data' porque esta es la estructura que tiene el array de la API, para poder tener acceso a todas las propiedades
        onClick={() => showProduct(data.data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.image} alt={data.data.title} />
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    // al dar click sobre la X, se ejcuta la función que agrega productos al carrito
                    onClick={() => addProductsToCart(data.data)}>
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