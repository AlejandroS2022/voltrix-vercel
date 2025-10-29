import InputBase from '../ui/inputs/InputBase';
import CheckboxBase from '../ui/checkbox/CheckboxBase';

const LoginContent = () => {
  return (
    <>
        <InputBase label='Email Address'></InputBase>
        <InputBase label='Password' HelperText='At least 8 characters, with numbers and symbols.'></InputBase>
        <CheckboxBase label="Remember this device"></CheckboxBase>
    </>
  );
};

export default LoginContent;