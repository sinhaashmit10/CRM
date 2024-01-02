import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

function Datepicker() {
  const [value, setValue] = useState(new Date());

  return (
    <div className='p-5'>
      <DateTimePicker onChange={setValue} value={value} />
    </div>
  );
}

export default Datepicker;
