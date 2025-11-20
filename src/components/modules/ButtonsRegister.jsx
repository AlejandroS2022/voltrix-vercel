import ButtonBase from '../ui/buttons/ButtonBase';

const ButtonsRegister = () => {
  return (
    <>
        <div className='login-container__right__buttons'>
            <ButtonBase content='Sign up with Google' src="/images/Google-logo.svg"></ButtonBase>
            <ButtonBase content='Sign up with Facebook' src="/images/Facebook-logo.svg"></ButtonBase>
        </div>
    </>
  );
};

export default ButtonsRegister;