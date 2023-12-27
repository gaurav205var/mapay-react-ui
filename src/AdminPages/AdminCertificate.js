import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  MDBContainer,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
} from "mdbreact";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import Layout from "../components/Layout/Layout";
import AdminSidebar from "./AdminSidebar";


function Profile() {
  const [collapseID, setCollapseID] = useState("");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };




  const toggleAccordion = (accordionID) => () => {
    setCollapseID((prevCollapseID) =>
      prevCollapseID !== accordionID ? accordionID : ""
    );
  };

  const getArrowIcon = () => {
    return collapseID === "accordion1" ? faChevronUp : faChevronDown;
  };

  return (
    <Layout>
      <MDBContainer fluid>
        <MDBRow>

        <AdminSidebar isExpanded={isSidebarExpanded} onToggleSidebar={toggleSidebar} />



          <MDBCol md={isSidebarExpanded ? "9" : "11"}>

            <MDBContainer>
              <h2 className="mt-3">
                Certificates
              </h2>
              <MDBCard>
                <MDBCardHeader
                  onClick={toggleAccordion("accordion1")}
                  className="d-flex justify-content-between align-items-center"
                >
                  <span style={{ cursor: "pointer" }}>Issued Certificates</span>
                  <FontAwesomeIcon icon={getArrowIcon()} />
                </MDBCardHeader>
                <MDBCollapse
                  id="accordion1"
                  isOpen={collapseID === "accordion1"}
                >
                  <MDBCardBody>
                    <img src="" alt="" />
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  );
}

export default Profile;
