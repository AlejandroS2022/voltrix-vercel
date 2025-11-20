import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

const ProfileInfoSection = ({ title, data, onEditClick, showEditButton = true }) => {
    return (
        <div className='account-content__info-profile__personal-info'>
            <div className='account-content__info-profile__personal-info-header'>
                <h2>{title}</h2>
                {showEditButton && (
                    <Button variant="contained" onClick={onEditClick} className='account-content__info-profile__personal-info-header-button'>
                        <CreateIcon />&nbsp;
                        Edit
                    </Button>
                )}
            </div>
            <div className='account-content__info-profile__personal-info-main'>
                {data.map((item, index) => (
                    <div 
                        key={index} 
                        className='account-content__info-profile__personal-info-main-text'
                    >
                        <h3>{item.label}</h3>
                        <h2>{item.value}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

ProfileInfoSection.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        })
    ).isRequired,
    onEditClick: PropTypes.func,
    showEditButton: PropTypes.bool,
};

export default ProfileInfoSection;