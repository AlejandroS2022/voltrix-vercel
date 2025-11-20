import ButtonColor from "../ui/buttons/ButtonColor";
import InputBase from "../ui/inputs/InputBase";
import SelectBase from "../ui/selects/SelectBase";
import { useState } from 'react';

const statusOptions = [
    { value: 'market-price', label: 'Market Price' },
];

function SellForm() {
    const [selectedStatus, setSelectedStatus] = useState(''); 

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };
  return (
    <>        
        <div className='buy-form-content'>
            <div className="buy-form-content__order-top">
                <h3 className="title-field m-t-0">Order Type</h3>
                <SelectBase                 
                    options={statusOptions}
                    value={selectedStatus}
                    onChange={handleStatusChange}
                    ></SelectBase>
                <InputBase label='Quantity'></InputBase>
                <hr />
            </div>
            <div className="buy-form-content__order-bottom">
                <div className="buy-form-content__order-bottom-text">
                    <p>Buying Power</p>
                    <p>$122,912.50</p>
                </div>
                <div className="buy-form-content__order-bottom-text">
                    <p>Transaction Fees</p>
                    <p>$4.00</p>
                </div>
                <div className="buy-form-content__order-bottom-text">
                    <p>Estimated Total</p>
                    <p>$40,000</p>
                </div>
                <ButtonColor content='Sell MSFT'></ButtonColor>
            </div>

        </div>
    </>
  )
}

export default SellForm;
