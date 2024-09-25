import React, { useState } from 'react'
import { useEffect } from 'react'

export default function GetApi() {
    const [data ,setdata]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
result.json().then((response)=>{
    setdata(response)

})
        })
    },[])
    console.log(data)
  return (
    <div>
      
    </div>
  )
}
