import { useState } from 'react';
import './App.css';
import Expense from './Components/Expense';
import Newexpense from './newExpenses/Newexpense';

const Dummy_expenses = [
  {
    id: 1,
    title: "car insurance",
    date: new Date(2023, 9, 28),
    amount: 200
  },
  {
    id: 2,
    title: "TV",
    date: new Date(2023, 10, 28),
    amount: 1000
  },
  {
    id: 3,
    title: "Home loan",
    date: new Date(2023, 12, 28),
    amount: 2000
  },
]

function App() {
  const[expenses,setExpenses]=useState(Dummy_expenses)
  
 
 
function onexpencedata(data){
 setExpenses((previousexpense)=>{
    return [data,...previousexpense];
 })
    
   
}
  
  return (
    <><Newexpense onexpencedata1={onexpencedata}/>   
<Expense items={expenses} />
</>

  );
}

export default App;