import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import UpChevronIcon from "../../Icons/UpChevronIcon"
import DownChevronIcon from "../../Icons/DownChevronIcon"



const Button = ({ children, action }) => {
    const { openCategoryMobile, closeCategoryMobile, categoriesIsOpen } = useContext(ShoppingCartContext)
    console.log(categoriesIsOpen, "asdsda")

    return (
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
    )
}

const ButtonUtils = () => {
    const { categoriesIsOpen } = useContext(ShoppingCartContext)
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