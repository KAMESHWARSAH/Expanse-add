import React from 'react'
import { ExpaneForm } from './ExpaneForm'

export const NewExapnce = (props) => {
    const saveExpanceDatahandler = (entereddataexpance) =>{
        const expancedata ={
            ...entereddataexpance,
            id: Math.random().toString()
        }
        props.onaddExpance(expancedata);
        console.log(expancedata);
       
    }
  return (
   <>
   <ExpaneForm saveExpanceData={saveExpanceDatahandler} />
   </>
  )
}
