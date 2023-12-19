import React, { useState, useEffect } from "react";
import "../styles/Password.css";
import bermuda_logo from "../img/bhc-logo.png";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { CheckEmail } from "../store/forget_pwdSlice";
import { selectAdditionalApiData } from "../store/forget_pwdSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Password() {
  const dispatch = useDispatch();

  const isEmailSent = useSelector(selectAdditionalApiData);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (isEmailSent) {
      toast.success("The email has been sent to your registered email id", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [isEmailSent]);

  const validateInput = () => {
    let isValid = true;
    // Validate Email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Enter a valid email address!");
      isValid = false;
    } else {
      setEmailError("");
    }
    return isValid;
  };

  const handlerPassword = (event) => {
    event.preventDefault();
    if (validateInput()) {
      dispatch(CheckEmail(email));
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
              <p className="sub-heading mt-10">Forgot Password</p>
              <div
                className="seperator"
                style={{ width: "45px", height: "8px", background: "#5694D0" }}
              ></div>
              <p className="text text-center">
                Provide your account's email for which you want to reset your
                password.
              </p>
              <div className="form-groups mb-3">
                {" "}
                <input
                  name="username"
                  type="text"
                  placeholder="Email/Phone"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="text-danger">{emailError}</div>
              </div>

              <div className="d-flex flex-column justify-content-center align-items-center">
                <NavLink to="/new-password">
                  <button
                    onClick={handlerPassword}
                    type="button"
                    className="btn next_btn btn-primary btn-verify  mt-20 mb-2"
                  >
                    Next
                  </button>
                </NavLink>
              </div>
              <ToastContainer />

              <div className="my-2 mt-3 footer_text">Powered by MAPay</div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Password;
