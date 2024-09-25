import React, { useState } from 'react'

export default function Hideshow() {
    const [show,setshow]=useState(false)
  return (
    <div>
    

    {
        show ? <h1>hello world</h1>:null
    }
    
   
<button onClick={()=>setshow(true)}>show</button>
<button onClick={()=>setshow(false)}>hide</button>     

<button onClick={()=>setshow(!show)}>
{show ? <h1>hide</h1> : <h1>show</h1>}

</button>

    </div>
  )
}
