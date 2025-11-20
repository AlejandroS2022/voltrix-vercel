import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, Box } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';

const ProfilePictureUploader = ({ currentImageUrl, onImageChange, size = 'medium' }) => {

    const [previewUrl, setPreviewUrl] = useState(currentImageUrl);

    const fileInputRef = useRef(null);

    const avatarSize = {
        small: { width: 60, height: 60, fontSize: 30 },
        medium: { width: 120, height: 120, fontSize: 60 },
        large: { width: 180, height: 180, fontSize: 90 },
    };


    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (previewUrl && previewUrl !== currentImageUrl) {
                URL.revokeObjectURL(previewUrl);
            }
            
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            onImageChange(file);
        }
        event.target.value = null;
    };
    const hasImage = !!currentImageUrl || !!previewUrl;

    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: 1.5, 
                p: 2 
            }}
        >
            <Avatar 
                src={previewUrl || ''} 
                sx={{ 
                    ...avatarSize[size], 
                    bgcolor: !hasImage ? 'grey.500' : 'transparent'
                }}
            >
                {!hasImage && <PersonIcon sx={{ fontSize: avatarSize[size].fontSize }} />}
            </Avatar>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
            <Button
                variant="contained"
                className='button-edit'
                onClick={handleUploadClick}
                size={size === 'small' ? 'small' : 'medium'}
            ><CreateIcon /></Button>
        </Box>
    );
};

ProfilePictureUploader.propTypes = {
    currentImageUrl: PropTypes.string,
    onImageChange: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default ProfilePictureUploader;