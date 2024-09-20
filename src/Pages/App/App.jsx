import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context/index'
import { NavigationContextProvider } from '../../Context/NavigationContext'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../Notfound'
import SignIn from '../SignIn'
import { NavBar } from '../../Components/NavBar'
import './App.css'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import ButtonUtils from '../../Components/ButtonUtils'
import SignUp from '../SignUp'

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
    { path: "/sign-in", element: <SignIn /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "my-account", element: <MyAccount /> },
    { path: "/*", element: <NotFound /> },
  ])
  return routes
}
const App = () => {

  return (
    <NavigationContextProvider>
    <ShoppingCartProvider>
      <BrowserRouter>

        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu/>
      <ButtonUtils/>
      </BrowserRouter>
    </ShoppingCartProvider>
    </NavigationContextProvider>

  )
}

export default App
