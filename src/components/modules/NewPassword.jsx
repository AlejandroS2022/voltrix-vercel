import InputBase from '../ui/inputs/InputBase';

const NewPassword = ({passwordTitle, passwordSubtitle, passwordLabel, passwordLabelConfirm}) => {
  return (
    <>
    <div className='login-container__right__password'>
        <h2 className='login-container__right__password-title'>{passwordTitle}</h2>
        <p className='login-container__right__password-subtitle'>{passwordSubtitle}</p>
        <div>
            <InputBase label={passwordLabel}></InputBase>
            <p className='helper-text'>At least 8 characters, with numbers and symbols.</p>
            <InputBase label={passwordLabelConfirm}></InputBase>
        </div>

    </div>
    </>
  );
};

export default NewPassword;