import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import PriceChangeRoundedIcon from '@mui/icons-material/PriceChangeRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import { Link, useLocation } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const navItems = [
    { path: '/Home', icon: <HomeFilledIcon />, label: 'Home' },
    { path: '/Transactions-history', icon: <AccountBalanceWalletRoundedIcon />, label: 'History' },
    { path: '/Deposit', icon: <PriceChangeRoundedIcon />, label: 'Deposit' },
    { path: '/Cards', icon: <CreditCardRoundedIcon />, label: 'Withdraw' },
];

const bottomItems = [
    { path: '/Error', icon: <ManageAccountsRoundedIcon />, label: 'Error' },
    { path: '/Contact-us', icon: <ErrorRoundedIcon />, label: 'Contact us' },
];

const SidenavBar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
  return (
    <>
    <div className="sidenav-content">
        <div className="sidenav-content__top">
            <div className="sidenav-content__top-iso">
                <img src="images/voltrix.svg" alt="voltrix Iso" />
            </div>
            <div className='sidenav-content__top-categories'>
                {navItems.map((item) => (
                    <Tooltip 
                        title={item.label}
                        placement="right"
                        key={item.path}
                        arrow 
                    >
                        <Link 
                            to={item.path} 
                            className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                        >
                            {item.icon}
                        </Link>
                    </Tooltip>
                ))}
            </div>
        </div>

        <div className="sidenav-content__bottom">
            {bottomItems.map((item) => (
                <Tooltip 
                    title={item.label}
                    placement="right" 
                    key={item.path}
                    arrow
                >
                    <Link 
                        to={item.path} 
                        className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                    >
                        {item.icon}
                    </Link>
                </Tooltip>
            ))}
        </div>
    </div>
    </>
  );
};

export default SidenavBar;