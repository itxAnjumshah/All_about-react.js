import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Ptlogin() {

const login=()=>{
  localStorage.setItem('Ptlogin',true)
  navigate('/')
}
const navigate=useNavigate();
useEffect(()=>{
  let login=localStorage.getItem('Ptlogin')
  if(login){
    navigate('/')
  }
})


  return (
    <div style={{textAlign:"center"}}>
 <h2>login page</h2>
<input type="text" /><br/><br/>
<input type="text" /><br/> <br/>
<button onClick={login}>Login</button>     
    </div>
  )
}
