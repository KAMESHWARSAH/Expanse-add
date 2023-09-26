import React from 'react'
import moment from 'moment';
export const ExpanceDate = (props) => {
let currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

  return (
    <div>
        <p>{currentDate}</p>
    </div>
  )
}
