import React, { useState } from 'react';
import  "./inputform.css"

function Inputform( {onSubmit, timeRunning})
{
    const[dateTime, setDateTime] = useState('');

    const handleChange =(e) => {
        setDateTime(e.target.value);
    }
   const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(dateTime);
   }
    return(
        <form onSubmit={handleSubmit}>
            <input className='date-time' type='datetime-local' value={dateTime} onChange={handleChange}/>
            <br />
            <button className='timerbtns' type='submit'>{timeRunning ?  'Cancel Timer' :'Start Timer'} </button>
        </form>
    )
}
export default Inputform;