import { createContext, useState, useEffect } from 'react';

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

    // creamos un nuevo estado global para visualizar o no visualizar el component 'CheckoutSideMenu'
    const [ isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen ] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // creamos un nuevo estado global para pintar la 'Card' seleccionada en 'ProductDetail', este estado debe almacenar la información de la 'Card'
    // cómo la API nos devuelve un array con varios objetos al entregarnos la información, y este estado se trata de almacenar esa información, entonces el estado inicial va a ser un objeto vacío
    const [productToShow, setProductToShow] = useState({});

    // creamos un nuevo estado global que va a ser el carrito dónde se van a almacenar todos los productos que se vayan agregando
    // para el estado inicial tambien nos basamos en como viene la información desde la API, que es un array de objetos
    const [cartProducts, setCartProducts] = useState([]);

    // creamos un nuevo estado global que va a ser la orden de compra que se va a generar
    const [order, setOrder] = useState([]);

    // CREAMOS EL ESTADO
    // items, es la cajita, es dónde vamos a almacenar esos productos que vienen de nuestra API, vamos a atraparlos ahí, ese va a ser el valor original
    // setItems, es quien va a inyectar o va a setear el valor de los items, es decir, es quien va a almacenar en la cajita toda la información que necesitemos
    // dentro de (), vamos a poner un valor por defecto, que puede ser cualquier cosa dependiendo de lo que necesitemos, unas llaves indicando que va a ser un objeto en un futuro, o puede ser un array vacío, puede ser false, true, null. En este caso no queremos que tenga ningún valor inicial, entonces le ponemos 'null'
    const [ items, setItems ] = useState(null);

    // CONSUMO DE LA API
    // siempre que vayamos a hacer un consumo de una API en nuestra mente tiene que estar 'useEffect'
    // el [] al final, es el valor que nosotros queremos enviarle por defecto al principio, que en este caso no le vamos a enviar nada
    // fecth es quien llama a la API, y le ponemos el endoint que se encuentra en la documentación
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        // esta información viene en tipo promesa, entonces con '.then' resolvemos esa promesa, y adentro definimos la respuesta, y le decimos que la queremos en formato '.json'
        // y despues lo que tenemos que hacer es transformar esa información, para que nos funcione como nosotros las necesitamos
            // podemos usar el console.log siempre para saber cual es el paso siguiente que necesitamos hacer
            // .then(response => console.log(response.json()))
            // asi es que nos damos cuenta que hay que resolver primero una promesa, y despues que necesitamos convertir la información al formato que necesitemos
            .then(response => response.json())
            // .then(data => console.log(data))
            // vemos que ahora si nos viene la información como nostros la necesitamos
        
            // y procedemos a almacenar esta información en el estado, como ya sabemos que 'setItems' es quien me va a ayudar a tomar la información y a guardarla en 'items', entonces usamos 'setItems'
            .then(data => setItems(data))

            // este manejo del error lo sugieren por fuera del video, entonces lo agrego
            //.catch(error => console.error('Error fetching data:', error))
            
    }, []);

    // este estado es para el Input de busqueda de productos por título
    const [ searchByTitle, setSearchByTitle ] = useState(null);
    console.log('searchByTitle: ', searchByTitle);

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
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
} 