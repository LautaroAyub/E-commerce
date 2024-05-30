import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import ButtonBackToHome from "../../Components/ButtonUtils/ButtonBackToHome"


function MyOrders() {
  const { ordersInStorage:order } = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className="flex justify-between w-72">
        <ButtonBackToHome />
        <div className="flex items-center justify-center w-80 mb-4">
          <h1 className="font-medium text-xl">My Orders</h1>
        </div>
      </div>

      { order?.length === 0 &&
        <div className="h-full flex justify-center items-center">
          <p >No hay ordenes registradas</p>
        </div>
      }

      
      {order?.map((order, index) => (
          <>
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                indexOrder={index}
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
                date={order.date}

              />
            </Link>
          </>
        ))

      }
    </Layout>
  )
}

export default MyOrders