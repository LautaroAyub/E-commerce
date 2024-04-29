import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { useContext } from "react"
import EmptyBagIcon from "../../Icons/EmptyBagIcon"
import FullBagIcon from "../../Icons/FullBag"


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
    const { count,toggleCheckoutSideMenu,closeProductDetail} = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-3"

    const openCheckoutSideMenu =()=>{
        closeProductDetail()
        toggleCheckoutSideMenu()
       
    }
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">

                <li className="font-semibold text-lg"  >
                    <NavItem to="/" activeStyle={undefined}>
                        Shopi
                    </NavItem>

                </li>
                <li>
                    <NavItem to="/" activeStyle={activeStyle}>
                        All
                    </NavItem>
                </li>
                <li>
                    <NavItem to="/clothes" activeStyle={activeStyle}>
                        Clothes
                    </NavItem>

                </li>
                <li>
                    <NavItem to="/electronics" activeStyle={activeStyle}>
                        Electronics
                    </NavItem>

                </li>
                <li>
                    <NavItem to="/furnitures" activeStyle={activeStyle}>
                        Furnitures
                    </NavItem>

                </li>
                <li>
                    <NavItem to="/toys" activeStyle={activeStyle}>
                        Toys
                    </NavItem>
                </li>
                <li>
                    <NavItem to="/others" activeStyle={activeStyle}>
                        Others
                    </NavItem>
                </li>


            </ul>
            <ul className="flex items-center gap-3">

                <li className="text-black/60">
                    lautaroayub@hotmail.com
                </li>
                <li>
                    <NavItem to="/my-orders" activeStyle={activeStyle}>
                        My Orders
                    </NavItem>

                </li>
                <li>
                    <NavItem to="/my-account" activeStyle={activeStyle}>
                        My Account
                    </NavItem>

                </li>
                <li>
                    <NavItem to="/sing-in" activeStyle={activeStyle}>
                        Sing In
                    </NavItem>
                </li>

                <li onClick={()=>openCheckoutSideMenu()}
                className="flex flex-row cursor-pointer">

                    {count === 0 ?
                      <>  
                    <EmptyBagIcon h="6" w="6"/>{count}
                    </>
                    :
                    <>
                    <FullBagIcon h="6" w="6"/>{count}
                    </>
                }

                </li>



            </ul>
        </nav>
    )
}
export { NavBar }