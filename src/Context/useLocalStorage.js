import { useState } from "react"

function useLocalStorage(itemName,initialValue)  {
    //Shopping cart ' Order
    
    const [orders, setOrders] = useState([])
  
    const saveOrder = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
    }

    return {
         orders,
         saveOrder,
         setOrders
        }
} 
export {useLocalStorage}