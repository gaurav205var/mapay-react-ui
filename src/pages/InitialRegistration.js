import { React, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import "../styles/InitialRegistration.css";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBTable, MDBTableBody, MDBBtn
} from "mdb-react-ui-kit";
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
    MDBCollapse,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
} from "mdbreact";
import { useSelector } from 'react-redux';


const InitialApplication = () => {
    const Doclist = useSelector((state) => state.initialApplication.docList)
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };
    const [collapseIDs, setCollapseIDs] = useState({});



    const toggleAccordion = (accordionID) => () => {
        setCollapseIDs((prevCollapseIDs) => ({
            ...prevCollapseIDs,
            [accordionID]: !prevCollapseIDs[accordionID],
        }));
    };


    const getArrowIcon = (accordionID) => {
        return collapseIDs[accordionID] ? faChevronDown : faChevronRight;
    };



    return (
        <>
            <Layout>
                <MDBContainer fluid>
                    <MDBRow>

                        <Sidebar isExpanded={isSidebarExpanded} onToggleSidebar={toggleSidebar} />


                        <MDBCol md={isSidebarExpanded ? "10" : "11"} className='right-container'>
                            <MDBRow>
                                <MDBCol md="8" className='main-body-content'>
                                    <MDBRow>
                                        <MDBCol md="4" sm="3">
                                            <div className="register-heading">Initial Application</div>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBContainer fluid >
                                        <div className='top-inner-heading'>Health Profession Type</div>
                                        <MDBCard className='Profession-card'>

                                            <MDBCardHeader className="Profession"
                                            >
                                                <span style={{ cursor: "pointer" }}>Optician</span>

                                            </MDBCardHeader>
                                        </MDBCard>
                                        <MDBCard className='accordian-card'>
                                            <MDBCardHeader
                                                onClick={toggleAccordion("accordion1")}
                                                className="accordianss"
                                            >
                                                <FontAwesomeIcon icon={getArrowIcon()} />
                                                <span style={{ cursor: "pointer" }}>Types Of Registration</span>
                                                {/* <img src={SuccesIcon} alt='' width={40} height={40}/> */}


                                            </MDBCardHeader>
                                            <MDBCollapse
                                                id="accordion1"
                                                isOpen={collapseIDs["accordion1"]}>
                                                <MDBCardBody className='accordian-body'>
                                                    <div>
                                                        <select disabled className="selection">
                                                            <option defaultChecked>Full Registration</option>
                                                        </select>
                                                    </div>
                                                    <p className='info-text'>Locum Tenens and Visiting Practitioner registration are for individuals applying for a short-term work <br /> permit. Periodic work permit holders should apply for full registration.</p>
                                                    <div className='text-end'>

                                                        <MDBBtn className='btn-success continue-btn'>SAVE AND CONTINUE</MDBBtn>


                                                    </div>
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                        <MDBCard className='accordian-card'>
                                            <MDBCardHeader
                                                onClick={toggleAccordion("accordion2")}
                                                // className="d-flex justify-content-space-around align-items-center"
                                                className='accordianss'
                                            >
                                                <FontAwesomeIcon icon={getArrowIcon()} />
                                                <span style={{ cursor: "pointer" }}>General Information</span>

                                            </MDBCardHeader>
                                            <MDBCollapse
                                                id="accordion2"
                                                isOpen={collapseIDs["accordion2"]}>
                                                <MDBCardBody className='accordian-body'>
                                                    Text related to certificates goes here.
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                        <MDBCard className='accordian-card'>
                                            <MDBCardHeader
                                                onClick={toggleAccordion("accordion3")}
                                                className="accordianss"
                                            >
                                                <FontAwesomeIcon icon={getArrowIcon()} />
                                                <span style={{ cursor: "pointer" }}>Immigration Status</span>

                                            </MDBCardHeader>
                                            <MDBCollapse
                                                id="accordion3"
                                                isOpen={collapseIDs["accordion3"]}>
                                                <MDBCardBody className='accordian-body'>
                                                    <p className='Immigration-status'>What is Your Current Immigration Status?</p>
                                                    <div className="initial-select">
                                                        <select className="selection">
                                                            <option defaultChecked className='options-drop'>Select Immigration Status</option>
                                                        </select>
                                                    </div>
                                                    <p className='info-text'>For guest workers, a Job Offer Letter is required as proof of employment eligibility. In addition, a Department of <br /> Immigration Section 9 Application Form must be completed and submitted to us by your Employer.

                                                    </p>
                                                    <div className='text-end'>

                                                        <MDBBtn className='btn-success continue-btn'>SAVE AND CONTINUE</MDBBtn>


                                                    </div>
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                        <MDBCard className='accordian-card'>
                                            <MDBCardHeader
                                                onClick={toggleAccordion("accordion4")}
                                                className="accordianss"
                                            >
                                                <FontAwesomeIcon icon={getArrowIcon()} />
                                                <span style={{ cursor: "pointer" }}>Employement History</span>

                                            </MDBCardHeader>
                                            <MDBCollapse
                                                id="accordion4"
                                                isOpen={collapseIDs["accordion4"]}>
                                                <MDBCardBody className='accordian-body'>
                                                    Text related to certificates goes here.
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                        <MDBCard className='accordian-card'>
                                            <MDBCardHeader
                                                onClick={toggleAccordion("accordion5")}
                                                className="accordianss"
                                            >
                                                <FontAwesomeIcon icon={getArrowIcon()} />
                                                <span style={{ cursor: "pointer" }}>Curriculum Vitae or Resume</span>

                                            </MDBCardHeader>
                                            <MDBCollapse
                                                id="accordion5"
                                                isOpen={collapseIDs["accordion5"]}>
                                                <MDBCardBody className='accordian-body'>
                                                    Text related to certificates goes here.
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                        <MDBCard className='accordian-card'>
                                            <MDBCardHeader
                                                onClick={toggleAccordion("accordion6")}
                                                className="accordianss"
                                            >
                                                <FontAwesomeIcon icon={getArrowIcon()} />
                                                <span style={{ cursor: "pointer" }}>References</span>

                                            </MDBCardHeader>
                                            <MDBCollapse
                                                id="accordion6"
                                                isOpen={collapseIDs["accordion6"]}>
                                                <MDBCardBody className='accordian-body'>
                                                    Text related to certificates goes here.
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                        <MDBCard className='accordian-card'>
                                            <MDBCardHeader
                                                onClick={toggleAccordion("accordion7")}
                                                className="accordianss"
                                            >
                                                <FontAwesomeIcon icon={getArrowIcon()} />
                                                <span style={{ cursor: "pointer" }}>Education</span>

                                            </MDBCardHeader>
                                            <MDBCollapse
                                                id="accordion7"
                                                isOpen={collapseIDs["accordion7"]}>
                                                <MDBCardBody className='accordian-body'>
                                                    Text related to certificates goes here.
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                        <MDBCard className='accordian-card'>
                                            <MDBCardHeader
                                                onClick={toggleAccordion("accordion8")}
                                                className="accordianss"
                                            >
                                                <FontAwesomeIcon icon={getArrowIcon()} />
                                                <span style={{ cursor: "pointer" }}>Speciality Areas</span>

                                            </MDBCardHeader>
                                            <MDBCollapse
                                                id="accordion8"
                                                isOpen={collapseIDs["accordion8"]}>
                                                <MDBCardBody className='accordian-body'>
                                                    Text related to certificates goes here.
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                        <MDBCard className='accordian-card'>
                                            <MDBCardHeader
                                                onClick={toggleAccordion("accordion9")}
                                                className="accordianss"
                                            >
                                                <FontAwesomeIcon icon={getArrowIcon()} />
                                                <span style={{ cursor: "pointer" }}>Professional Licensure and Registration</span>

                                            </MDBCardHeader>
                                            <MDBCollapse
                                                id="accordion9"
                                                isOpen={collapseIDs["accordion9"]}>
                                                <MDBCardBody className='accordian-body'>
                                                    Text related to certificates goes here.
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                        <MDBCard className='accordian-card'>
                                            <MDBCardHeader
                                                onClick={toggleAccordion("accordion10")}
                                                className="accordianss"
                                            >
                                                <FontAwesomeIcon icon={getArrowIcon()} />
                                                <span style={{ cursor: "pointer" }}>Attestation Questions</span>

                                            </MDBCardHeader>
                                            <MDBCollapse
                                                id="accordion10"
                                                isOpen={collapseIDs["accordion10"]}>
                                                <MDBCardBody className='accordian-body'>
                                                    Text related to certificates goes here.
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                        <MDBCard className='accordian-card'>
                                            <MDBCardHeader
                                                onClick={toggleAccordion("accordion11")}
                                                className="accordianss"
                                            >
                                                <FontAwesomeIcon icon={getArrowIcon()} />
                                                <span style={{ cursor: "pointer" }}>Consent to Release Information for Credential Verification</span>

                                            </MDBCardHeader>
                                            <MDBCollapse
                                                id="accordion11"
                                                isOpen={collapseIDs["accordion11"]}>
                                                <MDBCardBody className='accordian-body'>
                                                    Text related to certificates goes here.
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                        <MDBCard className='accordian-card'>
                                            <MDBCardHeader
                                                onClick={toggleAccordion("accordion12")}
                                                className="accordianss"
                                            >
                                                <FontAwesomeIcon icon={getArrowIcon()} />
                                                <span style={{ cursor: "pointer" }}>Upload All Documents</span>

                                            </MDBCardHeader>
                                            <MDBCollapse
                                                id="accordion12"
                                                isOpen={collapseIDs["accordion12"]}>
                                                <MDBCardBody className='accordian-body'>
                                                    Text related to certificates goes here.
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                        <MDBCard className='accordian-card'>
                                            <MDBCardHeader
                                                onClick={toggleAccordion("accordion13")}
                                                className="accordianss"
                                            >
                                                <FontAwesomeIcon icon={getArrowIcon()} />
                                                <span style={{ cursor: "pointer" }}>Application Attestation</span>

                                            </MDBCardHeader>
                                            <MDBCollapse
                                                id="accordion13"
                                                isOpen={collapseIDs["accordion13"]}>
                                                <MDBCardBody className='accordian-body'>
                                                    <form>
                                                        <p className='info-text'>Please sign below, indicating your understanding and agreement with the following :</p>
                                                        <div className='application-att'>
                                                            <label className='light-label'>I confirm that I have read the Registration Guidelines, Standards of Practice and Code of Conduct?</label>
                                                        </div>
                                                        
                                                    </form>
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>

                                        <div className='text-end mb-3'>
                                            <NavLink to="/dashboard" type='button' className="success">
                                                <MDBBtn className='btn-success draft-btn'> SAVE AS DRAFT</MDBBtn> </NavLink>
                                            <MDBBtn className='btn-primary sub-btn'>SUBMIT AND SAVE</MDBBtn>


                                        </div>

                                    </MDBContainer>
                                </MDBCol>

                                <MDBCol md="4" className='right-table'>
                                    <MDBRow>
                                        <MDBCol md="8" sm="12">
                                            <div className='Tab-Heading'>Required Documents</div>
                                        </MDBCol>

                                    </MDBRow>
                                    <MDBTable className='Doc-table'>
                                        <thead>
                                            <tr>
                                                <th>Document Name</th>
                                                <th>Count</th>
                                            </tr>
                                        </thead>
                                        <MDBTableBody>
                                            {Doclist.length > 0 ? (Doclist.map((row, index) => (
                                                <tr key={index}>
                                                    <td>{row.doc_name}</td>
                                                    <td>{row.doccount}</td>
                                                </tr>
                                            ))) : (<tr>Loading.....</tr>)}

                                        </MDBTableBody>
                                    </MDBTable>
                                </MDBCol>

                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Layout>
        </>
    )
}

export default InitialApplication;

