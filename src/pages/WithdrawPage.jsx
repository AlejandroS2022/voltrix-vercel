import { Button } from "@mui/material";
import ButtonColor from "../components/ui/buttons/ButtonColor";
import InputBase from "../components/ui/inputs/InputBase";
import DepositForm from "../components/modules/DepositForm";
import { useState } from 'react';


const paymentMethods = [
  { key: 'bank', label: 'Bank Transfer' },
  { key: 'wallet', label: 'Wallet' },
];

const WithdrawPage = () => {
    const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0].key); 

    const handleButtonClick = (key) => {
        setSelectedMethod(key);
        console.log("Método seleccionado:", key);
    };
    const [isActive, setIsActive] = useState(false);

    // 🛑 2. Define la función que maneja el clic
    const handleAddIntermediaryClick = () => {
        // Invierte el valor actual: si estaba activo, se desactiva; si no, se activa.
        setIsActive(prev => !prev);
    };
  return (
    <>
      <div className="withdraw-content">
        <h1>Withdraw</h1>
        <div className="withdraw-content__container">
            <div className="withdraw-content__container-left">
                <h2>Payment information</h2>
                <p>Select your payment method</p>
                <div className="withdraw-content__container-left-buttons">
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
                <DepositForm textButton='Withdraw'/>
            </div>
            <div className="withdraw-content__container-right">
                <h2>Details</h2>
                <p>Add the information</p>
                <div className="withdraw-content__container-right-inputs">
                    <InputBase label='Bank Name'></InputBase>
                    <InputBase label='Account'></InputBase>
                    <InputBase label='Full Name'></InputBase>
                    <InputBase label='SWIFT'></InputBase>
                    <InputBase label='IBAN/CLABE'></InputBase>
                    <InputBase label='Account type'></InputBase>
                </div>
                {isActive && (
                    <div>
                        <hr />
                        <h2>Intermediary bank</h2>
                        <div className="withdraw-content__container-right-inputs">
                            <InputBase label='Bank Name'></InputBase>
                            <InputBase label='SWIFT'></InputBase>
                            <InputBase label='ABBA'></InputBase>
                        </div>
                    </div>
                )}
                <div className="withdraw-content__container-right-buttons">
                    <ButtonColor content='Save'/>
                    <ButtonColor content='Add intermediary bank' className={isActive ? 'active' : 'disabled'}
                // 🛑 4. Asigna el manejador de clic
                onClick={handleAddIntermediaryClick}/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawPage;