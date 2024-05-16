import { createContext, useState } from "react";


export const NavigationContext=createContext()

export const NavigationContextProvider=({children})=>{
      //**Open / close*/

    //Product Detail        ' Open / Close| Functions
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Checkout Side Menu       ' Open / Close | Functions
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const toggleCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)
    //To menu and categories section in mobile 
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [categoriesIsOpen, setCategoriesIsOpen] = useState(false)

    const toggleMenuMobile = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsCheckoutSideMenuOpen(false)
        closeProductDetail()
    }
    const openCategoryMobile = () => {
        setCategoriesIsOpen(true)
        setIsMenuOpen(false)
        closeProductDetail()
    }
    const closeCategoryMobile = () => {
        setCategoriesIsOpen(false)
        setIsMenuOpen(false)
    }

//checkout side menu open/close
const openCheckoutSideMenu = () => {
    closeProductDetail()
    toggleCheckoutSideMenu()
    setIsMenuOpen(false)

}

    return(
        <NavigationContext.Provider 
        value={
            {
                openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            toggleCheckoutSideMenu,
            categoriesIsOpen,
            openCategoryMobile,
            closeCategoryMobile,
            openCheckoutSideMenu,
            isMenuOpen,
            toggleMenuMobile
        }
        }>
        {children}
        </NavigationContext.Provider>
    )
}