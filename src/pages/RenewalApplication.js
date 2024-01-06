import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DropDown } from '../store/InitialAppSlice';
import "../styles/RenewalApplication.css";
import "../styles/InitialDropdown.css"
import Layout from '../components/Layout/Layout';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn
} from "mdb-react-ui-kit";
import Sidebar from './Sidebar';


const RenewalApplication = () => {
    const Professions = useSelector((state) => state.initialApplication.data)
    const [isButtonEnabled, setButtonEnabled] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
    const dispatch = useDispatch();
    const str = "Renewal";


    const handleOptionSelect = (selectedValue) => {
        setSelectedItem(selectedValue);
        setButtonEnabled(!!selectedValue); // Enable the button if a value is selected
    };


    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };
    useEffect(() => {
        dispatch(DropDown(str));
    }, []);
    return (
        <>
            <Layout>
                <MDBContainer fluid className='initial-container-2'>
                    <MDBRow>

                        <Sidebar isExpanded={isSidebarExpanded} onToggleSidebar={toggleSidebar} />

                        <MDBCol md={isSidebarExpanded ? "9" : "11"} className='initial-app-section-2'>
                            <div className="initial-heading-2">Renewal Application</div>
                            <div className="initial-row-2 i-group">
                                <label className='initial-label-2'>Health Professional Initial Registration Application</label>
                                <div className="initial-app-content-2">
                                    All items marked with an asterisk (*) are required, but you are requested to provide all
                                    relevant information. Failure to provide all relevant information will prolong the processing of your application. Please allow at least four weeks for the processing of complete applications. All supporting documents must be uploaded as one of the following formats: PDF, JPEG, WORD or EXCEL and all supporting documents should be uploaded using Succinct File Name Descriptions. Please direct any questions regarding your application to hpadmin@gov.bm or (441) 292-6420
                                </div>
                            </div>
                            <div className='second-content-2 d-flex flex-column'>
                                <label className='drop-down-label_1'>
                                    Health Profession Type
                                    <span className="asterisk-2">*</span>
                                </label>
                                <div className="initial-select">
                                    <select
                                        className="selection"
                                        value={selectedItem}
                                        onChange={(event) => handleOptionSelect(event.target.value)}
                                    >
                                        <option hidden defaultChecked className='options-drop'>Select Health Profession Type</option>
                                        {Professions ? (
                                            Professions.map((Profession, index) => (
                                                <option key={`profession-${index}`}>
                                                    {Profession.hpname}
                                                </option>
                                            ))
                                        ) : (
                                            <option disabled>Loading professions...</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div className="renewal">
                                <label className='drop-down-label_2'>
                                    For Internal Office Use Only
                                </label>
                                <div className="col-sm-6 renew-left">
                                    <label>
                                        Professional Registration Number
                                    </label>
                                    <input type="text" className='left-input' />
                                    <p className='para-left'>As indicated on your previous registration certificates.</p>
                                </div>
                                <div className="col-sm-6 renew-right">
                                    <label>
                                        Date of Initial Registration
                                    </label>
                                    <input type="date" className='right-input' />
                                    <p className='para-right'>As per registration certificate. Enter dates in the mm/dd/yyyy format.</p>
                                </div>
                            </div>
                            <div className='initial-btn-container-2'>
                                <MDBBtn className='initial-btn-2' disabled={!isButtonEnabled}>
                                    Next
                                </MDBBtn>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Layout>
        </>
    );
}

export default RenewalApplication;

