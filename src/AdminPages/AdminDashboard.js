import Layout from "../components/Layout/Layout";
import AdminSidebar from "./AdminSidebar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Notification } from "../store/NotificationSlice";
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
  const location = useLocation();
  const pathname = location.pathname;
  const id = pathname.split('/').pop();
  const uid = id | 0;
  console.log('ID from URL:', uid);
  const dispatch = useDispatch();
  const { uname } = useSelector((state) => state.login.user)
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  useEffect(() => {
    dispatch(Notification(uid))
  }, [])

  return (
    <>
      <Layout>
        <MDBContainer fluid>
          <MDBRow>
            {/* Pass the function to update the state to AdminSidebar */}
            <AdminSidebar isExpanded={isSidebarExpanded} onToggleSidebar={toggleSidebar} />

            <MDBCol md={isSidebarExpanded ? "9" : "11"}>
              <MDBContainer>
                <MDBRow>
                  <div className="btn_container d-flex justify-content-between">
                    <h2 className="mt-4 mb-2 p-2">{uname}'s Dashboard</h2>
                  </div>

                  <MDBCol
                    md="10"
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

                    <MDBCard className="recent-applications" style={{ marginRight: "0px" }}>
                      <MDBCardBody style={{ padding: "0px" }}>
                        <MDBTable>
                          <MDBTableHead
                            className="thead"
                            style={{ backgroundColor: "#575dae" }}
                          >
                            <tr className="tr">
                              <th className="th">Application Name</th>
                              <th className="th">Application Type</th>
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
                  <MDBCol md="2">
                    <div
                      className="not_contain"
                      style={{
                        width: "280px",
                        height: "250px",
                        marginLeft: "-10.6px",
                      }}
                    >
                      <div>
                        <button className="title_btn">My Notification</button>
                      </div>
                      <div
                        className="awesome"
                        style={{ padding: "10px", margin: "10px" }}
                      >
                        <p style={{ textAlign: "center" }}>No Notification</p>
                      </div>
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
