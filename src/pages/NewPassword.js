import React, { useState } from "react";
import "../styles/NewPassword.css";
import bermuda_logo from "../img/bhc-logo.png";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { NavLink, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch} from "react-redux";
import { SetNewPwd } from "../store/setNewPwdSlice";
// import { useLocation } from "react-router-dom";

function NewPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setNewPassword] = useState("");
  const [cpassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const location = useLocation();
  const currentURL = window.location.href;
  

  const Password = {
    link: currentURL,
    password,
    cpassword,
  };
 
  const validateInputs = () => {
    let isValide = true;
    if (!password || !cpassword || password !== cpassword) {
      setPasswordError("Both Passwords are not same!");
      isValide = false;
    } else {
      setPasswordError("");
    }
    return isValide;
  };

  const handlerPasswordSet = (event) => {
    event.preventDefault();
    if (validateInputs()) {
      dispatch(SetNewPwd(Password));
      navigate("/login");
    }
  };
  return (
    <MDBContainer fluid>
      <MDBRow
        className="cntnr d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <MDBCol col="12">
          <MDBCard className="form-wrap text-dark my-5 mx-auto">
            <a href="/">
              <ArrowBackIcon />
            </a>

            <MDBCardBody className="p-2 d-flex flex-column align-items-center mx-auto w-100">
              <img
                src={bermuda_logo}
                alt="BHC Logo"
                className="img logo"
                style={{ width: "256.55px", height: "100px" }}
              />
              <p className="sub-heading">New Credentials</p>
              <div
                className="seperator"
                style={{ width: "45px", height: "8px", background: "#5694D0" }}
              ></div>
              <p className="text text-center">
                Your identity has been verified! Set your new password.
              </p>
              <form>
                <div className="form-groups mb-2">
                  <input
                    name="New Password"
                    type="text"
                    placeholder="New Password"
                    className="form-control"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="form-groups mb-2 position-relative">
                  <input
                    name="pwd"
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div className="text-danger">{passwordError}</div>
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center">
                  <NavLink to="/login">
                    <button
                      onClick={handlerPasswordSet}
                      type="button"
                      className="btn login_btn btn-success  mt-25 mb-2"
                    >
                      SET PASSWORD
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

export default NewPassword;
