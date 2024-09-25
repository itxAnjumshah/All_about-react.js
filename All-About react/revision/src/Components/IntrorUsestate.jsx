import React, { useState } from 'react'

export default function IntrorUsestate() {

const [data,setdata]=useState("anjum")
function updatedata()
 {
  setdata("SHah")
}

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={updatedata}>Change name</button>
      
    </div>
  )
}
