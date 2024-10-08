import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { NavigationContext } from "../../Context/NavigationContext"
import { currentDate, totalPrice, totalProducts } from "../../Utils"
import CloseIcon from "../../Icons/CloseIcon"
import OrderCard from "../OrderCard"


const CheckoutSideMenu = () => {
    const {productsCartStorage,deleteProductsInCartStorage, setSearchByTitle, ordersInStorage,saveNewOrdersInStorage } = useContext(ShoppingCartContext)

    const { isCheckoutSideMenuOpen, toggleCheckoutSideMenu } = useContext(NavigationContext)


    const handleCheckout = (e) => {
        if(productsCartStorage.length===0){
            e.preventDefault()
            alert("You have to add products to your cart to checkout")
            return
        } 
        
        const orderToAdd = {
            id: Math.random().toString(36).substr(2, 9),
            date: currentDate(),
            products: productsCartStorage,
            totalProducts: totalProducts(productsCartStorage),
            totalPrice: totalPrice(productsCartStorage)
        }
        const newOrders=[...ordersInStorage,orderToAdd]
        saveNewOrdersInStorage(newOrders)
        deleteProductsInCartStorage()
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
                    productsCartStorage.map((product) => (
                        <OrderCard
                        type="order-in-cart"
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
                    <span className="font-medium text-2xl ">{totalPrice(productsCartStorage)}</span>
                </p>
            </div>
            <Link to="/my-orders/last">
                <button className="bg-black self-center py-3 m-6 text-white w-[90%] rounded-lg" onClick={
                    (e) => handleCheckout(e)}>Checkout</button>
            </Link>
        </aside>
    )
}
export default CheckoutSideMenu