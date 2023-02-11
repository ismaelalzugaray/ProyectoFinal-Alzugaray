import React, {useState, useEffect} from "react"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import {getSingleItem} from "../../services/FireBase"
import ItemCount from "../ItemCount/ItemCount"
import ItemDetail from "../ItemDetail/ItemDetail"
import { cartContext } from "../../storage/cartContext"
import Button from "../Button/Button"
import "./ItemDetailContainer.css"
import Loader from "../Loader/Loader"
import swal from "sweetalert"

function ItemDetailContainer() {

const [product, setProduct] = useState([])
const [isInCart, setIsInCart] = useState(false)
const [isLoading, setIsLoading] = useState(true)


let {itemid} = useParams()

const {cart, addItem} = useContext(cartContext)

const itemToBuy = cart.find(item => item.id === product.id)
let stockUpdated 
if(itemToBuy)
stockUpdated = product.stock - itemToBuy.count
else stockUpdated = product.stock


function handleOnAddToCart(count){
    if(count <= 0){
        swal("Debe añadir al menos 1 producto al carrito");
        
    }else{
        setIsInCart(true)
        addItem({...product, count: count})
    }
    
}

useEffect( () => {
    getSingleItem(itemid).then((respuesta) => {
    setProduct(respuesta)
    setIsLoading(false)
  })
  .catch ( (error) => alert(`Error: ${error}` ))
} ,[])



if(isLoading){
    return (
        <Loader/>
    )
}


return (
    <div className="iDetailContainer">
       
        <div>
            <ItemDetail
             title={product.title}
             price={product.price}
             imgurl={product.imgurl}
             detail={product.detail}/>
        </div>

        {isInCart?(
            <></>
        ):  <div>
                <ItemCount onAddToCart = {handleOnAddToCart} stock={stockUpdated}/>
            </div>
            }
            <Button Ruta="/cart" Text="Ir al carrito"></Button>
    </div>
)}

export default ItemDetailContainer