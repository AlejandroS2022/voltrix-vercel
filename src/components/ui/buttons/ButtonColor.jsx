
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ButtonColor = ({content, src}) => {
  return (
    <>
      <Button variant="contained" className='button-color'   
      component={Link} to={src}>{content}</Button>
    </>
  );
};

export default ButtonColor;