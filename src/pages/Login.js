import React from "react";
import "../styles/Login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../store/LoginSlice";
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

function Login() {
  const dispatch = useDispatch();
  const {uid,utype} = useSelector((state) => state.login.user)
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState(""); // New state for server error

  const loginData = {
    username,
    password,
  };
  const validateForm = () => {
    let isValid = true;

    // Validate username
    if (!username) {
      setUsernameError("Username is required");
      isValid = false;
    } else {
      setUsernameError("");
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };
  const Status = useSelector((state) => state.login.loginStatus);
  const verifyemail = useSelector((state) => state.login.verifyemail);
  console.log("dishooom", verifyemail);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        dispatch(LoginUser(loginData));
      } catch (error) {
        setServerError("An unexpected error occurred");
        console.error("Error:", error);
      }
    }
  };

  useEffect(() => {
    if (verifyemail === false) {
      navigate(`/email-verification/${uid}`);
    } else if (verifyemail === true && Status?.status === 200) {
      switch (utype) {
        case 1:
          navigate("/dashboard");
          break;
        case 2:
          navigate("/admin-dashboard");
          break;
        case 3:
          navigate("/reviewer-dashboard");
          break;
        default:
          
          break;
      }    
    }
  }, [verifyemail, Status, navigate]);

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
              <p className="sub-heading mt-10">Login</p>
              <div className="text-danger mt-2">{serverError}</div>
              <div
                className="seperator"
                style={{ width: "45px", height: "8px", background: "#5694D0" }}
              ></div>
              <form>
                <div className="form-groups mb-2">
                  <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    className="form-control"
                    onChange={(event) => setUserName(event.target.value)}
                  />
                  <div className="text-danger">{usernameError}</div>
                </div>

                <div className="form-groups mb-2 position-relative">
                  <input
                    name="pwd"
                    type="password"
                    placeholder="xxxxxxxxxx"
                    className="form-control"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <div className="text-danger">{passwordError}</div>
                </div>

                <div className="form-groups row mb-2">
                  <div className="col-sm-6 text-start">
                    <a href="signup">
                      <span>New user?</span>
                    </a>
                  </div>
                  <div className="col-sm-6 text-end">
                    <a href="forgot-password">
                      <span>Forgot password?</span>
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <NavLink>
                    <button
                      onClick={handleSubmit}
                      type="button"
                      className="btn login_btn btn-success  mt-20 mb-2"
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

export default Login;
