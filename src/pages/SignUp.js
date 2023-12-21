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
import { useState,useEffect} from "react";
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
    <div
      className="center-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MDBContainer fluid>
        <MDBRow>
          <MDBCard className="card-container">
            <a href="/">
              <ArrowBackIcon />
            </a>
            <MDBCardBody className="px-4">
              <div className="logo-container text-center mb-4">
                <img src={logo} alt="" width={256.55} height={100} />
              </div>
              <div
                className="text"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <p>Create a new account</p>
              </div>
              <div
                className="seperator mx-auto mb-2 mt-0 w-30"
                style={{ width: "45px", height: "8px", background: "#007BFF" }}
              ></div>
              <MDBRow>
                <MDBCol md="6">
                  <label style={{ fontWeight: "800" }}>First Name</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First Name"
                    size="lg"
                    id="form1"
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <div className="text-danger">{firstNameError}</div>
                </MDBCol>

                <MDBCol md="6">
                  <label style={{ fontWeight: "800" }}>Last Name</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last Name"
                    size="lg"
                    className="input_field"
                    id="form2"
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <div className="text-danger">{lastNameError}</div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <label style={{ fontWeight: "800" }}>Date of Birth</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Date of Birth"
                    size="lg"
                    className="input_field"
                    id="form3"
                    type="date"
                    onChange={(e) => setDob(e.target.value)}
                  />

                  <div className="text-danger">{dobError}</div>
                </MDBCol>

                <MDBCol md="6">
                  <label style={{ fontWeight: "800" }}>Username</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Username"
                    size="lg"
                    className="input_field"
                    id="form4"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className="text-danger">{usernameError}</div>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="6">
                  <label style={{ fontWeight: "800" }}>Password</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    size="lg"
                    className="input_field"
                    id="form4"
                    type="text"
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  <div className="text-danger">{currentPasswordError}</div>
                </MDBCol>

                <MDBCol md="6">
                  <label style={{ fontWeight: "800" }}>Confirm Password</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Confirm Password"
                    size="lg"
                    className="input_field"
                    id="form5"
                    type="text"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <div className="text-danger">{newPasswordError}</div>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="6">
                  <label style={{ fontWeight: "800" }}>Email</label>
                  {/* <img src="" alt="verified" width={20} /> */}
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    size="lg"
                    className="input_field"
                    id="form4"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="text-danger">{emailError}</div>
                </MDBCol>

                <MDBCol md="6">
                  <label style={{ fontWeight: "800" }}>Phone</label>
                  {/* <img src="" alt="verified" width={20} /> */}

                  <div className="d-flex align-items-center">
                    {/* Country Code Dropdown */}
                    <div className="country-code-dropdown mb-4 mx-2">
                      <select className="form-select" style={{ width: "92px" }}>
                        {countryCodeOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            ({option.value})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Phone Number Input */}
                    <MDBInput
                      style={{ width: "132px" }}
                      wrapperClass="mb-4"
                      label="Phone Number"
                      size="lg"
                      className="input_field"
                      id="form5"
                      type="text"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <div className="text-danger">{phoneError}</div>
                  </div>
                  {/* Already a user? text */}
                  <span className="rz-link-text" style={{ marginLeft: "8rem" }}>
                    <a href="/login">Already a user?</a>
                  </span>
                </MDBCol>
              </MDBRow>

              {/* Checkbox for "I accept the Terms and Conditions" */}
              <div className="mb-4 accept1">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  style={{ color: "#999999" }}
                  checked={accepttncs}
                  onChange={() => setAcceptTerms(!accepttncs)}
                />
                <label htmlFor="acceptTerms" className="ms-2 ">
                  <span style={{ color: "#999999" }}> I accept the</span>
                  <span style={{ color: "#1c3dd7" }}>
                    {" "}
                    Terms and Conditions.
                  </span>
                </label>
                <div className="text-danger">{acceptTermsError}</div>

                <div className="text-center">
                  <MDBBtn
                    className="btn-success"
                    size="lg"
                    onClick={submitHandler}
                  >
                    SIGN UP
                  </MDBBtn>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default SignUp;

