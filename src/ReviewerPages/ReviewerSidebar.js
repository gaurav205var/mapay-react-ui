import { Link, useLocation } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
import "../styles/Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'


const Sidebar = ({ isExpanded, onToggleSidebar }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const id = pathname.split('/').pop();
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
              to="/reviewer-dashboard"
              className={`list-group-item list-group-item-action ${location.pathname === '/reviewer-dashboard' ? 'active-link' : ''}`}

            >
              <MDBIcon icon="tachometer-alt" className="me-2" />
              Dashboard
            </Link>
           
            <Link
              to="/reviewer-messages"
              className={`list-group-item list-group-item-action ${location.pathname === '/reviewer-messages' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="message" className="me-2" />
               Messages
            </Link>
            <Link
              to="/reviewer-profile"
              className={`list-group-item list-group-item-action ${location.pathname === '/reviewer-profile' ? 'active-link' : ''}`}
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
          </>
        ) : (
          <>
            <Link
              to="/reviewer-dashboard"
              className={`list-group-item list-group-item-action ${location.pathname === '/reviewer-dashboard' ? 'active-link' : ''}`}

            >
              <MDBIcon icon="tachometer-alt" className="me-2" />

            </Link>
            <Link
              to="/reviewer-messages"
              className={`list-group-item list-group-item-action ${location.pathname === '/reviewer-messages' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="message" className="me-2" />

            </Link>
            <Link
              to="/reviewer-profile"
              className={`list-group-item list-group-item-action ${location.pathname === '/reviewer-profile' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="user" className="me-2" />

            </Link>
            <Link
              to="/archived-applications"
              className={`list-group-item list-group-item-action ${location.pathname === '/archived-applications' ? 'active-link' : ''}`}
            >
              <MDBIcon icon="archive" className="me-2" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
