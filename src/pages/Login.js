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
              <p class="sub-heading">Login</p>
              <div
                className="seperator mb-4"
                style={{ width: "45px", height: "8px", background: "#5694D0" }}
              ></div>
              <form>
                <div class="form-groups mb-4">
                  <input name="username" type="text" placeholder="Username" />
                </div>
                <div class="form-groups mb-4 position-relative">
                  <input name="pwd" type="password" placeholder="xxxxxxxxxx" />
                </div>

                <div class="form-groups row mb-2">
                  <div class="col-sm-6 text-start">
                    <a href="signup">
                      <span>New user?</span>
                    </a>
                  </div>
                  <div class="col-sm-6 text-end">
                    <a href="forgot-password">
                      <span>Forgot password?</span>
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <NavLink>
                    <button
                      type="button"
                      class="btn login_btn btn-success  mt-20 mb-2"
                    >
                      LOGIN
                    </button>
                  </NavLink>
                </div>
              </form>
              <div className="my-2 mt-3 footer_text">Powered by MAPay</div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Home;
