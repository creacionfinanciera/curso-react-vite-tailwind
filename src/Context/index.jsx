import { createContext, useState } from 'react';

// aqui estamos creando el contexto o estado global, pero el necesita proveer a los otros componentes de esta información, y la forma de hacerlo es con un 'provider'
export const ShoppingCartContext = createContext();

// ahora vamos a crear un componente en esta página, que va a retornar ese proveedor, pero el tiene que ser como un 'wrapper', es decir, dentro de él tienen que vivir todos los componentes de la aplicación
// va a funcionar como si fuera el layout que creamos, va a recibir unos hijos para retornar esos hijos, es decir, a través de children se va a recibir todo el componente de 'App', que es donde se encuentra toda nuestra aplicación, por lo tanto desde allá, importamos este componente
export const ShoppingCartProvider = ({ children }) => {
    
    // creamos el estado global con las caracteristicas de un contador, ya que necesitamos incrementar el número de articulos incluidos en el carrito de compras
    // el valor inicial va ser '0', ya que al principio el carrito está vacío
    const [ count, setCount ] = useState(0);
    // console.log('COUNT: ', count)

    // creamos un nuevo estado global para visualizar o no visualizar el component 'ProductDetail'
    // si el usuario le da clic en la 'Card', el 'ProductDetail' se tiene que visualizar, pero si yo le doy Clic en la `X` se tiene que esconder
    // lo vamos hacer a través de una variable que tiene que estar en 'true' o en 'false', y esa variable me va a mostrar o no, el 'ProductoDetail', pero quien va a controlar que se muestre o no, es cada una de las 'cards'
    // el valor por inicial va a ser 'false' por defecto, porque recien entremos a la aplicación, no queremos que sea vea ese menú abierto, sino que solamente se abra cuando le demos clic en la 'Card'
    const [ isProductDetailOpen, setIsProductDetailOpen ] = useState(false);
    // ahora vamos a crear dos funciones que se van a encargar de cambiar el valor de 'isProductDetailOpen' cuando sean ejecutadas, para que sea 'true' o sea 'false'
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // creamos un nuevo estado global para pintar la 'Card' seleccionada en 'ProductDetail', este estado debe almacenar la información de la 'Card'
    // cómo la API nos devuelve un array con varios objetos al entregarnos la información, y este estado se trata de almacenar esa información, entonces el estado inicial va a ser un objeto vacío
    const [productToShow, setProductToShow] = useState({});


    return (
        // llamamos al proveedor del contexto que sería el wrapper, pero ese wrapper tiene que ser quien provea la información del contexto
        // y para que 'ShoppingCartContext.Provider' pueda proveer la información del estado a los diferentes hijos, le definimos la propiedad 'value'
        // entonces lo que estamos diciendo es que 'ShoppingCartContext.Provider' va a tener un hijo, que en este caso es el componente 'App', es decir, toda la aplicación (todos los componentes), y este hijo debe poder leer 'count' y tambien cualquier componente puede modificar ese valor de count con 'setCount'
        // le damos a nuestro proveedor las dos funciones creadas que afectan a 'ProductDetail'
        // tambien le damos a nuestro proveedor las dos variables de nuestro nuevo estado, para enviarlas a 'ProductDetail'
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow, 
            setProductToShow
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
} 