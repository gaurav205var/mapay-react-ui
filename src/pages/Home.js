import React from "react";
import "../styles/Home.css";
import bermuda_logo from "../img/bhc-logo.png";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <MDBContainer fluid>
      <MDBRow
        className="cntnr d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <MDBCol col="12">
          <MDBCard className="wrapit bg-white text-dark my-5 mx-auto">
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <img
                src={bermuda_logo}
                alt="BHC Logo"
                className="img logo mt-30"
                style={{ width: "257px", height: "100px" }}
              />
              <p class="sub-heading">Health Professional</p>
              <div className="but d-flex flex-column h-20 justify-content-center align-items-center">
                <NavLink to="/login">
                  <button
                    type="button"
                    class="btn login_btn btn-success mt-20 mb-2"
                  >
                    LOGIN
                  </button>
                </NavLink>
                <NavLink to="/signup">
                  <button
                    type="button"
                    class="btn signup_btn btn-primary mt-10 mb-3"
                  >
                    SIGNUP
                  </button>
                </NavLink>
              </div>
              <div
                className="seperator mb-4"
                style={{ width: "45px", height: "8px", background: "#5694D0" }}
              ></div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="sub-heading">Admin/Reviewer</p>
                <NavLink to="/login">
                  <button
                    type="button"
                    class="btn login_btn btn-success  mt-20 mb-2"
                  >
                    LOGIN
                  </button>
                </NavLink>
              </div>
              <div className="my-2 mt-3 footer_text">Powered by MAPay</div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Home;
