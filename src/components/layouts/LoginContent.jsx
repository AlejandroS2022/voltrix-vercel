import InputBase from '../../components/ui/inputs/InputBase';
import CheckboxBase from '../../components/ui/checkbox/CheckboxBase';
import ButtonColor from '../../components/ui/buttons/ButtonColor';

const LoginContent = () => {
  return (
    <>
        <InputBase label='Email Address'></InputBase>
        <InputBase label='Password' HelperText='At least 8 characters, with numbers and symbols.'></InputBase>
        <CheckboxBase label="Remember this device"></CheckboxBase>
        <ButtonColor content='Log in'></ButtonColor>
    </>
  );
};

export default LoginContent;