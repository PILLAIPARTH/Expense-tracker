import { useState } from 'react'
import React from 'react'


import './Expensefrom.css'

export default function Expensefrom(props) {
    const[title,settitle]=useState('')
    const[amount,setamount]=useState('')
    const[date,setdate]=useState('')

    function titlehandler(event){
  settitle(event.target.value)
  
    }
    function amounthandler(event){
  setamount(event.target.value)
    }
    function datehandler(event){
  setdate(event.target.value)
    }

    function submithandler(event){
    event.preventDefault()

    const expense={
        title:title,
        amount:amount,
        date:new Date(date)
    }
   props.onexpencedata(expense)

    setamount('')
    setdate('')
    settitle('')
    }  


return (
    <form onSubmit={submithandler}><div className='new-expense__controls'>
      <div className='new-expense__control '>
        <label>Title</label>
        <input type="text"  value={title} onChange={titlehandler}/>
      </div>
      <div className='new-expense__control '>
        <label>Amount</label>
        <input type="text"value={amount} onChange={amounthandler}/>
      </div>
      <div className='new-expense__control '>
        <label>Date</label>
        <input type="Date" min="2019-01-01" max="2023-12-31" value={date} onChange={datehandler}/>
      </div>
      
    </div>
    <div className='new-expense__actions'>
      <button type="submit">Add Expense</button>
    </div>
    </form>
    
  )
}