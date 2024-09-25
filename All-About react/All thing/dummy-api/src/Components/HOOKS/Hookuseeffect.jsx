import React, { useEffect, useState } from 'react'

export default function Hookuseeffect() {

    const [count,setcount] = useState(0)

    useEffect(()=>{
        alert("heloo  with use effect =" +count)
    } , [count])
  return (
    <div>
      <h1>useeffect  hooks  in react</h1>
      
      <h1>{count}</h1>
      <button onClick={()=> setcount(count+1)}> click me  to add</button>
    </div>
  )
}
