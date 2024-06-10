// en las importaciones siempre va primero todo lo de react
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
// después los componentes
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';
// y finalmente el css
import './App.css'

// creamos una función donde vamos a utilizar el hook, para asignar cada uno de nuestros componentes a un enrutador, dentro de un objeto
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    // este es el último link de la página a la que nos lleva cuando damos click al botón de 'checkout'
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    // cualquier otra ruta que no hayamos especificado, se indica con '*'
    { path: '/*', element: <NotFound /> },
  ])

  return routes;
}

// en nuestro componente principal, llamamos la función 'AppRoutes' para ver reflejada la ruta en el navegador, para cada componente definido en la función
// también nos traemos nuestro Navbar
const App = () => {
  return (
    // encerramos todo dentro de nuestro componente 'ShoppingCartProvider' y ya estariamos listos para empezar a crear todos nuestros estados y para empezar a comunicar todos los componetes con este estado global
    <ShoppingCartProvider>
      <BrowserRouter>
      <AppRoutes />
      <Navbar />
      {/* Este menú lo ponemos aqui en 'App' y no en 'Home' porque queremos abrirlo desde varios lugares de la aplicación */}
      <CheckoutSideMenu />
    </BrowserRouter>
    </ShoppingCartProvider>
    
  )
}

export default App;
