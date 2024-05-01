import { useContext } from "react"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"
import { Link } from "react-router-dom"
import BackChevronIcon from "../../Icons/BackChevronIcon"

function MyOrder() {
  const {order } = useContext(ShoppingCartContext) 
  const currentPath= window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf("/")+1)
  if(index==="last") index=order?.length-1;
  return (
      <Layout>
         <div className="flex justify-between w-72">
        <Link to="/my-orders">
          <BackChevronIcon />
        </Link>
            <h1> MyOrder</h1>
      </div>
    <div className=" flex flex-col w-80">
           {
            
            order?.[index]?.products.map((product) =>(
                <OrderCard 
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
  