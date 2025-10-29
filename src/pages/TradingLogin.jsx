import ChipsOutline from '../components/ui/buttons/ChipsOutline';
import LoginContent from '../components/layouts/LoginContent';
import ButtonBase from '../components/ui/buttons/ButtonBase';
import FooterLogin from '../components/layouts/FooterLogin';
import CreateAccount from '../components/layouts/CreateAccount';


const TradingLogin = () => {
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
                <img src="images/logoWhite.png"/>
                <div className='login-container__right__buttons'>
                    <ButtonBase content='Sign up with Google' src="images/Google-logo.svg"></ButtonBase>
                    <ButtonBase content='Sign up with Facebook' src="images/Facebook-logo.svg"></ButtonBase>
                </div>
                <hr/>
                <CreateAccount></CreateAccount>
                <LoginContent></LoginContent>
                <p>By logging in, you agree to follow our <a href="#" className='color-link'>terms of service</a></p>
                <p><a href="#" className='color-link'>Forgot password?</a></p>
            </div>
            <FooterLogin></FooterLogin>
        </div>

    </div>
  );
};

export default TradingLogin;