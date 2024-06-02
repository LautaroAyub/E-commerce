import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { currentDate, totalPrice, totalProducts } from "../../Utils"
import TrashIcon from "../../Icons/TrashIcon";

const OrderCard = ({ id, imageUrl, title, price, quantity, type, indexOrder }) => {

  const {saveProductsInCartStorage,productsCartStorage, setProductsCartStorage, ordersInStorage,saveNewOrdersInStorage } = useContext(ShoppingCartContext)

  //Utils
  const indexProduct = (products, id) => (
    products.findIndex(element => element.id === id))
//| Functions to order in "CART"
  const updateQuantity = ({ id, num }) => {
    const updatedCartProducts = [...productsCartStorage];
    updatedCartProducts[indexProduct(productsCartStorage, id)].quantity = num;
    setProductsCartStorage([...updatedCartProducts])
    saveProductsInCartStorage(updatedCartProducts);
  }
  const deleteProductInCart = (id) => {
    const updatedCartProducts = [...productsCartStorage].filter(product => product.id !== id)
    setProductsCartStorage([...updatedCartProducts])
    saveProductsInCartStorage(updatedCartProducts);
  }

  // Functions to "ORDERS" already placed

  const editOrder = ({ id, num, typeEdit }) => {
    // Copy the current orders
    const updatedOrders = [...ordersInStorage]
    // Find the order to edit
    const orderEdited = updatedOrders[indexOrder]
    // Find the index of the product to change
    const indexProductToChange = indexProduct(orderEdited.products, id)
    if (typeEdit === "quantity") {
      // Update the quantity of the product
      orderEdited.products[indexProductToChange].quantity = num
    }
    if (typeEdit === "delete") {
      orderEdited.products.splice([indexProductToChange], 1)
    }

    // Replace the order with the new information
    updatedOrders[indexOrder] = {
      ...orderEdited,
      date: currentDate(),
      products: orderEdited.products,
      totalProducts: totalProducts(orderEdited.products),
      totalPrice: totalPrice(orderEdited.products)
    }
    saveNewOrdersInStorage(updatedOrders);
  }


  return (
    <div className="flex justify-between items-center m-2">
      <div className="flex items-center ">
        <figure className="w-20 h-20">
          <img className="h-full w-full rounded-lg object-cover" src={imageUrl} alt="" />
        </figure>
        <p className="text-sm font-light px-3 ">{title}</p>
      </div>
      {type == "order-in-cart" && (
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
              <TrashIcon size={"5em"} /></span>

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
            }}>

            {Array.from({ length: 10 }, (_, index) => (
              <option key={index} value={index + 1}>{index + 1}</option>
            ))}
          </select>

          <div className="flex flex-col items-end h-full justify-around">
            <span className="cursor-pointer" onClick={() =>
              editOrder({
                id: id, typeEdit: "delete"
              })}>
              <TrashIcon /></span>
            <p className="text-lg font-medium">${price * quantity}</p>

          </div>
        </>
      )
      }

    </div>
  )

}
export default OrderCard