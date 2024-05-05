import { useContext } from "react"
import { Link } from "react-router-dom"
import CloseIcon from "../../Icons/CloseIcon"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../OrderCard"
import { currentDate, totalPrice } from "../../Utils"


const CheckoutSideMenu = () => {
    const {isCheckoutSideMenuOpen, toggleCheckoutSideMenu,cartProducts,setOrder,order,setCartProducts, setSearchByTitle } = useContext(ShoppingCartContext) 

    const handleCheckout=() => {
     const totalProducts= cartProducts.reduce((total,product)=>total+product.quantity,0);
     
        const orderToAdd={
            id:Math.random().toString(36).substr(2, 9) ,
            date:currentDate(),
            products:cartProducts,
            totalProducts:totalProducts,
            totalPrice:totalPrice(cartProducts)
        }
        setOrder([...order,orderToAdd])
 
        
        setCartProducts([])
        setSearchByTitle("")
        toggleCheckoutSideMenu();

    }

    return (
        <aside
            className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} overflow-hidden w-[360px] h-[calc(100vh-80px)] top-[68px]  flex-col fixed  right-0 border border-black rounded-r-lg bg-white `} 
        >

            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl ">
                    My Order</h2>
                <div onClick={() => toggleCheckoutSideMenu()} className="cursor-pointer">
                    <CloseIcon h='6' w='6' />
                </div>
            </div>

        <div className=" flex-1 px-6  overflow-x-hidden overflow-y-scroll">
           {
            cartProducts.map((product) =>(
                <OrderCard 
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
                quantity={product.quantity}
                
                />
            ))
        }
         </div>
           <div className="px-6">
             <p className="flex justify-between items-center mb-2"> 
                <span className="font-light ">Total:</span>
                <span className="font-medium text-2xl ">{totalPrice(cartProducts)}</span>
             </p>
           </div>
           <Link to="/my-orders/last">
        <button className="bg-black self-center py-3 m-6 text-white w-[90%] rounded-lg" onClick={
           ()=>handleCheckout()}>Checkout</button>
        </Link>
        </aside>
    )
}
export default CheckoutSideMenu