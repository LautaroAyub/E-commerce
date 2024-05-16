import { useContext } from "react"
import { NavigationContext } from "../../Context/NavigationContext"
import UpChevronIcon from "../../Icons/UpChevronIcon"
import DownChevronIcon from "../../Icons/DownChevronIcon"
import{IconMobileMenu} from "../../MobileElements/MobileElements"


const Button = ({ children, action }) => {
    const { openCategoryMobile, closeCategoryMobile } = useContext(NavigationContext)
  
    return (
        <IconMobileMenu>
        <button className=" fixed flex justify-center items-center h-10 w-10 bg-gray-400  bg-opacity-20
    rounded-full bottom-5 text-lg font-bold"
            onClick={() => {
                action === "open" ?
                closeCategoryMobile()
                :
                openCategoryMobile()
            }}>
            {children}
        </button>
        </IconMobileMenu>
    )
}

const ButtonUtils = () => {
    const { categoriesIsOpen } = useContext(NavigationContext)
    return (
        <>
            {
                categoriesIsOpen ?
                    <Button action="open">
                        <DownChevronIcon />
                    </Button>
                    :
                    <Button action="close">
                        <UpChevronIcon />
                    </Button>
            }
        </>

    )
}
export default ButtonUtils