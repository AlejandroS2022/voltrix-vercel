import ChipsOutline from '../components/ui/buttons/ChipsOutline';
import FooterLogin from '../components/layouts/FooterLogin';
import ForgotPassword from '../components/modules/ForgotPassword';
import ButtonColor from '../components/ui/buttons/ButtonColor';


const CodeVerify = () => {
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
                <ForgotPassword 
                    passwordTitle='Check you email' 
                    passwordSubtitle='We sent a reset link to you@example.com enter 5 digit code that mentioned in the email' 
                    passwordLabel='Enter code'
                >
                </ForgotPassword>
                <ButtonColor content='Verify Code' src='/New-password'></ButtonColor>
            </div>
            <FooterLogin content="Haven’t got the email yet?" redirectText="Resend email" src="/"></FooterLogin>
        </div>
    </div>
  );
};

export default CodeVerify;