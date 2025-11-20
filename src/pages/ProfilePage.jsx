// En tu página de perfil (ej. ProfilePage.jsx)
import React, { useState } from 'react';
import ProfilePictureUploader from '../components/modules/ProfilePictureUploader';
import { Button } from '@mui/material';
import ProfileInfoSection from '../components/modules/ProfileInfoSection';

const handlePersonalEdit = () => {
    alert('Abriendo modal o formulario de edición de información personal...');
};

const userData = [
    { label: 'First Name', value: 'User1' },
    { label: 'Last Name', value: 'User2' },
    { label: 'Date of Birth', value: 'December 17, 1990' },
    { label: 'Email Address', value: 'username.123@hotmail.com' },
    { label: 'Phone Number', value: '(123) 456-7890' },
    { label: 'ID', value: '25874524' },
    { label: 'Username', value: 'Testname123' },
];

const addressData = [
    { label: 'Country', value: 'United States' },
    { label: 'City/State', value: 'Chicago, Illinois' },
    { label: 'Street', value: '4517 Washington Ave. Manchester, Kentucky 39495' },
];
const employerData = [
    { label: 'Company Name', value: 'Designer Inc.'},
    { label: 'City/State', value: 'Chicago, Illinois'}
];

function ProfilePage() {
    const [userProfilePicture, setUserProfilePicture] = useState('https://via.placeholder.com/150/FF0000/FFFFFF?text=JP');

    const handleImageUpdate = (newImageFile) => {
        if (newImageFile) {
            console.log('Nueva imagen seleccionada:', newImageFile);
            setUserProfilePicture(URL.createObjectURL(newImageFile));
        } else {
            console.log('Imagen de perfil eliminada.');
            setUserProfilePicture(null);
        }
    };

    return (
        <div className='account-content'>
            <h1>Account Settings</h1>
            <p>View and manage account details such as name, email address, contact information, etc.</p>
            <div className='account-content__info-profile'>
                <div>
                    <ProfilePictureUploader
                        currentImageUrl={userProfilePicture}
                        onImageChange={handleImageUpdate}
                        size="large"
                    />
                    <div className='account-content__info-profile-user'>
                        <h3>Account Number</h3>
                        <h2>4453728992</h2>
                    </div>
                </div>
                <div className='account-content__info-button'>
                    <Button variant="contained">
                        Deactivate Account
                    </Button>
                </div>
            </div>
            <div className='account-content__info-cards'>
                <ProfileInfoSection
                    title="Personal Information"
                    data={userData}
                    onEditClick={handlePersonalEdit}
                />
                <ProfileInfoSection
                    title="Address Information"
                    data={addressData}
                    onEditClick={() => alert('Editando dirección...')}
                />
                <ProfileInfoSection
                    title="Employer"
                    data={employerData}
                    onEditClick={() => alert('Editando dirección...')}
                />
            </div>
        </div>
    );
}

export default ProfilePage;