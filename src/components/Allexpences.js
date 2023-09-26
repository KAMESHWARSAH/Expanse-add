import React from 'react'
import Expanceiteam from "./Expanceiteam";
export const Allexpences = (props) => {
  return (
    <div>
        {
            props.iteam.map(
                expanse =>(
                    <Expanceiteam
                    title={expanse.title}
                    amount={expanse.amount}
                    date={expanse.date}
                    />
                )
            )
        }
       
    </div>
  );
}
