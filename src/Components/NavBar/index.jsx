import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { useContext } from "react"
import EmptyBagIcon from "../../Icons/EmptyBagIcon"
import FullBagIcon from "../../Icons/FullBag"
import MenuIconMobile from "../../Icons/MenuIconMobile"
import CloseIcon from "../../Icons/CloseIcon"
import { Nav, NavBarWrapper, Menu, MenuItem, IconMobileMenu, MenuCategory } from "./NavBarElements"



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
    const { count, categoriesIsOpen, isMenuOpen, closeCategoryMobile,
openCheckoutSideMenu, toggleMenuMobile,setIsMenuOpen } = useContext(ShoppingCartContext)
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
                        <IconMobileMenu onClick={() => closeCategoryMobile()}>
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

                    <Menu isMenuOpen={isMenuOpen}>

                        <MenuItem
                            className="text-black/60"
                            onClick={toggleMenuMobile}>
                            lautaroayub@hotmail.com
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
                        <MenuItem onClick={toggleMenuMobile}>
                            <NavItem to="/sing-in" activeStyle={activeStyle}>
                                Sing In
                            </NavItem>
                        </MenuItem>


                    </Menu>


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
                </NavBarWrapper>
            </Nav>

        </>
    )
}
export { NavBar }