import Layout from "../components/Layout/Layout";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Notification } from "../store/NotificationSlice";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";


const StandaloneSidebar = () => {
  const navigate = useNavigate();
  const { uname, uid } = useSelector((state) => state.login.user);
  const id = uid | 0;
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notification.data);

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const handler = () => {
    navigate("/initial-application");
  }
  const handler2 = () => {
    navigate("/renewal-application");
  }
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  useEffect(() => {
    dispatch(Notification(id))
  }, [])

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

  return (
    <>
      <Layout>
        <MDBContainer fluid>
          <MDBRow>

            <Sidebar isExpanded={isSidebarExpanded} onToggleSidebar={toggleSidebar} />

            <MDBCol md={isSidebarExpanded ? "9" : "11"}>
              <MDBContainer>

                <MDBRow>
                  <div className="btn_container d-flex justify-content-between">
                    <h2 className="mt-4 mb-2 p-2">{uname}'s Dashboard</h2>
                    <div className="btn_container d-flex justify-content-end" style={{ marginRight: "-60px" }}>
                      <button type="button" onClick={handler} className="btn btn-success btn1 mr-2" style={{ width: '180px', height: "43.83px" }}>
                        <p style={{ fontFamily: "popins,sans-serif", fontSize: "13px", }}>Initial Application</p>
                      </button>
                      <button onClick={handler2} type="button" className="btn btn2 " style={{ width: '205px', height: "43.83px", fontSize: "16px", marginLeft: "12px" }}>
                        <p style={{ fontFamily: "popins,sans-serif", fontSize: "13px", }}>Renewal Application</p>
                      </button>
                    </div>
                  </div>

                  <MDBCol
                    md="10" sm="8"
                    className="table_contain"
                    style={{ padding: "10px 0px 0px" }}
                  >
                    <button
                      data-bs-toggle="tab"
                      data-bs-target="#RecentApplications"
                      type="button"
                      role="tab"
                      aria-controls="NeedReview"
                      aria-selected="false"
                      className=" btn_app"
                      id="recent-applications"
                    >
                      Recent Applications
                    </button>

                    <MDBCard className="recent-applications">
                      <MDBCardBody style={{ padding: "0px" }}>
                        <MDBTable>
                          <MDBTableHead
                            className="thead"
                            style={{ backgroundColor: "#575dae" }}
                          >
                            <tr className="tr">
                              <th className="th">Application Type</th>
                              <th className="th">Profession Type</th>
                              <th className="th">Status</th>
                              <th className="th">Last Updated</th>
                              <th className="th">Action</th>
                            </tr>
                          </MDBTableHead>
                          <MDBTableBody>
                            <tr>
                              <td>Renewal Application</td>
                              <td>Optician</td>
                              <td>Draft</td>
                              <td>12/5/2023 3:06:17 AM</td>
                              <td>
                                <a href="/">Edit</a>
                              </td>
                            </tr>
                            <tr>
                              <td>Initial Application</td>
                              <td>Optometrist (Prescribing)</td>
                              <td>Draft</td>
                              <td>10/10/2023 6:35:44 AM</td>
                              <td>
                                <a href="/">Edit</a>
                              </td>
                            </tr>
                          </MDBTableBody>
                        </MDBTable>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="2" className="pl-10">
                    <div className="title_btn">My Notifications</div>
                    <div className="awesome">
                      {notifications.length > 0 ? (
                        <ul className="notify-list">
                          {notifications.map((notification, index) => (
                            <li key={index}>
                              <p style={{ marginBottom: "0" }}>{notification.body_message}</p>

                              <p className="time">{formatDate(notification.createddate)}</p>

                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p style={{ textAlign: "center", marginTop: "15px" }}>No Notification</p>
                      )}
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    </>
  );
};

export default StandaloneSidebar;
