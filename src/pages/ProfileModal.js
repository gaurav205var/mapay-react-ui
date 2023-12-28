import React from 'react';
import PLogo from '../img/profileIcon.png';
import { useSelector } from 'react-redux';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import '../styles/ProfileModal.css';

const ProfileModal = ({ open, setOpen }) => {
    const { uname, email, phone } = useSelector((state) => state.login.user);
    const handleClose = () => setOpen(false);

    return (
        <MDBModal tabIndex='-1' open={open} setOpen={setOpen}>
            <MDBModalDialog>
                <MDBModalContent className='modal_content'>
                    <MDBModalHeader className='modal-head'>
                        <MDBModalTitle style={{ fontWeight: '550', fontSize: '18px', color: '#010101', fontFamily: 'lato, sans-serif' }}>
                            Profile
                        </MDBModalTitle>
                        <button className='closing-modal' onClick={handleClose}>
                            X
                        </button>
                    </MDBModalHeader>
                    <MDBModalBody className='modal-body text-center p-3'>
                        <div className='mb-3 modal-logo'>
                            <img src={PLogo} alt='Profile Logo' width={100} height={100} />
                        </div>

                        {/* Username Input */}
                        <div className='mb-2 inputbar-container'>
                            <label htmlFor='username' className='form-labeling'>
                                Username
                            </label>
                            <input style={{ opacity: "0.5" }} type="text" className="form-control-2" id="username" value={uname || ''} readOnly />
                            {/* <input type='text' className='form-control-2' id='username' /> */}
                        </div>

                        {/* Email Input */}
                        <div className='mb-3 inputbar-container'>
                            <label htmlFor='email' className='form-labeling'>
                                Email
                            </label>
                            <input style={{ opacity: "0.5" }} type='email' className='form-control-2' id='email' value={email || ''} readOnly />
                        </div>

                        {/* Phone Input */}
                        <div className='mb-4 inputbar-container'>
                            <label htmlFor='phone' className='form-labeling'>
                                Phone
                            </label>
                            <input style={{ opacity: "0.5" }} type='tel' className='form-control-2' id='phone' value={phone || ''} readOnly />
                        </div>
                    </MDBModalBody>

                    <MDBModalFooter className='d-flex justify-content-end profile-footer'>
                        <MDBBtn onClick={handleClose} className='profile-btn' id='cancel-btn'>
                            Cancel
                        </MDBBtn>
                        <MDBBtn className='profile-btn' id='update-btn'>
                            Update
                        </MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
};

export default ProfileModal;
