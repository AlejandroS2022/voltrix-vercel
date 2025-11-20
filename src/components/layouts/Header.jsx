import { Avatar } from "@mui/material";
import SearchInput from "../ui/inputs/SearchInput";
import useWindowSize from './useWindowSize';

const MOBILE_BREAKPOINT = 900;
const Header = () => {
    const { width } = useWindowSize();
    const isMobile = width < MOBILE_BREAKPOINT;
    if (isMobile) {
        return (
            <div className="header-content mobile-mode">
                <div className="header-content__left">
                    <div className="header-content__left-avatar">
                        <img src="/images/logoWhite.svg" alt="voltrix Iso" width={150}/>
                    </div>
                </div>
            </div>
        );
    }
  return (
    <>
    <div className="header-content">
        <div className="header-content__left">
            <div className="header-content__left-avatar">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }}/>
                <div className="header-content__left-avatar-user">
                    <h3>Username</h3>
                    <p>Account: 4453728992</p>
                </div>
            </div>
            <div className="header-content__left-balance">
                <p>Portfolio Balance</p>
                <h3>$623,098.17</h3>
            </div>
            <div className="header-content__left-available-founds">
                <p>Available Funds</p>
                <h3>$122,912.50</h3>
            </div>
        </div>

        <div className="header-content__right">
            <SearchInput></SearchInput>
        </div>
    </div>
    </>
  );
};

export default Header;