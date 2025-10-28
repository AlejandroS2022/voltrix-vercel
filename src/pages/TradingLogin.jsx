
import ButtonBase from '../components/ui/buttons/ButtonBase';
import InputBase from '../components/ui/inputs/InputBase';
import CheckboxBase from '../components/ui/checkbox/CheckboxBase';
import ButtonColor from '../components/ui/buttons/ButtonColor';
import FooterLogin from '../components/layouts/FooterLogin';


const TradingLogin = () => {
  return (
    <div className="login-container">
        <div className="login-container__left">
            <h1>hola como estas</h1>
        </div>    
        <div className="login-container__right">
            <div className='content-center'>
                <img src="images/logo.png"/>
                <div className='login-container__right__buttons'>
                    <ButtonBase content='Sign up with Google' src="images/Google-logo.svg"></ButtonBase>
                    <ButtonBase content='Sign up with Facebook' src="images/Facebook-logo.svg"></ButtonBase>
                </div>
                <hr className='hr-style'/>
                <InputBase label='Email Address'></InputBase>
                <InputBase label='Password' HelperText='At least 8 characters, with numbers and symbols.'></InputBase>
                <CheckboxBase label="Remember this device"></CheckboxBase>
                <ButtonColor content='Log in'></ButtonColor>
                <p>By logging in, you agree to follow our <a href="#">terms of service</a></p>
            </div>
            <FooterLogin></FooterLogin>
        </div>

    </div>
  );
};

export default TradingLogin;