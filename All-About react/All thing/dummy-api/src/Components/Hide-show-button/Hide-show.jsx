import React, { useState } from 'react'

export default function Hideshow() {
    const [status,setstaus]=useState(true)
  return (
    <div>
{
    status?<h1>i am showing</h1>
: null
}
<button onClick={()=>setstaus(false)}> hide</button>
<button onClick={()=>setstaus(true)}> show</button>

<button onClick={()=>setstaus(!status)}>
     {
status?
<h1>hide</h1>
:
<h1>Show</h1>

     }</button>
      
    </div>
  )
}
