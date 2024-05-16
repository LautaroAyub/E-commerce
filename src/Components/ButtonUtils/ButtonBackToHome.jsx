import { Link } from "react-router-dom"
import BackChevronIcon from "../../Icons/BackChevronIcon"

const ButtonBackToHome=()=>{
    return(
        <Link to={"/"}>
        <BackChevronIcon/>
        </Link>
    )
}
export default ButtonBackToHome