import { useEffect, useState } from "react"

function useLocalStorage(itemName,initialValue)  {
    //Shopping cart ' Order
    
    const [ordersInStorage, setOrdersInStorage] = useState([])
              console.log("orders in storage",ordersInStorage);
              
    useEffect(() =>{
        try{
            const getLocalStorageOrders=localStorage.getItem(itemName);
            if(!getLocalStorageOrders){
                localStorage.setItem(itemName,initialValue);
                return
            }else{
            setOrdersInStorage(JSON.parse(getLocalStorageOrders))
            }
        }
        catch(error){
            console.log(error)
        }


    },[])

  const saveNewOrdersInStorage=(newOrders)=>{
            setOrdersInStorage(newOrders)
            localStorage.removeItem("orders")
            localStorage.setItem(itemName, JSON.stringify(newOrders))
    }


    
    return {
        ordersInStorage,
        setOrdersInStorage,
        saveNewOrdersInStorage
        }
} 
// localStorage.removeItem("orders")
export {useLocalStorage}