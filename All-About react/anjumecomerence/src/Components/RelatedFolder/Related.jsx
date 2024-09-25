import React from "react";
import "./Relatedproduct.css";
import Data_product from "../Assets/data";
import data_product from "../Assets/data";
import Item from "../Items/Items";

const Related = () => {
  return (
    <div className="relatedproduct">
      <h1>Related product</h1>
      <hr />
      <div className="relatedproduct-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Related;
