import InputBase from '../ui/inputs/InputBase';

const ForgotPassword = ({passwordTitle, passwordSubtitle, passwordLabel}) => {
  return (
    <>
    <div className='login-container__right__password'>
        <h2 className='login-container__right__password-title'>{passwordTitle}</h2>
        <p className='login-container__right__password-subtitle'>{passwordSubtitle}</p>
        <InputBase label={passwordLabel}></InputBase>
    </div>
    </>
  );
};

export default ForgotPassword;