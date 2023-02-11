import { useContext } from "react"
import { Link } from "react-router-dom"
import { cartContext } from "../../storage/cartContext"
import "./CartWidget.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"



function CartWidget (){
const {getTotalItems, cart} = useContext(cartContext)

    return(
        <Link to="/cart">
           
           <div className="cartW">
           <FontAwesomeIcon icon={faCartPlus} />
            <small>{getTotalItems()}</small>
           </div>
                  
                           
        </Link>
    )
}

export default CartWidget