import { React, useState } from "react";
import { Link } from "react-router-dom";
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
import Sidebar from "./Sidebar";
import Layout from "../components/Layout/Layout";
import "../styles/MyApplication.css";


const MyApplication = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  return (
    <Layout>
      <MDBContainer fluid>
        <MDBRow>

          <Sidebar isExpanded={isSidebarExpanded} onToggleSidebar={toggleSidebar} />

          <MDBCol md={isSidebarExpanded ? "9" : "11"}>
            <MDBContainer>
              <MDBRow>
                <div className="btn_container d-flex justify-content-between">
                  <h2 className="mt-4 mb-2 p-2">My Applications</h2>
                  <div className="btn_container d-flex justify-content-end">
                    <button type="button" className="btn btn-success btn1 mr-2" style={{ width: '180px', height: "43.83px" }}>
                      <p style={{ fontFamily: "popins,sans-serif", fontSize: "13px", }}>Initial Application</p>
                    </button>
                    <button type="button" className="btn btn2 " style={{ width: '205px', height: "43.83px", fontSize: "16px", marginLeft: "12px" }}>
                      <p style={{ fontFamily: "popins,sans-serif", fontSize: "13px", }}>Renewal Application</p>
                    </button>
                  </div>
                </div>
                <MDBCol
                  md="12" lg="12"
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
                              <Link to="">Edit</Link>
                            </td>
                          </tr>
                          <tr>
                            <td>Initial Application</td>
                            <td>Optometrist (Prescribing)</td>
                            <td>Draft</td>
                            <td>10/10/2023 6:35:44 AM</td>
                            <td>
                              <Link to="">Edit</Link>
                            </td>
                          </tr>
                        </MDBTableBody>
                      </MDBTable>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  );
};

export default MyApplication;
