import { useEffect, useState, useCallback } from "react"
import { throttle } from 'lodash';

function useLocalStorage() {
    //Account and Sign
    const accountInLocalStorage = localStorage.getItem("account")
    const signOutInLocalStorage = localStorage.getItem("sign-out")
    const userSessionInStorage = localStorage.getItem("user-session")

    let parsedUserSession
    let parsedAccounts
    let parsedSignInStatus

    if (!userSessionInStorage) {
        localStorage.setItem("user-session", JSON.stringify({}))
        parsedUserSession = {}
    } else {
        parsedUserSession = JSON.parse(userSessionInStorage)
    }

    if (!accountInLocalStorage) {
        localStorage.setItem("account", JSON.stringify([]))
        parsedAccounts = []
    } else {
        parsedAccounts = JSON.parse(accountInLocalStorage)
    }


    if (!signOutInLocalStorage) {
        localStorage.setItem("sign-out", JSON.stringify(false))
        parsedSignInStatus = false
    } else {
        parsedSignInStatus = JSON.parse(signOutInLocalStorage)
    }


    //Shopping cart ' Order

    const [ordersInStorage, setOrdersInStorage] = useState([])
    const [productsCartStorage, setProductsCartStorage] = useState([])

    useEffect(() => {
        try {
            const getProductsCartInStorage = localStorage.getItem("cart-products");
            if (!getProductsCartInStorage) {
                localStorage.setItem("cart-products", []);
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
            const getLocalStorageOrders = localStorage.getItem("orders");
            if (!getLocalStorageOrders) {
                localStorage.setItem("orders", []);
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
        deleteProductsInCartStorage,
        parsedUserSession,
        parsedAccounts,
        parsedSignInStatus


    }
}
// localStorage.removeItem("orders")
// localStorage.removeItem("cart-products")
export { useLocalStorage }

