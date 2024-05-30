import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import CartIcon from "../../Icons/CartIcon";
import CashIcon from "../../Icons/CashIcon";
import DateIcon from "../../Icons/DateIcon";
import TrashIcon from "../../Icons/TrashIcon";

const OrdersCard = ({ totalPrice, totalProducts, date, indexOrder }) => {

    const { ordersInStorage, saveNewOrdersInStorage } = useContext(ShoppingCartContext)

    //Utils
    const deleteOrder = (e) => {
        e.preventDefault()
        const isConfirmed = window.confirm('¿Estás seguro de que deseas eliminar esta orden?');
        if (isConfirmed) {
            const updateOrders = [...ordersInStorage]
            updateOrders.splice([indexOrder], 1)
            saveNewOrdersInStorage(updateOrders)
        }
    }

    return (
        <div className="flex flex-row items-center justify-between w-80 h-16 mb-3 rounded-lg border border-black">

            <div className="flex flex-col ">

                <p className="flex flex-row ml-2">
                    <CartIcon />
                    <span className="ml-1">
                        {totalProducts} articles
                    </span>
                </p>
                <p className="flex flex-row ml-2">
                    <DateIcon />
                    <span className="ml-1">
                        {date}
                    </span>
                </p>
            </div>
            <div
                className="flex flex-row items-end mb-1 mr-2">
                <CashIcon />
                <span className="text-xl font-medium ml-1"> ${totalPrice}</span>
            </div>
            <div className="flex flex-col items-end">
                <div className="p-1" onClick={
                    (e) => { deleteOrder(e) }}>
                    <TrashIcon />
                </div>
            </div>


        </div>
    )
}
export default OrdersCard