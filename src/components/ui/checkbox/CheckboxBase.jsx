import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const CheckboxBase = ({label}) => {
  return (
    <>
    <div className='checkbox-field'>
        <FormControlLabel control={<Checkbox defaultChecked />} label={label} />
    </div>
    </>
  );
};

export default CheckboxBase;