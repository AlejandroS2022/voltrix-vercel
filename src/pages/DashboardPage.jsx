import { useState } from 'react';
import { Tabs, Tab, Box } from "@mui/material"; 
import CustomTabPanel from "../components/modules/CustomTabPanel";
import BuyForm from '../components/modules/BuyForm';
import SellForm from '../components/modules/SellForm';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tradeTabsConfig = [
    { label: 'Buy', content: <BuyForm></BuyForm> },
    { label: 'Sell', content: <SellForm></SellForm> },
];


function DashboardPage() {
    const [value, setValue] = useState(0); 

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <>        
        <div className='dashboard-content'>
            <div className='dashboard-content__left'>
                <img src="images/leftSectionExample.png" alt="Left Section Example" />
            </div>
            <div className='dashboard-content__right'>
                <h3 className='dashboard-content__right-title'>Trade</h3>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs 
                            value={value} 
                            onChange={handleChange} 
                            aria-label="Trade tabs" 
                            indicatorColor="primary"
                        >
                            {tradeTabsConfig.map((tab, index) => (
                                <Tab 
                                    key={index} 
                                    label={tab.label} 
                                    value={index} 
                                    {...a11yProps(index)} 
                                    disableRipple
                                />
                            ))}
                        </Tabs>
                    </Box>
                    
                    {tradeTabsConfig.map((tab, index) => (
                        <CustomTabPanel value={value} index={index} key={index}>
                            {tab.content}
                        </CustomTabPanel>
                    ))}
                </Box>
                <h3 className='dashboard-content__right-title'>Time & Sales</h3>
                <div className='dashboard-content__right-price'>
                    <div className='dashboard-content__right-price-text'>
                        <p>16:59:32</p>
                        <p>420.56</p>
                        <p>25</p>
                    </div>
                    <div className='dashboard-content__right-price-text'>
                        <p>16:59:32</p>
                        <p>420.56</p>
                        <p>25</p>
                    </div>
                    <div className='dashboard-content__right-price-text'>
                        <p>16:59:32</p>
                        <p>420.56</p>
                        <p>25</p>
                    </div>
                    <div className='dashboard-content__right-price-text'>
                        <p>16:59:32</p>
                        <p>420.56</p>
                        <p>25</p>
                    </div>
                    <div className='dashboard-content__right-price-text'>
                        <p>16:59:32</p>
                        <p>420.56</p>
                        <p>25</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DashboardPage