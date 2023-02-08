import React from "react";
import Items from "../Items/Items";
import FlexWrapper from "../flexWrapper/FlexWrapper";

function ItemList(props) {
  return (
    <FlexWrapper>
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
    </FlexWrapper>
  );
}

export default ItemList;
