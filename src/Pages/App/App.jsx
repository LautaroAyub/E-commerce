import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../Notfound'
import SingIn from '../SingIn'
import { NavBar } from '../../Components/NavBar'
import './App.css'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sing-in", element: <SingIn /> },
    { path: "my-account", element: <MyAccount /> },
    { path: "/*", element: <NotFound /> },
  ])
  return routes
}
const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>

        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu/>

      </BrowserRouter>
    </ShoppingCartProvider>

  )
}

export default App
