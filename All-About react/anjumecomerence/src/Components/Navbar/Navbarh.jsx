import React, { useState } from "react";
import "./Navbar.css";
import Logo from '../Assets/logo.png';
import Cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";

const Navbarh = () => {
  const [menu,setmenu]=useState("Shop")
  return (
    <div className="navbar">
<div className="nav-logo">
  <img src={Logo} alt="" /> 
  <p>E-STORE</p>
</div>
      <ul className="nav-menu">
        <li onClick={()=>{setmenu("shop")}} > <Link to='/'>Shop</Link> {menu==="shop" ? <hr/> :<></>} </li>
        <li onClick={()=>{setmenu("mens")}} ><Link to='/mens' >Men</Link> {menu==="mens" ? <hr/> :<></>}</li>
        <li onClick={()=>{setmenu("women")}} ><Link to='/women'>Women</Link> {menu==="women" ? <hr/> :<></>}</li>
        <li onClick={()=>{setmenu("kids")}} ><Link to='/kids'> Kids</Link> {menu==="kids" ? <hr/> :<></>}</li>
      </ul>
     <div className="nav-login-cart">
     <Link to='/login'> <button>Login</button></Link>
     <Link to='/cart'>
      <img src={Cart_icon} alt="" /></Link>
     <div className="nav-cart-count">
      0
     </div>
     </div>
    </div>
  );
};

export default Navbarh;
