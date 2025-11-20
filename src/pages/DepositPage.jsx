import { Button } from "@mui/material";
import DepositForm from "../components/modules/DepositForm";
import { useState } from 'react';

const paymentMethods = [
  { key: 'bank', label: 'Bank Transfer' },
  { key: 'binance', label: 'Binance' },
  { key: 'clip', label: 'Clip' },
  { key: 'western', label: 'Western Union' },
  { key: 'visa_master', label: 'Visa / MasterCard' },
];

const DepositPage = () => {

  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0].key); 

  const handleButtonClick = (key) => {
      setSelectedMethod(key);
      console.log("Método seleccionado:", key);
  };
  return (
    <>
      <div className="deposit-content">
        <h1>Deposit</h1>
        <div className="deposit-content__top">
            <h2>Payment information</h2>
            <p>Select your payment method</p>

            <div className="deposit-content__top-buttons">
              {paymentMethods.map((method) => (
                <Button variant="contained" 
                        key={method.key}    
                        onClick={() => handleButtonClick(method.key)}
                        className={selectedMethod === method.key ? 'active' : null}
                >
                  {method.label}
                </Button>
                ))} 
            </div>
        </div>
        <div className="deposit-content__bottom">
            <DepositForm textButton='Deposit'></DepositForm>
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