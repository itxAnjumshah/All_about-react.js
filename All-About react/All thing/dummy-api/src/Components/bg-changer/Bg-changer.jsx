import React from 'react'
import { useState } from 'react'

export default function Bgchanger() {
    const [color, setcolor]=useState("gray")

  return (
    <div>
        <div className="outer" style={{background: color}}>

<ul style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px',listStyle:'none',height:'50vh'

}}>
    <li style={{background:'white',border:'1px solid black'}} onClick={()=>setcolor("red")}  >red</li>
    <li style={{background:'white',border:'1px solid black'}} onClick={()=>setcolor("green")} >green</li>
    <li style={{background:'white',border:'1px solid black'}} onClick={()=>setcolor("blue")} >blue</li>
    <li style={{background:'white',border:'1px solid black'}} onClick={()=>setcolor("brown")} >brown</li>
</ul>

        </div>
      
    </div>
  )
}
