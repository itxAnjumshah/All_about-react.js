import React from "react";
import "./Breadcrumstyle.css"
import arrow_icon from "../Assets/breadcrum_arrow.png";

const BreadCrums = (props) => {
  const { Product } = props;
  // console.log(Product);

  return (
    <div className="breadcrum">
      Home <img src={arrow_icon} alt="" />
      Shop <img src={arrow_icon} alt="" />
      {Product.category} <img src={arrow_icon} alt="" />
      {Product.name}
    </div>
  );
};

export default BreadCrums;





