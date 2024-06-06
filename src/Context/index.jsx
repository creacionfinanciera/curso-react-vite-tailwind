import { createContext } from 'react';

// aqui estamos creando el contexto o estado global, pero el necesita proveer a los otros componentes de esta información, y la forma de hacerlo es con un 'provider'
const ShoppingCartContext = createContext();

// ahora vamos a crear un componente en esta página, que va a retornar ese proveedor, pero el tiene que ser como un 'wrapper', es decir, dentro de él tienen que vivir todos los componentes de la aplicación
// va a funcionar como si fuera el layout que creamos, va a recibir unos hijos para retornar esos hijos, es decir, a través de children se va a recibir todo el componente de 'App', que es donde se encuentra toda nuestra aplicación, por lo tanto desde allá, importamos este componente
export const ShoppingCartProvider = ({ children }) => {
    return (
        // llamamos al proveedor del contexto que sería el wrapper, pero ese wrapper tiene que ser quien provea la información del contexto
        <ShoppingCartContext.Provider>
            { children }
        </ShoppingCartContext.Provider>
    )
} 