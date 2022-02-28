import React from 'react';
import './CheckingDate.css';
// import img3 from '../../asset/images/img3.jpg'
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";
const CheckingDate = () => {
    const dateValue = new Date(new Date().getFullYear(), new Date().getMonth(), 24)
    const guestValue = '2 Adult';
    const accommandationValue = 'Camp';
    return (
        <>
        <div className='date-title'>
        <h1>Check Your Booking Date</h1>
        </div>
        <div >  
           <div className='date-area'>
           <DatePickerComponent placeholder='Check-In' value={dateValue}></DatePickerComponent>
             <DatePickerComponent placeholder='Check-Out' value={dateValue}></DatePickerComponent>
           </div>
           <div className='second-container'>
           <div className='countity'>
                <p>Guest</p>
                <input value={guestValue} type="text" name="text" id="" />
            </div>
            <div className='countity-2'>
                <p>Accommadation</p>
                <input value={accommandationValue} type="text" name="text" id="" />
            </div>
           </div>
          <div className='check-btn'>
          <button>CHECK  AVAILABILITY</button>
          </div>

             
        </div>
        </>
        
    );
};

export default CheckingDate;