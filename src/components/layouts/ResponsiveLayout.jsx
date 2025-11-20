import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import SidenavBar from "./SidenavBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const sidebarWidth = 70; 
const sidebarWidthSpace = 100; 
const mobileDrawerWidth = 240; 
const desktopBreakpoint = 'md';

function ResponsiveLayout(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', bgcolor: '#0A0A0A'}}>
            <CssBaseline />
            <Box
                component="header"
                className="header-mobile-mode"
                sx={{ 
                    position: 'fixed', 
                    width: { xs: '100%' , md: `calc(100% - ${sidebarWidthSpace}px)` },
                    ml: { sm: `${sidebarWidthSpace}px` }, 
                    bgcolor: '#0A0A0A', 
                    zIndex: (theme) => theme.zIndex.drawer,
                }}
            >
                <Toolbar disableGutters>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ ml: 1, display: { [desktopBreakpoint]: 'none' }, color: 'white' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Header />
                </Toolbar>
            </Box>

            <Box
                component="nav"
                sx={{ width: { [desktopBreakpoint]: sidebarWidth }, flexShrink: { [desktopBreakpoint]: 0 } }}
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', [desktopBreakpoint]: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: mobileDrawerWidth, bgcolor: '#0A0A0A' },
                    }}
                >
                    <SidenavBar />
                </Drawer>
                
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', [desktopBreakpoint]: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sidebarWidth, bgcolor: '#0A0A0A' },
                    }}
                    open
                >
                    <SidenavBar />
                </Drawer>
            </Box>
            
            <Box
                component="main"
                className="home-page__main-content"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { md: `calc(100% - ${sidebarWidth}px)` },
                    height: 'max-content',
                    bgcolor: '#0A0A0A',
                    ml: { xs: '16px', sm: '16px', md: '30px'},
                    mt: 8
                }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}

ResponsiveLayout.propTypes = {
    window: PropTypes.func,
};

export default ResponsiveLayout;