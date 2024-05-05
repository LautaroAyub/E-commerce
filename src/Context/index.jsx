import { createContext, useEffect, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    //Get Products API
    const urlAPI = 'https://fakestoreapi.com';

    const [items, setItems] = useState(null)


    useEffect(() => {
        fetch(`${urlAPI}/products`)
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(err => console.log(err))

    }, [])

    // Search <input> Products State
    const [searchByTitle, setSearchByTitle] = useState("")

    //and Filter Products | State | Functions
     const [filteredItems, setFilteredItems] = useState(null)

    const itemsFilter = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    useEffect(() => {
        if(searchByTitle){
            setFilteredItems(itemsFilter(items, searchByTitle))
        }
        console.log(filteredItems,"filteredItems")
        
    }, [items, searchByTitle])






    //Shopping Cart . Increment quantity } State
    const [count, setCount] = useState(0)

    //Product Detail ' Open / Close| Functions
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Checkout Side Menu ' Open / Close | Functions
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const toggleCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)



    //Product Detail ' Show Product | State
    const [productToShow, setProductToShow] = useState({})

    //Shopping cart ' Add products to cart | State
    const [cartProducts, setCartProducts] = useState([])
    console.log(cartProducts)

    //Shopping cart ' Order
    const [order, setOrder] = useState([])
    console.log(order, "orderss")

    //To navBar 
    const updateQuantityInIconCart = () => {
        let numOfClothes = 0
        cartProducts.map(element => numOfClothes += element.quantity)
        setCount(numOfClothes)
    }
    useEffect(() => {
        updateQuantityInIconCart();
    }, [cartProducts]);




    return (
        <ShoppingCartContext.Provider value={{
            items,
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            toggleCheckoutSideMenu,
            productToShow,
            setProductToShow,
            setCartProducts,
            cartProducts,
            updateQuantityInIconCart,
            order,
            setOrder,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems
        }}
        >
            {children}
        </ShoppingCartContext.Provider>

    )
}