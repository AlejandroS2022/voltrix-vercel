import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectBase({ 
    options, 
    value, 
    onChange,
    sxOverrides = {} 
}) {
  const id = React.useId();
  const selectId = `reusable-select-${id}`;
  const labelId = `reusable-select-label-${id}`;

  const customStyles = {
    '& .MuiInputBase-root': {
      borderRadius: '8px',
      background: '#191919', 
      height: '42px',
    },
    '& .MuiInputBase-input': {
      color: '#999',
      fontSize: '1rem',
      paddingLeft: '12px',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'initial',
      boxShadow: '0px -0.5px 0px 1px gray',
      border: 'none'  
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      boxShadow: '0px -0.5px 0px 1px gray',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      boxShadow: '0px -0.5px 0px 0.2px gray',
    },
    '& .MuiSelect-icon': {
        color: '#999',
    },
  };

  return (
    <Box>
      <FormControl fullWidth sx={customStyles}> 
        <Select
          labelId={labelId}
          id={selectId}
          value={value} 
          onChange={onChange}
          sx={customStyles}
        >
          {options.map((option) => (
            <MenuItem 
              key={option.value} 
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}