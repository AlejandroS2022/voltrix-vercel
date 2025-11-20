import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import PriceChangeRoundedIcon from '@mui/icons-material/PriceChangeRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import { Link, useLocation } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import useWindowSize from './useWindowSize';
import { Avatar } from '@mui/material';


const navItems = [
    { path: '/Home', icon: <HomeFilledIcon />, label: 'Home' },
    { path: '/Dashboard', icon: <BarChartRoundedIcon />, label: 'Dashboard' },
    { path: '/Transactions-history', icon: <AccountBalanceWalletRoundedIcon />, label: 'Transactions' },
    { path: '/Deposit', icon: <PriceChangeRoundedIcon />, label: 'Deposit' },
    { path: '/Withdraw', icon: <CreditCardRoundedIcon />, label: 'Withdraw' },
];

const bottomItems = [
    { path: '/Profile-settings', icon: <ManageAccountsRoundedIcon />, label: 'Profile' },
    { path: '/Contact-us', icon: <ErrorRoundedIcon />, label: 'Contact us' },
];

const MOBILE_BREAKPOINT = 900;

const SidenavBar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const { width } = useWindowSize();
    const isMobile = width < MOBILE_BREAKPOINT;
    if (isMobile) {
        return (
            <div className="sidenav-content mobile-mode">
                <div className="sidenav-content__top">
                    <div className="sidenav-content__top-iso">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 40, height: 40 }}/>
                        <div className="header-content__left-avatar-user">
                            <h3>Username</h3>
                            <p>Account: 4453728992</p>
                        </div>
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
                                    {item.icon} {item.label}
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
                                {item.icon} {item.label}
                            </Link>
                        </Tooltip>
                    ))}
                </div>
            </div>
        );
    }
  return (
    <>
    <div className="sidenav-content">
        <div className="sidenav-content__top">
            <div className="sidenav-content__top-iso">
                <img src="/images/voltrix.svg" alt="voltrix Iso" />
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