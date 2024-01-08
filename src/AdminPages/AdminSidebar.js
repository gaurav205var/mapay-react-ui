import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
import "../styles/AdminSidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'


const Sidebar = ({ isExpanded, onToggleSidebar }) => {
  const location = useLocation();

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
        onClick={onToggleSidebar}
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
              to="/admin-dashboard"
              className={`list-group-item list-group-item-action ${location.pathname === '/admin-dashboard' ? 'active-link' : ''}`}

            >
              <MDBIcon icon="tachometer-alt" className="me-2" />
              Dashboard
            </Link>

            <Link
              to="/admin-credentials"
              className={`list-group-item list-group-item-action ${location.pathname === '/admin-credentials' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="certificate" className="me-2" />
              Certificates
            </Link>
            <Link
              to="/user-management"
              className={`list-group-item list-group-item-action ${location.pathname === '/user-management' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="users" className="me-2" />
              User Management
            </Link>
            <Link
              to="/admin-messages"
              className={`list-group-item list-group-item-action ${location.pathname === '/admin-messages' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="message" className="me-2" />
              Messages
            </Link>
            <Link
              to="/manage-controls"
              className={`list-group-item list-group-item-action ${location.pathname === '/manage-controls' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="cogs" className="me-2" />
              Manage
            </Link>
            <Link
              to="/admin-profile"
              className={`list-group-item list-group-item-action ${location.pathname === '/admin-profile' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="user" className="me-2" />
              Profile
            </Link>
            <Link
              to="/archived-applications"
              className={`list-group-item list-group-item-action ${location.pathname === '/archived-applications' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="archive" className="me-2" />
              Archived
            </Link>
            <Link
              to="/transaction-history"
              className={`list-group-item list-group-item-action ${location.pathname === '/transaction-history' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="history" className="me-2" />
              Transaction History
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/admin-dashboard"
              className={`list-group-item list-group-item-action ${location.pathname === '/admin-dashboard' ? 'active-link' : ''}`}

            >
              <MDBIcon icon="tachometer-alt" className="me-2" />

            </Link>


            <Link
              to="/admin-credentials"
              className={`list-group-item list-group-item-action ${location.pathname === '/admin-credentials' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="certificate" className="me-2" />

            </Link>
            <Link
              to="/user-management"
              className={`list-group-item list-group-item-action ${location.pathname === '/user-management' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="users" className="me-2" />
            </Link>
            <Link
              to="/admin-messages"
              className={`list-group-item list-group-item-action ${location.pathname === '/admin-messages' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="message" className="me-2" />

            </Link>
            <Link
              to="/profile"
              className="list-group-item list-group-item-action"
            >
              <MDBIcon icon="user" />
            </Link>
            <Link
              to="/manage-controls"
              className={`list-group-item list-group-item-action ${location.pathname === '/manage-controls' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="cogs" className="me-2" />
            </Link>
            <Link
              to="/admin-profile"
              className={`list-group-item list-group-item-action ${location.pathname === '/admin-profile' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="user" className="me-2" />

            </Link>
            <Link
              to="/archived-applications"
              className={`list-group-item list-group-item-action ${location.pathname === '/archived-applications' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="archive" className="me-2" />

            </Link>
            <Link
              to="/transaction-history"
              className={`list-group-item list-group-item-action ${location.pathname === '/transaction-history' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="history" className="me-2" />

            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
