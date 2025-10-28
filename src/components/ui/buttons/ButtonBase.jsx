
import Button from '@mui/material/Button';

const ButtonBase = ({content, src}) => {
  return (
    <>
        <Button variant="contained" className='button-base'>{content} <img src={src}/></Button>
    </>
  );
};

export default ButtonBase;