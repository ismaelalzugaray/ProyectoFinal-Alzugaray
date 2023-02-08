import { useContext } from "react"
import { Link } from "react-router-dom"
import { cartContext } from "../../storage/cartContext"
import "./CartWidget.css"


function CartWidget (){
const {getTotalItems} = useContext(cartContext)

    return(
        <Link to="/cart">
        <button>
            {getTotalItems()}
        </button>
        </Link>
    )
}

export default CartWidget