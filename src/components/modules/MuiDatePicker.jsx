import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import dayjs from 'dayjs';

export default function MuiDatePicker() {
  const [selectedDate, setSelectedDate] = useState(dayjs());


  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        
        <DatePicker
          placeholder="Select a date"
          value={selectedDate} 
          onChange={handleDateChange}
          className='date-picker-component'
          slotProps={{
            textField: { 
              Width: 160, 
            },
          }}
          format="DD/MM/YYYY" 
        />
        
      </Box>
    </LocalizationProvider>
  );
}