import ChipsOutline from '../components/ui/buttons/ChipsOutline';
import LoginContent from '../components/modules/LoginContent';
import FooterLogin from '../components/layouts/FooterLogin';
import ButtonsRegister from '../components/modules/ButtonsRegister';

import { Link } from 'react-router-dom';


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
                <ButtonsRegister></ButtonsRegister>
                <hr/>
                <LoginContent></LoginContent>
                <p>By logging in, you agree to follow our <a href="#" className='color-link'>terms of service</a></p>
                <p>
                    <Link to="/Forgot-password" className='color-link'>
                        Forgot password?
                    </Link>
                </p>
            </div>
            <FooterLogin content="Don't have an account?" redirectText="Create Account" src="/Create-account"></FooterLogin>
        </div>
    </div>
  );
};

export default TradingLogin;