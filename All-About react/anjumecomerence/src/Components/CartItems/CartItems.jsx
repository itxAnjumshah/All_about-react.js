
import ShopContext from "../Context/ShopContext";
import "./Cartitem.css";
import Remove_icon from "../Assets/cart_cross_icon.png";
import { useContext } from "react";


const CartItems = () => {
    const  {all_product,CartItems, removeFromCart}=useContext(ShopContext)
  
  return (
    <div className="cartitem">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Tittle</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if (CartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} className="carticon-product-icon" alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {CartItems[e.id]}
                </button>
                <p>${e.new_price * CartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={Remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${0}</h3>
            </div>
          </div>
          <button>PROCCED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

