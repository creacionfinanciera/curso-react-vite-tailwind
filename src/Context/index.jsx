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

    return (
        // llamamos al proveedor del contexto que sería el wrapper, pero ese wrapper tiene que ser quien provea la información del contexto
        // y para que 'ShoppingCartContext.Provider' pueda proveer la información del estado a los diferentes hijos, le definimos la propiedad 'value'
        // entonces lo que estamos diciendo es que 'ShoppingCartContext.Provider' va a tener un hijo, que en este caso es el componente 'App', es decir, toda la aplicación (todos los componentes), y este hijo debe poder leer 'count' y tambien cualquier componente puede modificar ese valor de count con 'setCount'
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
} 