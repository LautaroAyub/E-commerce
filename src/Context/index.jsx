import { createContext, useEffect, useState } from 'react'

export const ShoppingCartContext=createContext()

export const ShoppingCartProvider=({children})=>{

    //Shopping Cart . Increment quantity
    const[count, setCount]=useState(0)

    //Product Detail ' Open / Close
    const[isProductDetailOpen, setIsProductDetailOpen]=useState(false)
    
    const openProductDetail=()=> setIsProductDetailOpen(true)
    const closeProductDetail=()=> setIsProductDetailOpen(false)

    //Checkout Side Menu ' Open / Close
    const[isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen]=useState(false)
    const toggleCheckoutSideMenu=()=> setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)



    //Product Detail ' Show Product
    const[productToShow,setProductToShow]=useState({})

    //Shopping cart ' Add products to cart
    const[cartProducts,setCartProducts]=useState([])
    console.log(cartProducts)

    //Shopping cart ' Order
    const[order,setOrder]=useState([])
    console.log(order,"orderss")

//To navBar 
    const updateQuantityInIconCart=()=>{
        let numOfClothes=0
        cartProducts.map(element=> numOfClothes+=element.quantity)
        setCount(numOfClothes)
        }
        useEffect(() => {
            updateQuantityInIconCart();
        }, [cartProducts]);




    return(
        <ShoppingCartContext.Provider value={{
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
            setOrder
        }} 
        >
              {children}
        </ShoppingCartContext.Provider>
      
    )
}