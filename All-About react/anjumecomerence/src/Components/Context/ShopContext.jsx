import React, { createContext, useState } from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
  let cart={};
  for (let index = 0; index <all_product.length+1; index++) {
    cart[index]=0;
    
  }
  return cart;

}



const ShopContextProvider = (props) => {

const [cartitems,setcartitems]=useState(getDefaultCart());





  
  const addToCart=(itemId) =>{
    setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

  }
  
  const removeFromCart=(itemId) =>{
    setcartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

  }
  const contextValue = { all_product ,cartitems,addToCart,removeFromCart };



  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;


