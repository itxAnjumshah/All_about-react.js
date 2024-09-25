import React, { Component, createRef } from 'react'

export default class Userefhooks extends Component {
constructor()
{
    super();
    this.inputref=createRef();
}
componentDidMount()
{
//  console.log(this.inputref.current.value="1000")
}
getvalue(){
    console.warn(this.inputref.current.value)
    this.inputref.current.style.color="red"
    this.inputref.current.style.backgroundColor="black"
}

  render() {
    return (
      <div>
        <h1>use  refhook </h1>
        <input type="text" ref={this.inputref} />
        <button onClick={()=>this.getvalue()}>checkref </button>
      </div>
    )
  }
}
