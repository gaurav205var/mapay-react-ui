import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import "../styles/SignUp.css";
import logo from "../img/bhc-logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignUpUser } from "../store/SignUpSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function SignUp() {
  const uid = useSelector((state) => state.signup.data);
  console.log("id in signup", uid)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDob] = useState("");
  const [username, setUsername] = useState("");
  const [password, setCurrentPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [cpassword, setNewPassword] = useState("");
  const [accepttncs, setAcceptTerms] = useState(false);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [dobError, setDobError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [currentPasswordError, setCurrentPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [acceptTermsError, setAcceptTermsError] = useState("");
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [uType, setType] = useState(1);
  const [isDcode, setISDCode] = useState("+91");

  const SignUpData = {
    firstName,
    lastName,
    dateOfBirth,
    username,
    email,
    phoneNumber,
    uType,
    isDcode,
    phoneVerified,
    emailVerified,
    password,
    cpassword,
    accepttncs,
  };

  const validateForm = () => {
    let isValid = true;

    // Validate First Name
    if (!firstName) {
      setFirstNameError("First Name is required");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    // Validate Last Name
    if (!lastName) {
      setLastNameError("Last Name is required");
      isValid = false;
    } else {
      setLastNameError("");
    }

    // Validate Date of Birth
    if (!dateOfBirth) {
      setDobError("Date of Birth is required");
      isValid = false;
    } else {
      setDobError("");
    }

    // Validate Username
    if (!username) {
      setUsernameError("Username is required");
      isValid = false;
    } else {
      setUsernameError("");
    }

    // Validate Email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate Phone
    if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
      setPhoneError("Enter a valid 10-digit phone number");
      isValid = false;
    } else {
      setPhoneError("");
    }

    // Validate Password
    if (!password) {
      setCurrentPasswordError("Password is required");
      isValid = false;
    } else {
      setCurrentPasswordError("");
    }

    // Validate Confirm Password
    if (!cpassword) {
      setNewPasswordError("Confirm Password is required");
      isValid = false;
    } else {
      setNewPasswordError("");
    }
    // Validate Accept Terms
    if (!accepttncs) {
      setAcceptTermsError("Please accept the Terms and Conditions");
      isValid = false;
    } else {
      setAcceptTermsError("");
    }

    return isValid;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (validateForm()) {
      dispatch(SignUpUser(SignUpData));
    }
  };
  useEffect(() => {
    if (uid) {
      navigate(`/email-verification/${uid}`);
    }
  }, [uid, navigate]);

  const countryCodeOptions = [
    { value: "+91", label: "Ind" },
    { value: "+1", label: "USA", flag: "path/to/usa-flag-icon" },
    { value: "+44", label: "UK", flag: "path/to/uk-flag-icon" },
  ];

  return (
    <>
      <MDBContainer fluid className='Signup-container'>
        <MDBRow>
          <MDBCard className="card-container">
            <MDBCardBody className="px-4 signup-body">
              <div className='d-flex mt-2 logo'><a href="/">
                <ArrowBackIcon />
              </a>
                <img src={logo} alt="" width={256.55} height={100} />
              </div>

              <div
                className="text"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <p className="signup-heading">Create a new account</p>
              </div>
              <div
                className="seperator mx-auto mb-2 mt-0 w-30"
                style={{ width: "45px", height: "8px", background: "#007BFF" }}
              ></div>
              <div className="my-inputs">
                <MDBRow>
                  <MDBCol md="6">
                    <div className="input-wrapper">
                      <label htmlFor="firstName2">First Name</label>
                      <input type="text" id="firstName2"
                        onChange={(e) => setFirstName(e.target.value)} />
                      <div className="text-danger">{firstNameError}</div>
                    </div>

                  </MDBCol>

                  <MDBCol md="6">
                    <div className="input-wrapper">
                      <label htmlFor="lastName2">Last Name</label>
                      <input type="text" id="lastName2" onChange={(e) => setLastName(e.target.value)} />
                      <div className="text-danger">{lastNameError}</div>
                    </div>

                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6">
                    <div className="input-wrapper">
                      <label htmlFor="dob">Date of Birth</label>
                      <input type="text" id="dob" onChange={(e) => setDob(e.target.value)} />
                      <div className="text-danger">{dobError}</div>
                    </div>

                  </MDBCol>

                  <MDBCol md="6">
                    <div className="input-wrapper">
                      <label htmlFor="username">Username</label>
                      <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} />
                      <div className="text-danger">{usernameError}</div>
                    </div>

                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6">
                    <div className="input-wrapper">
                      <label htmlFor="password">Password</label>
                      <input type="text" id="password" onChange={(e) => setCurrentPassword(e.target.value)} />
                      <div className="text-danger">{currentPasswordError}</div>
                    </div>

                  </MDBCol>

                  <MDBCol md="6">
                    <div className="input-wrapper">
                      <label>Confirm Password</label>
                      <input type="text" id="cpassword" onChange={(e) => setNewPassword(e.target.value)} />
                      <div className="text-danger">{newPasswordError}</div>
                    </div>

                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6">
                    <div className="input-wrapper">
                      <label htmlFor="email">Email</label>
                      <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
                      <div className="text-danger">{emailError}</div>
                    </div>

                  </MDBCol>

                  <MDBCol md="6">
                    <div className="input-wrapper">
                      <label htmlFor="phoneno">Phone Number</label>
                      <input type="text" id="phoneno" onChange={(e) => setPhone(e.target.value)} />
                      <div className="text-danger">{phoneError}</div>
                    </div>
                  </MDBCol>
                </MDBRow>
                <div className="text-end already-user">
                  {/* Already a user? text */}
                  <span className="mt-2">
                    <a href="/login">Already a user?</a>
                  </span>
                </div>
              </div>
              <div className="check-box">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  style={{ color: "#999999" }}
                  checked={accepttncs}
                  onChange={() => setAcceptTerms(!accepttncs)}
                />
                <label htmlFor="acceptTerms" className="ms-2" style={{ fontStyle: "italic" }}>
                  <span style={{ color: "#999999" }}> I accept the</span>
                  <span style={{ color: "#1c3dd7" }}>
                    {" "}
                    Terms and Conditions.
                  </span>
                </label>
                <div className="text-danger">{acceptTermsError}</div>
              </div>
              {/* Checkbox for "I accept the Terms and Conditions" */}



              <div className="text-center">
                <MDBBtn
                  className="btn-success"
                  size="lg"
                  onClick={submitHandler}
                >
                  SIGN UP
                </MDBBtn>
              </div>

              <p className="text-center my-2 mt-3">Powered by MAPay</p>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default SignUp;


