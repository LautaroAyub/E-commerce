import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { NavigationContext } from "../../Context/NavigationContext"
import EmptyBagIcon from "../../Icons/EmptyBagIcon"
import FullBagIcon from "../../Icons/FullBag"
import MenuIconMobile from "../../Icons/MenuIconMobile"
import CloseIcon from "../../Icons/CloseIcon"
import { IconMobileMenu } from "../../MobileElements/MobileElements"
import { Nav, NavBarWrapper, MenuAccount, MenuItem, MenuCategory } from "./NavBarElements"
import { useLocalStorage } from "../../Context/useLocalStorage"


const NavItem = ({ to, activeStyle, children }) => {

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? activeStyle : undefined}>
            {children}
        </NavLink>)
}


const NavBar = () => {
    const { count,updateSignInStatus,isUserSignIn } = useContext(ShoppingCartContext)

    const { categoriesIsOpen, isMenuOpen, closeCategoryMobile,
        openCheckoutSideMenu, toggleMenuMobile, setIsMenuOpen } = useContext(NavigationContext)
    const{parsedUserSession}=useLocalStorage()
    const activeStyle = "underline underline-offset-3"
 

    return (
        <>
            <Nav >
                <NavBarWrapper>
                    <IconMobileMenu onClick={toggleMenuMobile}>
                        <MenuIconMobile />
                    </IconMobileMenu>

                    <MenuItem className="font-semibold text-lg"
                        onClick={() => setIsMenuOpen(false)} >
                        <NavItem to="/" activeStyle={undefined}>
                            Shopi
                        </NavItem>
                    </MenuItem>

                    <MenuCategory categoriesIsOpen={categoriesIsOpen} >
                        <IconMobileMenu className="absolute right-0 m-1" onClick={() => closeCategoryMobile()}>
                            <CloseIcon />
                        </IconMobileMenu>

                        <MenuItem>
                            <NavItem to="/" activeStyle={activeStyle}>
                                All
                            </NavItem>
                        </MenuItem>
                        <MenuItem>
                            <NavItem to="/clothes" activeStyle={activeStyle}>
                                Clothes
                            </NavItem>

                        </MenuItem>
                        <MenuItem>
                            <NavItem to="/electronics" activeStyle={activeStyle}>
                                Electronics
                            </NavItem>

                        </MenuItem>
                        <MenuItem>
                            <NavItem to="/jewelerys" activeStyle={activeStyle}>
                                Jewelerys
                            </NavItem>

                        </MenuItem>
                        <MenuItem>
                            <NavItem to="/toys" activeStyle={activeStyle}>
                                Toys
                            </NavItem>
                        </MenuItem>
                        <MenuItem>
                            <NavItem to="/others" activeStyle={activeStyle}>
                                Others
                            </NavItem>
                        </MenuItem>
                    </MenuCategory>

                    <MenuAccount
                        isMenuOpen={isMenuOpen}>
                            {isUserSignIn==false&&
                            <>
                             <MenuItem onClick={toggleMenuMobile}>
                            <NavItem to="/sign-in" activeStyle={activeStyle}>
                                Sign In
                            </NavItem>
                        </MenuItem>
                            </>}
                            {isUserSignIn==true&&
                            <>
                        <MenuItem
                            className="text-black/60"
                            onClick={toggleMenuMobile}>
                            {parsedUserSession?.email}
                        </MenuItem>
                        <MenuItem onClick={toggleMenuMobile}>
                            <NavItem to="/my-orders" activeStyle={activeStyle}>
                                My Orders
                            </NavItem>

                        </MenuItem >
                        <MenuItem onClick={toggleMenuMobile}>
                            <NavItem to="/my-account" activeStyle={activeStyle}>
                                My Account
                            </NavItem>

                        </MenuItem>
                        <MenuItem onClick={()=>{updateSignInStatus("sign-out"),toggleMenuMobile()}}>
                            <NavItem  to="/" activeStyle={activeStyle}>
                                Sign Out
                            </NavItem>
                        </MenuItem>
                        </>
                            }



                    </MenuAccount>
                    
                    {isUserSignIn &&
                    <MenuItem onClick={() => openCheckoutSideMenu()}
                        className="flex flex-row cursor-pointer">

                        {count === 0 ?
                            <>
                                <EmptyBagIcon h="6" w="6" />{count}
                            </>
                            :
                            <>
                                <FullBagIcon h="6" w="6" />{count}
                            </>
                        }
                    </MenuItem>
                    }      
                </NavBarWrapper>
            </Nav>

        </>
    )
}
export { NavBar }