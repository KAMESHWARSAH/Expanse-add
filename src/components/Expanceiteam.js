import '../App.css';
import React from 'react';
import { ExpanceDate } from './ExpanceDate'
const Expanceiteam = (props) => {
// const [title, SetTitle] = useState(props.title);
// const [newTitle, setNewTitle] = useState("hi");
//   const handleClick= () =>{
//     SetTitle(newTitle);
//   }
//   const changeHandeler = (event)=>{
//     setNewTitle(event.target.value);
//   }
  return (
    <>
    <div className='background-color card col-md-8 mt-4 offset-2 p-4'>
        <div className='row p-3 border border-success'>
            <div className='col-md-4'><h1>{props.title}</h1></div>
            <div className='col-md-4'><h1>{props.amount}</h1></div>
            <div className='col-md-4'><p>{props.date}</p></div>
            {/* <div className='col-md-2'><input type='text' value={newTitle} onChange={changeHandeler} /></div>
            <div className='col-md-2'><button onClick={handleClick}>Change Title</button></div> */}
        </div>
    </div>
    </>
    
  )
}

export default Expanceiteam