import React, { useState } from 'react'

export default function Formvalidation() {

    const [user,setuser]=useState("");
    const  [password,setpassword]=useState("");
    const [useErr,setuseErr]=useState(false)
const [passerr,setpasserr]=useState(false)


function Formsubmit(e)


{
    if(user.length<3 || password.length<3)
        {
            alert("type Correct  Password")
        }
        else{
            alert("all good")
        }
    


 e.preventDefault()
}
function UserHandler(e){
let item=e.target.value;
if(item.length<3)
    {
        setuseErr(true)
    }
    else{
        setuseErr(false)
    }
    setuser(item)
}

function PaswordHandler(e){
    let item=e.target.value;
    if(item.length<3)
        {
           setpasserr(true)
        }
        else{
            setpasserr(false)
        }
        setpassword(item)
    }
    

  return (
    <div>
        <h1> LOgin  form validtaion</h1>
      <form  onSubmit={Formsubmit} >
        <input type="text" placeholder='enter  your  name' onChange={UserHandler} />{useErr ?
    <span>  invalid  User</span>
    :
    ""    
    
    }
        <br/>
        <br/>
        <input type="text " placeholder='enter  your  password'  onChange={PaswordHandler}/>{passerr ?
    <span>  invalid  password</span>
    :
    ""    
    
    }
        <br/>
        <br/>
        <button>LOgin</button>
      </form>
    </div>
  )
}
