import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import "../../styles/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/LoginSlice";
import { useNavigate } from "react-router-dom";
import logo from "../../img/bhc-logo-white.png";
import EmailIcon from "@mui/icons-material/Email";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import profile from "../../img/profileIcon.png";
import HeaderNotificationDropdown from "../../pages/HeaderNotificationModal";
import ProfileModal from "../../pages/ProfileModal";

const Navbar = () => {

  const state = useSelector((state) => state.login.isAuthenticated);
  const { uname } = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const LogOutHandler = (event) => {
    event.preventDefault();

    if (state) {
      dispatch(logout());
    }
    console.log("clickk");
    navigate("/login");
  }





  const handleMenu = (event) => {
    if (event.currentTarget.textContent === "My Profile") {
      setIsProfileModalOpen(true);
      // Close the regular menu
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
      // Close the profile modal
      setIsProfileModalOpen(false);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsProfileModalOpen(false);

  };

  return (
    <div>
      <AppBar position="static" className="nav">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="BHC Logo White" width={180} height={69.47} />
          </Typography>
          <div className="right">
            <EmailIcon className="eicon" />
            {/* <NotificationsIcon style={{ marginLeft: "1rem" }} /> */}
            <HeaderNotificationDropdown className="notification-1" />
            <Button
              onClick={handleMenu}
              sx={{
                marginTop: "10px",

                color: "white",
              }}
              variant="contained"
            >
              <span>{uname}</span>
              <img src={profile} alt="" width={30} height={30} />
              <ArrowDropDownIcon />
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleMenu}>My Profile</MenuItem>
              <MenuItem onClick={LogOutHandler}>Log Out</MenuItem>


            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <ProfileModal open={isProfileModalOpen} setOpen={setIsProfileModalOpen} />
    </div>
  );
};

export default Navbar;


// import React, { useEffect } from 'react';
// import { Dropdown, Collapse, initMDB } from 'mdb-ui-kit';
// import { Button } from "@mui/material";
// import "../../styles/Header.css";
// import logo from "../../img/bhc-logo-white.png";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import EmailIcon from "@mui/icons-material/Email";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import profile from "../../img/profileIcon.png";



// initMDB({ Dropdown, Collapse });

// const Header = () => {
//   useEffect(() => {

//     const dropdownElement = document.querySelector('[data-mdb-dropdown-init]');
//     if (dropdownElement) {
//       new Dropdown(dropdownElement);
//     }
//   }, []);

//   return (

//     <>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary nav" style={{ backgroundColor: "background-color: #3a3f8b" }}>
//         {/* Container wrapper */}
//         <div className="container-fluid" style={{ display: "flex", justifyContent: "end", height: "85.45px" }}>

//           <div className="navbar-brand" style={{ flex: "1" }}>
//             <img src={logo} alt="" width={180} height={69.47} />
//           </div>
//           {/* Toggle button */}
//           <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

//             {/* Collapsible wrapper */}
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               {/* Navbar brand */}

//               {/* Left links */}

//               {/* Left links */}
//             </div>
//             {/* Collapsible wrapper */}
//             {/* Right elements */}
//             <div className="d-flex align-items-center" style={{}}>
//               {/* Icon */}

//               <EmailIcon className="eicon" style={{ color: "white" }} />
//               {/* Notifications */}
//               <div className="dropdown">

//                 <NotificationsIcon style={{ marginLeft: "1rem", color: "white" }} />
//               </div>
//               <ul
//                 className="dropdown-menu dropdown-menu-end"
//                 aria-labelledby="navbarDropdownMenuLink"
//               >
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Some news
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Another news
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Something else here
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             {/* Avatar */}
//             <div className="dropdown">
//               <a
//                 data-mdb-dropdown-init=""
//                 className="dropdown-toggle d-flex align-items-center hidden-arrow"
//                 href="#"
//                 id="navbarDropdownMenuAvatar"
//                 role="button"
//                 aria-expanded="false"
//               >
//                 <Button className='pbtn'
//                   style={{ width: "132px", height: "40px", borderRadius: "20px", marginLeft: "10px" }}

//                   sx={{

//                     backgroundColor: "white",
//                     color: "#010101",
//                   }}
//                   variant="contained"
//                 >
//                   <span>Yash</span>
//                   <img src={profile} alt="" width={30} height={30} style={{ borderRadius: "50%", padding: "3px" }} />
//                   <ArrowDropDownIcon />
//                 </Button>
//               </a>
//               <ul
//                 className="dropdown-menu dropdown-menu-end"
//                 aria-labelledby="navbarDropdownMenuAvatar"
//               >
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     My profile
//                   </a>
//                 </li>

//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Logout
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           {/* Right elements */}
//         </div>
//         {/* Container wrapper */}
//       </nav >
//       {/* Navbar */}
//     </>

//   );
// };

// export default Header;

