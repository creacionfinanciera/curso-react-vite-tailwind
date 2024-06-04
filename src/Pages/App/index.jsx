// en las importaciones siempre va primero todo lo de react
import { useRoutes, BrowserRouter } from 'react-router-dom';
// después los componentes
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import Navbar from '../../Components/Navbar'
// y finalmente el css
import './App.css'

// creamos una función donde vamos a utilizar el hook, para asignar cada uno de nuestros componentes a un enrutador, dentro de un objeto
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
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
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App;
