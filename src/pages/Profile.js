import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import Layout from "../components/Layout/Layout";
import editUSer from "../img/edit-user.png";
import ProfileIcon from "../img/profileIcon.png";
import camera from "../img/camera.png";
import check from "../img/icon-check.png";
import "../styles/Profile.css";
import Sidebar from "./Sidebar";

function Profile() {
  const countryCodeOptions = [
    { value: "+91", label: "Ind", flag: "path/to/usa-flag-icon" },
    { value: "+1", label: "USA", flag: "path/to/usa-flag-icon" }, // Replace with the actual path
    { value: "+44", label: "UK", flag: "path/to/uk-flag-icon" }, // Replace with the actual path
    // Add more country code options as needed
  ];

  return (
    <Layout>

      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="3">
            <Sidebar />
          </MDBCol>

          <MDBCol md="9">
            <MDBRow>
              
              <MDBCol md="12" style={{ marginLeft: "-100px" }}>
              <h2 className="mt-4">Profile</h2>
                <MDBCard>
                  <MDBCardBody className="px-4">
                    <div className="icon mb-2 text-center">
                      <img className="user-photo" src={ProfileIcon} alt="" />
                      <div>
                        <span>
                          <img
                            className="mt-2 mx-5"
                            src={editUSer}
                            alt=""
                            width={30}
                          />
                        </span>

                        <span>
                          <img
                            className="mt-2 mx-5"
                            src={camera}
                            alt=""
                            width={30}
                          />
                        </span>
                      </div>
                    </div>
                    <MDBRow>
                      <MDBCol md="6">
                        <label style={{ fontWeight: "800" }}>User Name</label>
                        <MDBInput
                          wrapperClass="mb-4"
                          label="User name"
                          size="lg"
                          id="form1"
                          type="text"
                        />
                      </MDBCol>

                      <MDBCol md="6">
                        <label style={{ fontWeight: "800" }}>Date of Birth</label>
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Date of birth"
                          size="lg"
                          id="form2"
                          type="number"
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="6">
                        <label style={{ fontWeight: "800" }}>First Name</label>
                        <MDBInput
                          wrapperClass="mb-4"
                          label="First name"
                          size="lg"
                          id="form3"
                          type="text"
                        />
                      </MDBCol>

                      <MDBCol md="6">
                        <label style={{ fontWeight: "800" }}>Last Name</label>
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Last name"
                          size="lg"
                          id="form5"
                          type="text"
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow>
                      <MDBCol md="6">
                        <label style={{ fontWeight: "800" }}>Email Id</label>
                        <img src={check} alt="verified" width={20} />
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Email"
                          size="lg"
                          id="form6"
                          type="email"
                        />
                      </MDBCol>

                      <MDBCol md="6">
                        <label style={{ fontWeight: "800" }}>Phone</label>
                        <img src={check} alt="verified" width={20} />

                        <div className="d-flex align-items-center">
                          {/* Country Code Dropdown */}
                          <div className="country-code-dropdown mb-4 mx-2">
                            <select
                              className="form-select"
                              style={{ width: "80px" }}
                            >
                              {countryCodeOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  ({option.value})
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Phone Number Input */}
                          <MDBInput
                            wrapperClass="mb-4"
                            label="Phone number"
                            size="lg"
                            id="form5"
                            type="rel"
                          />
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="6">
                        <label style={{ fontWeight: "800" }}>
                          Current Password
                        </label>
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Current password"
                          size="lg"
                          id="form4"
                          type="password"
                        />
                      </MDBCol>

                      <MDBCol md="6">
                        <label style={{ fontWeight: "800" }}>New Password</label>
                        <MDBInput
                          wrapperClass="mb-4"
                          label="New password"
                          size="lg"
                          id="form10"
                          type="password"
                        />
                      </MDBCol>
                    </MDBRow>

                    <div className="text-center update-btn">
                      <MDBBtn
                        className="mb-4"
                        size="lg"
                        style={{ backgroundColor: "#3a3f8b" }}
                      >
                        Update
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>

          </MDBCol>
        </MDBRow>
      </MDBContainer>

    </Layout>
  );
}

export default Profile;
