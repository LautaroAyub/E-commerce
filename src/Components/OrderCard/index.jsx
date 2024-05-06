import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import CloseIcon from "../../Icons/CloseIcon"
import { currentDate, totalPrice, totalProducts } from "../../Utils"
import TrashIcon from "../../Icons/TrashIcon";

const OrderCard = ({ id, imageUrl, title, price, quantity, type, indexOrder }) => {
  const { setCartProducts, cartProducts, setOrder, order } = useContext(ShoppingCartContext)

  //Utils | Functions
  const indexProduct = (products, id) => (
    products.findIndex(element => element.id === id))



  const updateQuantity = ({ id, num }) => {
    const updatedCartProducts = [...cartProducts];
    updatedCartProducts[indexProduct(cartProducts, id)].quantity = num;
    setCartProducts(updatedCartProducts);
  }
  const deleteProductInCart = (id) => {
    const updatedCartProducts = [...cartProducts].filter(product => product.id !== id)

    setCartProducts(updatedCartProducts);
  }


  //for orders

  const editOrder = ({ id, num, typeEdit }) => {
    // Copy the current orders
    const updatedOrders = [...order]
    // Find the order to edit
    const orderEdited = updatedOrders[indexOrder]
    // Find the index of the product to change
    const indexProductToChange = indexProduct(orderEdited.products, id)


    if (typeEdit === "quantity") {
      // Update the quantity of the product
      orderEdited.products[indexProductToChange].quantity = num}


    if (typeEdit === "delete") {
     orderEdited.products.splice([indexProductToChange],1)}
   
          // Update the order with the new information
          updatedOrders[indexOrder] = {
            ...orderEdited,
            date: currentDate(),
            products: orderEdited.products,
            totalProducts: totalProducts(orderEdited.products),
            totalPrice: totalPrice(orderEdited.products)
          }
    setOrder(updatedOrders);
  }






  return (
    <div className="flex justify-between items-center m-2">
      <div className="flex items-center ">
        <figure className="w-20 h-20">
          <img className="h-full w-full rounded-lg object-cover" src={imageUrl} alt="" />
        </figure>
        <p className="text-sm font-light px-3 ">{title}</p>


      </div>
      {type !== "order" && (
        <>
          <select
            value={quantity}
            onChange={(e) => { updateQuantity({ id, num: parseInt(e.target.value) }) }}
          >
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index} value={index + 1}>{index + 1}</option>
            ))}
          </select>
          <div className="flex flex-col items-end h-full justify-around">
            <span className="cursor-pointer" onClick={() => deleteProductInCart(id)}>
              <TrashIcon  /></span>

            <p className="text-lg font-medium">${price * quantity}</p>
          </div>
        </>
      )}
      {type === "order" && (

        <>
          <select
            value={quantity}
            onChange={(e) => {
              editOrder({ id: id, num: parseInt(e.target.value), typeEdit: "quantity" })
            }}
          >
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index} value={index + 1}>{index + 1}</option>
            ))}
          </select>

          <div className="flex flex-col items-end h-full justify-around">
            <span className="cursor-pointer" onClick={() =>
              editOrder({
                id: id, typeEdit:"delete"
              })}>
              <TrashIcon  /></span>
            <p className="text-lg font-medium">${price * quantity}</p>

          </div>
        </>
      )

      }

    </div>
  )

}
export default OrderCard