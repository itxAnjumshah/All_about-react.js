import React, { useRef } from 'react'

export default function Uncontrolcom() {
let inputref=useRef(null)
let  inputref2=useRef(null)


    function SubmitForm(e)
    {
        e.preventDefault();
        console.log("this  is first  ref ",inputref.current.value)
        console.log("this  is second  ref ",inputref2.current.value)
    }
  return (
    <div>
      <h1>this is uncontrol componets</h1>
      <form  onSubmit={SubmitForm}>
      <input ref={inputref} type="text" />
      <br/><br />
      <input ref={inputref2} type='text'/>
      <br /><br />
<button>submit</button>
</form>
    </div>
  )
}
