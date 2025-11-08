import React from 'react'; 
import CardInfo from "../components/modules/CardInfo";
import TableHistory from "../components/modules/TableHistory";
import CustomTabPanel from "../components/modules/CustomTabPanel"; 
import { Tabs, Tab, Box } from "@mui/material"; 
import MuiDatePicker from "../components/modules/MuiDatePicker";
import { Button } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import ReceiptIcon from '@mui/icons-material/Receipt';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const TransactionsHistory = () => {
      const [value, setValue] = React.useState(0); 
      
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

  return (
    <>
      <div className="transactions-content">
        <h1>Transactions History</h1>
        <div className="transactions-content__buttons">
          <MuiDatePicker></MuiDatePicker>
          <div className='transactions-content__buttons-flex'>
            <Button variant="contained" endIcon={<DescriptionIcon />}>Export CSV</Button>
            <Button variant="contained" endIcon={<ReceiptIcon />}>Download Invoice</Button>
            </div>
        </div>
        <div className="transactions-content__cards">
          <CardInfo title='balance' src='images/DollarIcon.svg' content='$78,987.00'></CardInfo>
          <CardInfo title='Savings' src='images/Money.svg' content='$23,000.00'></CardInfo>
          <CardInfo title='Incomes' src='images/arrowBottom.svg' content='$28,670.00'></CardInfo>
          <CardInfo title='Expenses' src='images/arrowTop.svg' content='$3,456.00'></CardInfo>
        </div>
        <hr />
        <div className="transactions-content__table">
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="Transaction history tabs"  indicatorColor="primary">
                <Tab label="All" value={0} {...a11yProps(0)} sx={{ width: '64px', minWidth: '64px' }} disableRipple/>
                <Tab label="Savings" value={1} {...a11yProps(1)}  disableRipple/>
                <Tab label="Income" value={2} {...a11yProps(2)}  disableRipple/>
                <Tab label="Expenses" value={3} {...a11yProps(3)}  disableRipple/>
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}><TableHistory type="all"></TableHistory></CustomTabPanel>
            <CustomTabPanel value={value} index={1}><TableHistory type="savings"></TableHistory></CustomTabPanel>
            <CustomTabPanel value={value} index={2}><TableHistory type="income"></TableHistory></CustomTabPanel>
            <CustomTabPanel value={value} index={3}><TableHistory type="expenses"></TableHistory></CustomTabPanel>
          </Box>
        </div>
      </div>
    </>
  );
};

export default TransactionsHistory;