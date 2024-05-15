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
import ButtonUtils from '../../Components/ButtonUtils'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    {path:"/clothes",element: <Home />},
    {path:  "/electronics",element: <Home />},
    {path:"/jewelerys",element: <Home />},
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder/> },
    { path: "/my-orders/:id", element: <MyOrder/> },
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
      <ButtonUtils/>
      </BrowserRouter>
    </ShoppingCartProvider>

  )
}

export default App
