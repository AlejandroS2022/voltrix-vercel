import TextField from '@mui/material/TextField';


const InputBase = ({type, label, HelperText, ...props}) => {
    const shouldShowHelper = HelperText;
  return (
    <>
    <div className='input-field'>
        {label && (
            <h3 className='title-field'>{label}</h3>
        )}
        <TextField type={type} id="outlined-basic" variant="outlined" fullWidth {...props}
          sx={{
            '& .MuiInputBase-root': {
              borderRadius: '8px'
            },
            '& .MuiInputBase-input': {
              color: '#999',
              fontSize: '1rem',
              background: '#191919',
              padding: '12px',
              height: '18px',
              borderRadius: '8px'
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'initial',
              boxShadow: '0px -0.5px 0px 1px gray;',
            },
            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
              boxShadow: '0px -0.5px 0px 1px gray;',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              boxShadow: '0px -0.5px 0px 0.2px gray',
            },
          }}/>
        {HelperText && (
          <p className='helper-text'>{HelperText}</p>
        )}
    </div>
    </>
  );
};

export default InputBase;