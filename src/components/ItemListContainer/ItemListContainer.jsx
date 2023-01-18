import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import getItems, { getItemByCategory } from "../../services/MockAsyncService"
import ItemList from "../ItemList/ItemList"

function ItemListContainer () {
  const [products, setProducts] = useState([])


  let {categoryid} = useParams()

  useEffect( () => {
    if (categoryid){
      getItemByCategory(categoryid).then((respuesta) => {
      setProducts(respuesta)
    }) 
  }else {
    getItems(categoryid).then((respuesta) => {
      setProducts(respuesta)
    }) 
  }
} ,[categoryid])
   

    return (
      <>
      <ItemList products= {products}/>
      </>
    )
}

export default ItemListContainer