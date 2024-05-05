import { useContext, useEffect, useState } from "react"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"


function MyOrders() {
  const { order } = useContext(ShoppingCartContext)
  //Local State to auto-render
  // const [orders, setOrders] = useState(order);

  // useEffect(() => {
  //   // gonna update when some order change
  //   setOrders(order);
  // }, [order]);
  console.log(order, "orders in MYORDERS")
  return (
    <Layout>


      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>

      </div>

      {
        
        order.map((order, index) => (
              <>
                <Link key={index} to={`/my-orders/${index}`}>
                  <OrdersCard
                    key={index}
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