import React, { useContext } from "react";
import "./PDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { Product } = props;
  // start
  const {addToCart}=useContext(ShopContext);

  // end
  return (
    <div className="ProductDisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={Product.image} alt="" />
          <img src={Product.image} alt="" />
          <img src={Product.image} alt="" />
          <img src={Product.image} alt="" />
        </div>
        <div className="product-display-img">
          <img className="productdisplay-main-img" src={Product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{Product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${Product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${Product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          optio itaque odit harum, quia ratione unde obcaecati non aliquam
          exercitationem voluptatibus et adipisci, provident rem rerum nobis,
          nemo numquam tempore?
        </div>
        <div className="productdisplay-right-size">
            <h1>Select size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(Product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category">
            <span>category :</span>
            women ,T-shirt, crop top
        </p>
        <p className="productdisplay-right-category">
            <span>Tags :</span>
            Modern ,Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
