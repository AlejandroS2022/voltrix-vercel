
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';

// const ButtonColor = ({type, content, src}) => {
//   return (
//     <>
//       <Button type={type} variant="contained" className='button-color'   
//       component={Link} to={src}>{content}</Button>
//     </>
//   );
// };

// export default ButtonColor;


// ButtonColor.jsx (Fixed)
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ButtonColor = ({ type, content, src, ...props }) => {
    const isSubmit = type === 'submit';

    if (isSubmit) {
        return (
            <Button 
                type="submit" 
                variant="contained" 
                className='button-color' 
                {...props}
            >
                {content}
            </Button>
        );
    }

    return (
        <Button 
            type={type} 
            variant="contained" 
            className='button-color' 
            component={Link} 
            to={src}
            {...props}
        >
            {content}
        </Button>
    );
};
export default ButtonColor;