import React, { useEffect, useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBContainer
} from 'mdb-react-ui-kit';
import "../styles/EmailVerify.css"
import verifyLogo from "../img/Everifylogo.png"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { EmailVerification, GetUserandOtp } from "../store/EmailVerifySlice";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

export default function EmailVerify() {

    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    // Extract the 'id' from the pathname
    const id = pathname.split('/').pop();
    // Now 'id' contains the value from the URL
    console.log('ID from URL:', id);
    const { verifyemail } = useSelector((state) => state.emailVerify.data)
    const { uname, uid, email } = useSelector((state) => state.emailVerify.UserData);
    const DbOtp = useSelector((state) => state.emailVerify.otp);
    console.log("otp from db", DbOtp);
    const dispatch = useDispatch();
    const [pin1, setPin1] = useState("");
    const [pin2, setPin2] = useState("");
    const [pin3, setPin3] = useState("");
    const [pin4, setPin4] = useState("");

    const input = {
        uname,
        uid,
        pin1,
        pin2,
        pin3,
        pin4,
        email
    }

    // Concatenate the user input pins
    const verificationCode = `${pin1}${pin2}${pin3}${pin4}`;

    // Convert the concatenated string to an integer
    const userEnteredOtp = parseInt(verificationCode, 10);
    console.log("userenteredotp", userEnteredOtp)



    const VerifyHandler = () => {
        if (userEnteredOtp === DbOtp) {
            console.log("Verification successful");
            dispatch(EmailVerification(input));
        }
    }
    useEffect(() => {
        if (verifyemail) {
            navigate("/verification-successful");
        }
    }, [verifyemail, navigate]);


    useEffect(() => {
        dispatch(GetUserandOtp(id));
    }, [])

    const handleInput = (e, nextInput) => {
        const maxLength = 1;

        if (e.target.value.length === maxLength && nextInput) {
            nextInput.focus();
        }
    };

    return (
        <>
            <MDBContainer fluid className='container1' >
                <MDBCard className='card-main'>

                    <MDBCardBody className='email-body '>
                        <div className='d-flex mt-2'><a href="/">
                            <ArrowBackIcon />
                        </a>
                            <img id='img1' src={verifyLogo} alt="Elogo" /></div>
                        <p className='p1'>Create a new account</p>
                        <div className="e-seperator"></div>
                        <p className='p2'>We have sent a verification code to your email address. Enter the code to verify <span>the email.</span></p>
                        <p className='p3'>Verification Code:</p>
                        <div className='code-container'>
                            <input type="text" className='c-input' id='1'
                                onChange={(e) => { setPin1(e.target.value); handleInput(e, document.getElementById('2')); }} />
                            <input type="text" className='c-input' id='2'
                                onChange={(e) => { setPin2(e.target.value); handleInput(e, document.getElementById('3')); }}
                            />
                            <input type="text" className='c-input' id='3'
                                onChange={(e) => { setPin3(e.target.value); handleInput(e, document.getElementById('4')); }} />

                            <input type="text" className='c-input' id='4'
                                onChange={(e) => setPin4(e.target.value)} />
                        </div>
                        <div className='verify-btn-container'>
                            <MDBBtn className='verify-btn' onClick={VerifyHandler}>Verify</MDBBtn>
                        </div>
                        <div className="refresh col-sm-12 mt-40 mb-70 text-center">
                            <a href="#!"><MDBIcon fas icon="redo" /><span>Send a new code</span></a>
                        </div>

                        <div className="end-text my-2 mt-2">Powered by MAPay</div>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </>
    );
}
