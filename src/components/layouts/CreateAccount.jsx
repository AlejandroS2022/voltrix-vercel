import InputBase from '../../components/ui/inputs/InputBase';

const CreateAccount = () => {
  return (
    <>
        <div className='login-container__right__create-account'>
            <InputBase label='First Name'></InputBase>
            <InputBase label='Last Name'></InputBase>
        </div>
    </>
  );
};

export default CreateAccount;