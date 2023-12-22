import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import Layout from "../components/Layout/Layout";
import AdminSidebar from "./AdminSidebar";
import "../styles/Message.css";

const MessageCards = () => {
    return (
        <Layout>
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol md="3">
                        <AdminSidebar />
                    </MDBCol>
                    <MDBCol md="9" style={{ marginLeft: "-100px" }}>
                        <h3 className="mt-2 mb-2 p-2">Messages</h3>
                        <MDBRow>
                            {/* Left Message Card (Col-3) */}
                            <MDBCol md="4">
                                <MDBCard className="msg">
                                    <MDBCardBody>
                                        <h5 className="card-title">Left Message</h5>
                                        <p className="card-text">
                                            Content of the left message card goes here.
                                        </p>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            {/* Right Message Card (Col-12 on smaller screens, Col-6 on larger screens) */}
                            <MDBCol md="8">
                                <MDBCard className="msg">
                                    <MDBCardBody>
                                        <h5 className="card-title">Right Message</h5>
                                        <p className="card-text">
                                            Content of the right message card goes here.
                                        </p>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    );
};

export default MessageCards;