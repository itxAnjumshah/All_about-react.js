import React from 'react'
import { useRef } from 'react'

export default function UseRef2exmp() {
let inputRef=useRef(null)
function handleinput() {
    console.log("this function is call ")
    
}

  return (
    <div>
      <h1>2nd example  of UseRef2exmp</h1>
      <input type="text" ref={inputRef}  />
      <button onClick={handleinput}>this is button</button>
    </div>
  )
}
