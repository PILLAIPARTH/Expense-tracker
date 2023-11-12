import React from 'react'
import Expenseitem from './Expenseitem'
import './Expense.css'
import Card from './Card'

export default function Expense(props) {
  // const expenses = [
  //   {
  //     id: 1,
  //     title: "car insurance",
  //     date: new Date(2023, 9, 28),
  //     amount: 200
  //   },
  //   {
  //     id: 2,
  //     title: "TV",
  //     date: new Date(2023, 10, 28),
  //     amount: 1000
  //   },
  //   {
  //     id: 3,
  //     title: "Home loan",
  //     date: new Date(2023, 12, 28),
  //     amount: 2000
  //   },
  // ]
  return (

    <Card className='expenses'>
      {props.items.map(expense => <Expenseitem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />)}
    </Card>


  )
}
