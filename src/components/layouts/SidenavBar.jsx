import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import PriceChangeRoundedIcon from '@mui/icons-material/PriceChangeRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

const SidenavBar = () => {
  return (
    <>
    <div className="sidenav-content">
        <div className="sidenav-content__top">
            <div className="sidenav-content__top-iso">
                <img src="images/voltrix.svg" alt="voltrix Iso" />
            </div>
            <div className='sidenav-content__top-categories'>
                <div><HomeFilledIcon /></div>
                <div><BarChartRoundedIcon /></div>
                <div><AccountBalanceWalletRoundedIcon /></div>
                <div><PriceChangeRoundedIcon /></div>
                <div><CreditCardRoundedIcon /></div>
            </div>
        </div>

        <div className="sidenav-content__bottom">
            <div><ManageAccountsRoundedIcon /></div>
            <div><ErrorRoundedIcon /></div>
        </div>
    </div>
    </>
  );
};

export default SidenavBar;