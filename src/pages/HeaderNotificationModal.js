import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Menu,IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "../styles/HeaderNotification.css";

const HeaderNotificationDropdown = () => {
    const notifications = useSelector((state) => state.notification.data);
    const [anchorElement, setAnchorElement] = useState(null);

    const handleClick = (event) => {
        setAnchorElement(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElement(null);
    };
      // Function to format date
function formatDate(createddate) {
    const date = new Date(createddate);
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
    return date.toLocaleString('en-US', options);
  }

   // ... (existing code)

return (
    <>
      <IconButton
        style={{
          marginLeft: '1rem',
          cursor: 'pointer',
          background: 'transparent',
          color: 'white',
        }}
        onClick={handleClick}
      >
        <NotificationsIcon />
      </IconButton>
  
      <Menu
        className="d-flex flex-column"
        anchorEl={anchorElement}
        open={Boolean(anchorElement)}
        style={{ padding: '0px', borderRadius: '50%' }}
        onClose={handleClose}
      >
        <div className="awesome">
          {notifications.length > 0 ? (
            <div className="notify-list">
              {notifications.map((notification, index) => (
                <div key={index} className="notification-container">
                  <p style={{ marginBottom: '0' }}>{notification.body_message}</p>
                  <p className="time">{formatDate(notification.createddate)}</p>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center' }}>No Notification</p>
          )}
        </div>
      </Menu>
    </>
 );
          };
  
export default HeaderNotificationDropdown;
