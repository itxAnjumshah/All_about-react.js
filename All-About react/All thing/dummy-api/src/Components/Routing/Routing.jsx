import React from 'react'
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'



export default function Routing() {
  
  return (
    <div>
      <BrowserRouter>
<Link to={'/'}>Home</Link> &nbsp;
<Link to={'/about'}>About</Link>

      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  )
}
