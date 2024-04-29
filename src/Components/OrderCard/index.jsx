import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import CloseIcon from "../../Icons/CloseIcon"

const OrderCard=(props)=>{
    const { setCartProducts, cartProducts } = useContext(ShoppingCartContext)
const {id,imageUrl,title,price,quantity}=props;

const indexProduct = cartProducts.findIndex(element => element.id === id)
const updatedCartProducts = [...cartProducts];

const updateQuantity= ({id,num})=>{   
    updatedCartProducts[indexProduct].quantity = num;
    setCartProducts(updatedCartProducts);
}
const deleteProductInCart=(id)=>{
    updatedCartProducts.splice(indexProduct,1);
    console.log(updatedCartProducts,"asdas")
    setCartProducts(updatedCartProducts);
}

return(
    <div className="flex justify-between items-center m-2">
        <div className="flex items-center ">
            <figure className="w-20 h-20">
              <img className="h-full w-full rounded-lg object-cover" src={imageUrl} alt="" />  
            </figure>
            <p className="text-sm font-light px-3 ">{title}</p>
           
        </div>

        <select
            value={quantity}
            onChange={(e) => {updateQuantity({id,num:parseInt(e.target.value)})}}
          >
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index} value={index + 1}>{index + 1}</option>
            ))}
          </select>


        <div className="flex flex-col items-end h-full justify-around">
                <span className="cursor-pointer" onClick={()=>deleteProductInCart(id)}>
                    <CloseIcon  h='6' w='6'/></span>
                    
            <p className="text-lg font-medium">${price*quantity}</p> 
            
        </div>
    </div>
)

}
export default OrderCard