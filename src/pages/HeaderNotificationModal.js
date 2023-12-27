import React, { useState } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const HeaderNotificationDropdown = () => {
    const [anchorElement, setAnchorElement] = useState(null);

    const handleClick = (event) => {
        setAnchorElement(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElement(null);
    };

    return (
        <>
            <IconButton
                style={{ marginLeft: '1rem', cursor: 'pointer', background: "transparent", color: "white" }}
                onClick={handleClick}
            >
                <NotificationsIcon />
            </IconButton>

            <Menu
                anchorEl={anchorElement}
                open={Boolean(anchorElement)}
                style={{ padding: "0px" ,borderRadius: "50%"}}
                onClose={handleClose}

            >
                {/* Replace the content below with your actual notification items */}
                <MenuItem onClick={handleClose} style={{ width: "310px", height: "40px" }}>Notification 1</MenuItem>
            </Menu>
        </>
    );
};

export default HeaderNotificationDropdown;
