import { createContext, useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    //Get Products API
    const urlAPI = 'https://fakestoreapi.com';
    const [items, setItems] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            fetch(`${urlAPI}/products`)
                .then(response => response.json())
                .then(data => {setItems(data) })
                .catch(err => console.log(err))
            setLoading(false)
        }, 2000)
    }, [])
    //Local Storage
    const { ordersInStorage,
        setOrdersInStorage,
        saveNewOrdersInStorage } = useLocalStorage("orders", [])
    const { productsCartStorage, setProductsCartStorage, saveProductsInCartStorage, deleteProductsInCartStorage } = useLocalStorage("cart-products", [])
    //

    // Search <input> Products State
    const [searchByTitle, setSearchByTitle] = useState("")

    //and Filter Products | State | Functions
    const [filteredItems, setFilteredItems] = useState(null)

    const itemsFilter = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    useEffect(() => {
        if (searchByTitle) {
            setFilteredItems(itemsFilter(items, searchByTitle))
        }
    }, [items, searchByTitle])

    //Shopping Cart . Increment quantity } State
    const [count, setCount] = useState(0)
    /*To navBar This sums the quantity of products in the cart and auto-executes when there is a change.*/
    const updateQuantityInIconCart = () => {
        let numOfClothes = 0
        productsCartStorage.map(element => numOfClothes += element.quantity)
        setCount(numOfClothes)
    }
    useEffect(() => {
        updateQuantityInIconCart();
    }, [productsCartStorage]);

    //Product Detail ' Show Product | State
    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoppingCartContext.Provider value={{
            loading,
            items,
            count,
            setCount,
            productToShow,
            setProductToShow,
            updateQuantityInIconCart,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            ordersInStorage,
            setOrdersInStorage,
            saveNewOrdersInStorage,
            productsCartStorage,
            setProductsCartStorage,
            saveProductsInCartStorage,
            deleteProductsInCartStorage,

        }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}