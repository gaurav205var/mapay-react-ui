import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
import "../styles/Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight,faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${isExpanded ? "sidebar-expand" : "sidebar-collapse"} col-md-${isExpanded ? "3" : "1"}`}>
      <Link className="mt-2 mb-1"
        type="button"
        style={{
          background: "none",
          width: "3px",
          display: "flex",
          marginLeft: "10px",
          color: "black",
          fontSize: "26px"

        }}
        onClick={toggleSidebar}
      >
        {isExpanded ? (
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        ) : (
          <FontAwesomeIcon icon={faArrowCircleRight} />


        )}
      </Link>
      <div className="list-group">
        {isExpanded ? (
          <>
            <Link
              to="/dashboard"
              className={`list-group-item list-group-item-action ${location.pathname === '/dashboard' ? 'active-link' : ''}`}

            >
              <MDBIcon icon="tachometer-alt" className="me-2" />
              Dashboard
            </Link>
            <Link
              to="/my-applications"
              className={`list-group-item list-group-item-action ${location.pathname === '/my-applications' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="desktop" className="me-2" />
              My Application
            </Link>
            <Link
              to="/vault"
              className={`list-group-item list-group-item-action ${location.pathname === '/vault' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="lock" className="me-2" />
              Vault
            </Link>
            <Link
              to="/certificates"
              className={`list-group-item list-group-item-action ${location.pathname === '/certificates' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="certificate" className="me-2" />
              Certificates
            </Link>
            <Link
              to="/my-messages"
              className={`list-group-item list-group-item-action ${location.pathname === '/my-messages' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="message" className="me-2" />
              My Messages
            </Link>
            <Link
              to="/profile"
              className={`list-group-item list-group-item-action ${location.pathname === '/profile' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="user" className="me-2" />
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className="list-group-item list-group-item-action">
              <MDBIcon icon="tachometer-alt" />
            </Link>
            <Link
              to="/application"
              className="list-group-item list-group-item-action"
            >
              <MDBIcon icon="desktop" />
            </Link>
            <Link
              to="/vault"
              className="list-group-item list-group-item-action"
            >
              <MDBIcon icon="lock" />
            </Link>
            <Link
              to="/certificates"
              className="list-group-item list-group-item-action"
            >
              <MDBIcon icon="certificate" />
            </Link>
            <Link
              to="/my-messages"
              className="list-group-item list-group-item-action"
            >
              <MDBIcon icon="message" />
            </Link>
            <Link
              to="/profile"
              className="list-group-item list-group-item-action"
            >
              <MDBIcon icon="user" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;