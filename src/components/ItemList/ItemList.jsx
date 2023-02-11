import React from "react";
import Items from "../Items/Items";

function ItemList(props) {
  return (
    <div className="row text-center justify-content-evenly mt-5">
      {props.products.map((item) => (
        <Items
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          imgurl={item.imgurl}
          description={item.description}
        />
      ))}
    </div>
    
  );
}

export default ItemList;
