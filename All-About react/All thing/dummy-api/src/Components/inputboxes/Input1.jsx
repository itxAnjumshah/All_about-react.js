import React, { useState } from 'react'

export default function Input1() {

const [data, setdata]=useState(null)

const [print, setprint]= useState(false)

function getdata(val)
{
   setdata(val.target.value)
   setprint(false)
}

  return (
    <div>
      <h1>this  is  input  1 </h1>
      <input type="text" onChange={getdata} />
      {/* <h1>{data}</h1> */}



<button onClick={()=>{
    setprint(true)
}}> click me  to show  data  in prin</button>

{
    print ?
    <h1>{data}</h1>
    :null
}



    </div>
  )
}
