import React, { useEffect, useRef } from 'react'
import "./Navstyle.css";
import Logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import Bell_icon from "../../assets/bell_icon.svg";
import Profile_icon from "../../assets/profile_img.png"
import Drop_down from "../../assets/caret_icon.svg";
import { logout } from "../../Firebase";


const Navbar = () => {

  const navRef=useRef();
  
useEffect(()=>{
  window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 80){
      navRef.current.classList.add('nav-dark')
    }
    else{
      navRef.current.classList.remove('nav-dark')
    }
  })
},[])
  return (
    <div ref={navRef} className='navbar'>
<div className="navbar-left">
  <img src={Logo} alt="" />
  <ul>
    <li>Home</li>
    <li>Tv-shows</li>
    <li>Movies</li>
    <li>New & popular</li>
    <li>My List</li>
    <li>Browse by language</li>
  </ul>
</div>
<div className="navbar-right">
  <img src={search_icon} alt="" className='icons' />
  <p>Children</p>
  <img src={Bell_icon} alt="" className='icons' />
  <div className="navbar-profile">
    <img src={Profile_icon} alt="" className='profile' />
    <img src={Drop_down} alt=""  />
    <div className="dropdown">
     <p onClick={()=>{logout()}}> Sign out of netflix</p>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Navbar
