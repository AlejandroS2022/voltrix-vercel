import ChipsOutline from '../components/ui/buttons/ChipsOutline';
import FooterLogin from '../components/layouts/FooterLogin';
import NewPassword from '../components/modules/NewPassword';
import ButtonColor from '../components/ui/buttons/ButtonColor';


const NewPasswordPage = () => {
  return (
    <div className="login-container">
        <div className="login-container__left">
            <div className='bg-shadow'>
                <h1 className='login-container__left-title'>Navigate the Markets with Confidence</h1>
                <div className='login-container__left-chips'>
                    <ChipsOutline content='Advanced Technical Analysis/Charting Tools'></ChipsOutline>
                    <ChipsOutline content='Customizable UI for Your Trading Style'></ChipsOutline>
                    <ChipsOutline content='Customer Support'></ChipsOutline>
                    <ChipsOutline content='Community Feeds'></ChipsOutline>
                </div>
            </div>
        </div>    
        <div className="login-container__right">
            <div className='content-center'>
                <img src="/images/logoWhite.png"/>
                <NewPassword 
                    passwordTitle='Set a new password' 
                    passwordSubtitle='Create a new password. Ensure it differs from previous ones for security' 
                    passwordLabel='Password'
                    passwordLabelConfirm='Confirm password'
                >
                </NewPassword>
                <ButtonColor content='Resset Password' src='/Verify-code'></ButtonColor>
            </div>
            <FooterLogin content="Don't have an account?" redirectText="Create Account" src="/Create-account"></FooterLogin>
        </div>
    </div>
  );
};

export default NewPasswordPage;