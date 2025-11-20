import InputBase from "../ui/inputs/InputBase";
import SelectBase from "../ui/selects/SelectBase";
import { useState } from 'react';
import ButtonColor from "../ui/buttons/ButtonColor";

const statusOptions = [
    { value: 'usd', label: 'USD' },
];

const DepositForm = ({textButton}) => {
    const [selectedStatus, setSelectedStatus] = useState(''); 

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };
  return (
    <>
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
            <ButtonColor content={textButton}></ButtonColor>
        </div>
    </>
  );
};

export default DepositForm;