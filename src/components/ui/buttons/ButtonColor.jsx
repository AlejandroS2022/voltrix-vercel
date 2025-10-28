
import Button from '@mui/material/Button';

const ButtonColor = ({content}) => {
  return (
    <>
        <Button variant="contained" className='button-color'>{content}</Button>
    </>
  );
};

export default ButtonColor;