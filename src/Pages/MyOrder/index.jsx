import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard"
import BackChevronIcon from "../../Icons/BackChevronIcon"

function MyOrder() {

  const { order } = useContext(ShoppingCartContext)

  //utils
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1)
  if (index === "last") index = order?.length - 1;

  return (
    <Layout>
      <div className="flex justify-between w-72">
        <Link to="/my-orders">
          <BackChevronIcon />
        </Link>
        <div className="flex items-center justify-center w-80 mb-4">
          <h1 className="font-medium text-xl">My Order</h1>
        </div>


      </div>
      <div className=" flex flex-col w-80">
        {

          order?.[index]?.products.map((product) => (
            <OrderCard
            type="order"
            indexOrder={index}
              key={product.totalPrice}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              quantity={product.quantity}

            />
          ))
        }
      </div>
    </Layout>


  )
}

export default MyOrder
