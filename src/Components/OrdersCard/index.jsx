import CartIcon from "../../Icons/CartIcon";
import CashIcon from "../../Icons/CashIcon";
import DateIcon from "../../Icons/DateIcon";

const OrdersCard = (props) => {
    const { totalPrice, totalProducts, date } = props;


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

            <p className="flex flex-row items-end">
                <CashIcon />
                <span className="text-xl font-medium ml-1"> ${totalPrice}</span>
            </p>




        </div>

    )

}
export default OrdersCard