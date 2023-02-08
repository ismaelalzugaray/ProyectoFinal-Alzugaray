import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemByCategory } from "../../services/FireBase";
import ItemList from "../ItemList/ItemList";
import {getItems} from "../../services/FireBase"

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let { categoryid } = useParams();

  useEffect(() => {
    if (categoryid) {
      getItemByCategory(categoryid).then((respuesta) => {
        setProducts(respuesta);
        setIsLoading(false);
      });
    } else {
      getItems(categoryid).then((respuesta) => {
        setProducts(respuesta);
        setIsLoading(false);
      });
    }
  }, [categoryid]);

  return (
    <>
      <div>
        {isLoading ? (
          <h1>cargando productos</h1>
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </>
  );
}

export default ItemListContainer;
