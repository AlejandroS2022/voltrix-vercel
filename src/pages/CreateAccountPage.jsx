import ChipsOutline from '../components/ui/buttons/ChipsOutline';
import FooterLogin from '../components/layouts/FooterLogin';
import CreateAccount from '../components/modules/CreateAccount';
import ButtonsRegister from '../components/modules/ButtonsRegister';

const CreateAccountPage = () => {
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
                <ButtonsRegister></ButtonsRegister>
                <hr/>
                <CreateAccount></CreateAccount>
                <p>By logging in, you agree to follow our <a href="#" className='color-link'>terms of service</a></p>
            </div>
            <FooterLogin content="Already have an account?" redirectText="Log in" src="/"></FooterLogin>
        </div>
    </div>
  );
};

export default CreateAccountPage;