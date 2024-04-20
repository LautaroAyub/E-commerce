import { useRoutes,BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../Notfound'
import SingIn from '../SingIn'
import { NavBar } from '../../Components/NavBar'
import './App.css'

const AppRoutes=()=>{
  let routes=useRoutes([
    {path:"/", element:<Home/>},
    {path:"/my-order",element:<MyOrder/> },
    {path:"/my-orders",element:<MyOrders/> },
    {path:"/sing-in",element:<SingIn/> },
    {path:"my-account",element:<MyAccount/> },
    {path:"/*",element:<NotFound/> },
  ])
  return routes
}
const App= ()=> {
  
  return (
    <BrowserRouter>
    <AppRoutes/>
    <NavBar/>
    </BrowserRouter>
  )
}

export default App
