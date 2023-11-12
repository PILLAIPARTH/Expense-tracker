import React from 'react'
import './card.css'

export default function Card(props) {
    const clases = 'card ' + props.className
  return (
    <div className={clases}>
      {props.children}
    </div>
  )
}
