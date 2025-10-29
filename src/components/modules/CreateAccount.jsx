import InputBase from '../ui/inputs/InputBase';
import LoginContent from './LoginContent';

const CreateAccount = () => {
  return (
    <>
        <div className='login-container__right__create-account'>
            <InputBase label='First Name'></InputBase>
            <InputBase label='Last Name'></InputBase>
        </div>
        <LoginContent></LoginContent>
    </>
  );
};

export default CreateAccount;