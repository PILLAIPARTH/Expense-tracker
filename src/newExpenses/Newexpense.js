 import React from 'react'
 
 import './Newexpense.css'
 import Expensefrom from './Expensefrom'

 export default function Newexpense(props) {
  function datareciver(expencedata){
     const expence ={
      ...expencedata,
      id:Math.random().toString()
     }
     props.onexpencedata1(expence);
  }
   return (
     <div className='new-expense'>
      <Expensefrom onexpencedata={datareciver}/>
     </div>
   )

   }