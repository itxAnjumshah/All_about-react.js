import React, { useEffect, useState } from 'react'
import './navbar.css'
import Logo from '../../assets/logo-DUdXW4nF.png'
import menu_icon from '../../assets/download (10).png'
import { Link } from 'react-scroll';
export default function Navbar() {

  const [sticky, setsticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
window.scrollY > 50 ? setsticky(true) : setsticky(false);

    })
  },[]);

  const [mobilemenu, setmobilemenu]=useState(false);
const  toggleMenu =()=>{
mobilemenu ? setmobilemenu(false) : setmobilemenu(true)
}
  return (
    <nav className={`container  ${sticky ? 'dark-nav' : ''}`}>
        <img src={Logo} alt="" className='logimg' />
        <ul className={mobilemenu ? '' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>HOME</Link></li>
            <li> <Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimoniols' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact-us</Link></li>
        </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}
