import React from 'react'
import './Title.css'

export default function Title({subTitle, Title}) {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2>{Title}</h2>

    </div>
  )
}
