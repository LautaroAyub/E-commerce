import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import CloseIcon from "../../Icons/CloseIcon"

const OrderCard = (props) => {
  const { setCartProducts, cartProducts,setOrder,order } = useContext(ShoppingCartContext)
  const { id, imageUrl, title, price, quantity,type,indexOrder } = props;

  //Utils | Functions
  const indexProduct =(products,id)=>(
    products.findIndex(element => element.id === id))

  const updatedCartProducts = [...cartProducts];

  const updateQuantity = ({ id, num }) => {
    updatedCartProducts[indexProduct(cartProducts,id)].quantity = num;
    setCartProducts(updatedCartProducts);
  }
  const deleteProductInCart = (id) => {
    updatedCartProducts.splice([indexProduct(cartProducts,id)], 1);
    console.log(updatedCartProducts, "asdas")
    setCartProducts(updatedCartProducts);
  }


//for orders
  
  const editOrder=({id,num})=>{
    const updatedOrder=[...order]
   const productsInThisOrder= updatedOrder[indexOrder].products;
   const indexProductToChange=indexProduct(productsInThisOrder,id)
   productsInThisOrder[indexProductToChange].quantity = num;
   
    setOrder(updatedOrder)
  }



  return (
    <div className="flex justify-between items-center m-2">
      <div className="flex items-center ">
        <figure className="w-20 h-20">
          <img className="h-full w-full rounded-lg object-cover" src={imageUrl} alt="" />
        </figure>
        <p className="text-sm font-light px-3 ">{title}</p>

      </div>

 {(()=>{
  if(type!=="order"){
    return(
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
            <CloseIcon h='6' w='6' /></span>
  
          <p className="text-lg font-medium">${price * quantity}</p>
  
        </div>
        </>
    )

 }
 })()
}
{(()=>{
  if(type==="order"){
    return(
      <>
   <select
      value={quantity}
      onChange={(e) => { 
        editOrder({id,num: parseInt(e.target.value)})
     }}
    >
      {Array.from({ length: 10 }, (_, index) => (
        <option key={index} value={index + 1}>{index + 1}</option>
      ))}
    </select>

          <div className="flex flex-col items-end h-full justify-around">
          <span className="cursor-pointer" onClick={() => deleteProductInCart(id)}>
            <CloseIcon h='6' w='6' /></span>
          <p className="text-lg font-medium">${price * quantity}</p>
  
        </div>
        </>
    )

 }
 })()
}
    



    </div>
  )

}
export default OrderCard