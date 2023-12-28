import { React, useState } from "react";
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
import ReviewerSidebar from "./ReviewerSidebar";
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

          <ReviewerSidebar isExpanded={isSidebarExpanded} onToggleSidebar={toggleSidebar} />

          <MDBCol md={isSidebarExpanded ? "9" : "11"}>
            <MDBContainer>
              <MDBRow>
                <div className="btn_container d-flex justify-content-between">
                  <h2 className="mt-4 mb-2 p-2">Archived Applications</h2>
                </div>
                <MDBCol
                  md="12" lg="12"
                  className="table_contain"
                  style={{ padding: "10px 0px 0px" }}
                >
              

                  <MDBCard className="recent-applications">
                    <MDBCardBody style={{ padding: "0px" }}>
                      <MDBTable>
                        <MDBTableHead
                          className="thead"
                          style={{ backgroundColor: "#575dae" }}
                        >
                          <tr className="tr">
                            <th className="th">Application Name</th>
                            <th className="th">Application Type</th>
                            <th className="th">Profession Type</th>
                            <th className="th">Status</th>
                            <th className="th">Last Updated</th>
                            <th className="th">Action</th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                          <tr>
                            <td>
                            <div>
                        <p>No results available to show</p>
                        </div>
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
