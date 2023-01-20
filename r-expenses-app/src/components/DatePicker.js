import format from 'date-fns/format';
import { es } from 'date-fns/locale';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const DatePicker = ({date, changeDate}) => {
    
    return ( 
        <div>
            <input type="text" readOnly value={format(date, `dd 'de' MMMM 'de' yyyy`, {locale: es})}/>
            <DayPicker mode='single' selected={date} onSelect={changeDate} locale={es}/>
        </div>
     );
}
 
export default DatePicker;