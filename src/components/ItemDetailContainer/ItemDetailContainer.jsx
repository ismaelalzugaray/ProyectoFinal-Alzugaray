import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import {getSingleItem} from "../../services/MockAsyncService"
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer() {

const [product, setProduct] = useState([])

let {itemid} = useParams()

useEffect( () => {
    getSingleItem(itemid).then((respuesta) => {
    setProduct(respuesta)
  })
  .catch ( (error) => alert(`Error: ${error}` ))
} ,[])


return (
    <>
        <ItemDetail
        title={product.title}
        price={product.price}
        imgurl={product.imgurl}
        detail={product.detail}/>
    </>
    )
}

export default ItemDetailContainer