import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBContainer
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import "../styles/SuccessfulVerify.css"
import verifyLogo from "../img/Everifylogo.png"
import ticklogo from "../img/icon-check.png"
const EmailSuccessful = () => {

  const navigate = useNavigate();

  const handler = (e) => {
    e.preventDefault();
    navigate("/login")
  }

  return (
    <>
      <MDBContainer fluid className='container3' >
        <MDBCard className='card-main-3'>

          <MDBCardBody className='card-body-3'>
            <div className='d-flex mt-2 '>

              <img id='img-1' src={verifyLogo} alt="Elogo" />
            </div>
            <div className="success-container">
              <img src={ticklogo} alt="successLogo" />
              <div className="success-text">
                <div>Success!</div>
                <div>
                  Thank you for verifying your email.
                </div>
              </div>
            </div>
            <div className='mt-1'>
              <p className='mb-1 para1'>Your email ID is verified by us. You can now continue to use MAPay.</p>
              <p className='mb-1 para1'>Click the below button to continue</p>
            </div>

            <div className='login-now-btn col-sm-12 text-center'>
              <MDBBtn className='login-now' onClick={handler}>Login Now</MDBBtn>
            </div>

            <div className="last-text my-2 mt-4">Powered by MAPay</div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default EmailSuccessful