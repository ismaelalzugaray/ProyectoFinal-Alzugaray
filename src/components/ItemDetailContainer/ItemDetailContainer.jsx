import React, {useState, useEffect} from "react"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import {getSingleItem} from "../../services/FireBase"
import ItemCount from "../ItemCount/ItemCount"
import ItemDetail from "../ItemDetail/ItemDetail"
import { cartContext } from "../../storage/cartContext"
import { Link } from "react-router-dom"

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
        alert("debe añadir al menos 1 producto al carrito")
        
    }else{
        setIsInCart(true)
        addItem({...product, count: count})
        alert(`Agregaste ${count} ${product.title} al carrito`)
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
        <h1>Cargando Producto</h1>
    )
}

return (
    <div>
            <ItemDetail
             title={product.title}
             price={product.price}
             imgurl={product.imgurl}
             detail={product.detail}/>
        {isInCart || product.stock == 0 ?(
            <p>No hay mas stock</p>
        ):  
            <ItemCount onAddToCart = {handleOnAddToCart} stock={stockUpdated}/>}
            <Link to="/cart">
            <button>Ir al carrito</button>
            </Link>
    </div>
    

    )
}

export default ItemDetailContainer