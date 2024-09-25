import React from 'react'

export default function PassFuntionProps(props) {
  return (
    <div>
      <h1> pass Function As  A Props</h1>
      <button onClick={props.data} > click me  to show  data</button>
    </div>
  )
}
