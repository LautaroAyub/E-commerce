import { useEffect, useState, useCallback } from "react"
import { throttle } from 'lodash';

function useLocalStorage(itemName, initialValue) {
    //Shopping cart ' Order

    const [ordersInStorage, setOrdersInStorage] = useState([])
    const [productsCartStorage, setProductsCartStorage] = useState([])

    useEffect(() => {
        try {
            const getProductsCartInStorage = localStorage.getItem(itemName);
            if (!getProductsCartInStorage) {
                localStorage.setItem(itemName, initialValue);
                return
            } else {
                setProductsCartStorage(JSON.parse(getProductsCartInStorage))
            }
        }
        catch (error) {
            console.log(error)
        }
    }, [])

    const saveProductsInCartStorage = useCallback(
        throttle((newProducts) => {
            console.log("***ejecution***");
            localStorage.removeItem("cart-products")
            localStorage.setItem("cart-products", JSON.stringify(newProducts))
        }
            , 6000), [])

    const deleteProductsInCartStorage = () => {
        localStorage.removeItem("cart-products")
        setProductsCartStorage([])
    }


    useEffect(() => {
        try {
            const getLocalStorageOrders = localStorage.getItem(itemName);
            if (!getLocalStorageOrders) {
                localStorage.setItem(itemName, initialValue);
                return
            } else {
                setOrdersInStorage(JSON.parse(getLocalStorageOrders))
            }
        }
        catch (error) {
            console.log(error)
        }
    }, [])

    const saveNewOrdersInStorage = (newOrders) => {
        setOrdersInStorage(newOrders)
        localStorage.removeItem("orders")
        localStorage.setItem("orders", JSON.stringify(newOrders))
    }



    return {
        ordersInStorage,
        setOrdersInStorage,
        setProductsCartStorage,
        saveNewOrdersInStorage,
        productsCartStorage,
        saveProductsInCartStorage,
        deleteProductsInCartStorage
    }
}
// localStorage.removeItem("orders")
// localStorage.removeItem("cart-products")
export { useLocalStorage }

