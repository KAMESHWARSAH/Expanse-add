import React, { useState } from 'react'

export const ExpaneForm = (props) => {
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');

const titlechangeHnadler =(event)=>{
    setEnteredTitle(event.target.value);
}
const amountchangeHnadler =(event)=>{
    setEnteredAmount(event.target.value);
}
const datehangeHnadler =(event)=>{
    setEnteredDate(event.target.value);
}
  const submitHandler = (event) =>{
    event.preventDefault();
    const newExpnaceData ={
        title:enteredTitle,
        amount:enteredAmount,
        date:enteredDate,
    }
    props.saveExpanceData(newExpnaceData);
    console.log(newExpnaceData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }  
  return (
   <>
   <div className='row'>
   <div className='col-md-6 mt-4 offset-3 p-4 card'>
   <form onSubmit={submitHandler}>
    <div className='col-12 p-4'>
        <h1 className='text-center'>Add Expance form</h1>
        <div className='form-group'>
            <label>Expance Iteam</label>
            <input value={enteredTitle} onChange={titlechangeHnadler} className='form-control' type='text' />
        </div>
        <div className='form-group'>
            <label>Expance Amount</label>
            <input value={enteredAmount} onChange={amountchangeHnadler} className='form-control' type='number' />
        </div>
        <div className='form-group'>
            <label>Date</label>
            <input value={enteredDate} onChange={datehangeHnadler} className='form-control' type='date' />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
    </div>
   </form>
   </div>
   </div>
   </>
  )
}
