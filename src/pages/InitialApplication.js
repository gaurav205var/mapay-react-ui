import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import "../styles/InitialApplication.css";
import Layout from '../components/Layout/Layout';
import "../styles/InitialDropdown.css";
import { useDispatch, useSelector } from 'react-redux';
import { DropDown } from '../store/InitialAppSlice';
import { GetDoc } from '../store/InitialAppSlice';
import { CheckHp } from '../store/CheckHpSlice';
import { Registration } from "../store/CheckHpSlice";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
} from "mdb-react-ui-kit";
import Sidebar from './Sidebar';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const InitialApplication = () => {

    const { uid, fname, lname } = useSelector((state) => state.login.user)
    const Professions = useSelector((state) => state.initialApplication.data)
    const RegistrationType = useSelector((state) => state.initialApplication.registraion)
    const Doclist = useSelector((state) => state.initialApplication.docList)
    const [HealthType, setSelectedItem] = useState('');
    const [regType, setSelectedItem2] = useState('');
    const [showAdditionalContent, setShowAdditionalContent] = useState(false);
    const [showDateInputs, setShowDateInputs] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [hpTypeId, setHptypeid] = useState(null);
    const [rid, setrId] = useState(null);
    const [initialButtonState, setButtonState] = useState(true);
    const str = "Initial";


    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        if (!startDate || date >= startDate) {
            setEndDate(date);
        }
    };

    const handleSelectedChange = (event) => {
        const selectedProfession = Professions.find(profession => profession.hpname === event.target.value);

        if (selectedProfession) {
            setSelectedItem(event.target.value);
            setShowAdditionalContent(true);
            setHptypeid(selectedProfession.hptypeid);
            setButtonState(false);
            dispatch(GetDoc(selectedProfession.hptypeid));
        }
    };



    const handleSelectedChange2 = (event) => {
        const selectedRegisterType = RegistrationType.find(RegType => RegType.rName === event.target.value);
        if (selectedRegisterType) {
            const selectedValue = event.target.value;
            setSelectedItem2(selectedValue);
            setrId(selectedRegisterType.rId);
            setShowDateInputs(selectedValue === 'Locum Tenens' || selectedValue === 'Visiting Practitioner');

            // Conditionally set startDate and endDate based on rid
            if (selectedRegisterType.rId === 1) {
                setStartDate(null);
                setEndDate(null);
            }
        }


    };

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    const UserInput = {
        uid,
        hpTypeId,
        rid,
        startDate: startDate,
        endDate: endDate,
        lastSectionID: 1,
        regType,
        rev_comments: [],
        uAppId: null,
        lastsec: null,
        fname,
        lname,
    };
    console.log("user data", UserInput);


    const payload = {
        uid,
        hpTypeId
    };

    const res = useSelector((state) => state.checkhp.res);
    const Status = useSelector((state) => state.checkhp.statusCode);

    const NextHandler = async (event) => {
        event.preventDefault();
        await dispatch(CheckHp(payload));


        switch (res) {
            case 1:
                toast.error("You already have one similar health professions application in your draft, which will be auto-deleted after 90 days. Please use the draft.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    // style: {
                    //     background: '#f05455',
                    //     color: 'white',
                    // },
                });
                break;
            case 2:
                toast.error("You have already submitted the same application for review. Please wait until that is reviewed.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    style: {
                        background: '#f05455',
                        color: 'white',
                    },
                });
                break;
            case 3:
                toast.error("You already have an approved non expired application. You can't fill another until the previous one is expired.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    style: {
                        background: '#f05455',
                        color: 'white',
                    },
                });
                break;
            case 4:
                await dispatch(Registration(UserInput));
                if (Status === 200) {
                    navigate("/initial-application-registration");
                } else {
                    toast.error("Error: Server returned a status of " + Status, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                }

                break;
            default:
                break;
        }

    }

    useEffect(() => {
        dispatch(DropDown(str));
    }, []);


    return (
        <>
            <Layout>
                <MDBContainer fluid className='initial-container'>
                    <MDBRow>
                        <Sidebar isExpanded={isSidebarExpanded} onToggleSidebar={toggleSidebar} />
                        <MDBCol md={isSidebarExpanded ? "9" : "11"} className='initial-app-sections'>
                            <div className="initial-headings">Initial Application</div>
                            <div className="initial-row i-group">
                                <label className='initial-label-1'>Health Professional Initial Registration Application</label>
                                <div className="initial-app-content">
                                    All items marked with an asterisk (*) are required, but you are requested to provide all
                                    relevant information. Failure to provide all relevant information will prolong the processing of your application. Please allow at least four weeks for the processing of complete applications. All supporting documents must be uploaded as one of the following formats: PDF, JPEG, WORD or EXCEL and all supporting documents should be uploaded using Succinct File Name Descriptions. Please direct any questions regarding your application to hpadmin@gov.bm or (441) 292-6420
                                </div>
                            </div>
                            <div className='second-content d-flex flex-column'>
                                <label className='drop-down-label-1'>
                                    Health Profession Type
                                    <span className="asterisk">*</span>
                                </label>
                                <div className="initial-select">
                                    <select
                                        className="selection"
                                        value={HealthType}
                                        onChange={handleSelectedChange}
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
                                {showAdditionalContent && Doclist.length > 0 && (
                                    <div className="initial-select-2">
                                        <label className='conditional-label initial-label-1 '>Required Documents</label>
                                        <ul className='initial-list'>
                                            {Doclist.map((item, index) => (
                                                <li key={index}>{item.doc_name}</li>
                                            ))}

                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="second-content second-container">
                                <label className='drop-down-label-2 type-reg'>
                                    Type of Registration
                                    <span className="asterisk">*</span>
                                </label>
                                <div className="initial-select">
                                    <select
                                        className="selection"
                                        value={regType}
                                        onChange={handleSelectedChange2}
                                        disabled={!HealthType}
                                    >
                                        <option hidden defaultChecked className='options-drop'>Select Type of Registration</option>
                                        {RegistrationType ? (RegistrationType.map((item, index) => (
                                            <option key={index} className='options-drop'>{item.rName}</option>
                                        ))
                                        ) : (
                                            <option disabled>Loading Registrations...</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                            <p className='initial-para'>
                                Locum Tenens and Visiting Practitioner registration are for individuals applying for a short-term work
                                permit. Periodic work <br />permit holders should apply for full registration.
                            </p>
                            <MDBCol className='two-div'>
                                {showDateInputs && (
                                    <>
                                        <div className='col-sm-6 div-one'>
                                            <label className='start-label'>
                                                Start Date:
                                                <span className="asterisk">*</span>
                                            </label>

                                            <input
                                                type="date"
                                                value={startDate ? moment(startDate).format('YYYY-MM-DD') : ''}
                                                onChange={(e) => handleStartDateChange(moment(e.target.value, 'YYYY-MM-DD').toDate())}
                                                max={moment().format('YYYY-MM-DD')}
                                                className="inputing"
                                            />
                                            <p className='initial-para'>The maximum start date you can select is today.</p>
                                        </div>
                                        <div className='col-sm-6 div-two'>
                                            <label className='start-label'>
                                                End Date:
                                                <span className="asterisk">*</span>
                                            </label>

                                            <input
                                                type="date"
                                                value={endDate ? moment(endDate).format('YYYY-MM-DD') : ''}
                                                onChange={(e) => handleEndDateChange(moment(e.target.value, 'YYYY-MM-DD').toDate())}
                                                min={startDate ? moment(startDate).format('YYYY-MM-DD') : moment().format('YYYY-MM-DD')}
                                                className="inputing"
                                            />

                                            <p className='initial-para'>The minimum end date you can select is today.</p>
                                        </div>
                                    </>
                                )}
                            </MDBCol>
                            <div className='initial-btns-container'>
                                <MDBBtn onClick={NextHandler} className='initial-button' disabled={initialButtonState}>
                                    Next
                                </MDBBtn>
                            </div>
                            <ToastContainer />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Layout>
        </>
    );
}

export default InitialApplication;
