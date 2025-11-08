import { Button } from "@mui/material";
import InputBase from "../components/ui/inputs/InputBase";
import SelectBase from "../components/ui/selects/SelectBase";
import { useState } from 'react';
import ButtonColor from "../components/ui/buttons/ButtonColor";

const statusOptions = [
  { value: 'usd', label: 'USD' },
];

const DepositPage = () => {

    const [selectedStatus, setSelectedStatus] = useState(''); 

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };
  return (
    <>
      <div className="deposit-content">
        <h1>Deposit</h1>
        <div className="deposit-content__top">
            <h2>Payment information</h2>
            <p>Select your payment method</p>

            <div className="deposit-content__top-buttons">
                <Button variant="contained">Bank Transfer</Button>
                <Button variant="contained">Binance</Button>
                <Button variant="contained">Clip</Button>
                <Button variant="contained">Western Union</Button>
                <Button variant="contained">Visa / MasterCard</Button>
            </div>
        </div>
        <div className="deposit-content__bottom">
            <div className="deposit-content__bottom-left">
                <h2>Choose currency</h2>
                <SelectBase
                    options={statusOptions}
                    value={selectedStatus}
                    onChange={handleStatusChange}
                    minWidth={200}
                />
                <h2>Enter the amount</h2>
                <InputBase></InputBase>
                <ButtonColor content='Deposit'></ButtonColor>
            </div>
            <div className="deposit-content__bottom-right">
                <h1>Payment details</h1>
                <p>Please note that bank transfers are processed within 3 business days before being credited to your account. Remember to verify your bank details each time you make a deposit.</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default DepositPage;