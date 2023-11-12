import React from 'react'
import Expensedate from './Expensedate'
import './Expenseitem.css'
import Card from './Card'

   
export default function Expenseitem(props) {
  
   
  return (
    <Card className='expense-item '>
      <Expensedate date={props.date}/>
      <div className='expense-item__description '>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      
    </Card>
  )
}
