import React, { useState } from 'react'

export default function IntroForm() {
    const [data,setdata]=useState(null);
    const [print,setprint]=useState(false);


    function showdata(params) {
setdata(params.target.value) 
setprint(false)

    }
  return (
    <div>
       {
        print ?  <h1>{data}</h1>:null
       }
      <input type="text" onChange={showdata}  />
      <button onClick={()=>setprint(true)}>print</button>
    </div>
  )
}
