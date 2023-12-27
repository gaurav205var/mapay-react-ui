import React, { useState } from 'react';
import "../styles/ProfileModal.css"
import PLogo from "../img/profileIcon.png"
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter
} from 'mdb-react-ui-kit';
import "../styles/ProfileModal.css"

const ProfileModal = () => {
    const [popoverModal, setPopoverModal] = useState(false);

    const toggleOpen = () => setPopoverModal(!popoverModal);

    return (
        <>
            <MDBBtn onClick={toggleOpen}>Launch Demo Modal</MDBBtn>

            <MDBModal tabIndex='-1' open={popoverModal} setOpen={setPopoverModal}>
                <MDBModalDialog>
                    <MDBModalContent className='modal_content'>
                        <MDBModalHeader className='modal-head'>
                            <MDBModalTitle style={{ fontWeight: '550', fontSize: '18px', color: '#010101', fontFamily: "lato,sans-serif" }}>
                                Profile
                            </MDBModalTitle>
                            <button className='closing-modal' onClick={toggleOpen}>X</button>
                        </MDBModalHeader>
                        <MDBModalBody className='modal-body text-center p-3'>
                            <div className="mb-3 modal-logo">
                                <img src={PLogo} alt="Profile Logo" width={100} height={100} />
                            </div>



                            {/* Username Input */}
                            <div className="mb-2 inputbar-container">
                                <label htmlFor="username" className="form-labeling">Username</label>
                                <input type="text" className="form-control-2" id="username" />
                            </div>

                            {/* Email Input */}
                            <div className="mb-3 inputbar-container">
                                <label htmlFor="email" className="form-labeling">Email</label>
                                <input type="email" className="form-control-2" id="email" />
                            </div>

                            {/* Phone Input */}
                            <div className="mb-4 inputbar-container">
                                <label htmlFor="phone" className="form-labeling">Phone</label>
                                <input type="tel" className="form-control-2" id="phone" />
                            </div>
                        </MDBModalBody>

                        <MDBModalFooter className="d-flex justify-content-end profile-footer">
                            <MDBBtn onClick={toggleOpen} className='profile-btn' id='cancel-btn' >
                                Cancel
                            </MDBBtn>
                            <MDBBtn className='profile-btn' id='update-btn'>Update</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default ProfileModal;




