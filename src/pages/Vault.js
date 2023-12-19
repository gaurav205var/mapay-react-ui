
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import Layout from '../components/Layout/Layout';
import Sidebar from './Sidebar';
import "../styles/Vault.css";
const Vault = () => {
    return (
        <Layout>
            <MDBContainer fluid className="mcontain">
                <MDBRow className="h-100">
                    <MDBCol md="3" className="sidebar_col h-100">
                        <Sidebar />
                    </MDBCol>
                    <MDBCol md="9" className="vault_col h-100" style={{ marginLeft: "-100px" }}>
                    <h2 className="mt-4 mb-2 p-2">Yash's Vault</h2>
                        <MDBRow className="inside_row">
                            <MDBCol md="4" className="d-down-contain" style={{display:"flex",flexDirection:"column"}}>
                            <div className="updoc"> Upload Document</div>
                                <MDBDropdown className="d-down">
                                    <MDBDropdownToggle className="btn d-btn">
                                        Select Document Type
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu style={{ width: "100%", textAlign: "center" }}>
                                        <MDBDropdownItem>Action</MDBDropdownItem>
                                        <MDBDropdownItem>Another action</MDBDropdownItem>
                                        <MDBDropdownItem>Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBCol>
                            <MDBCol md="4" className="upload_contain mt-5">
                                <div className="file_input img_upload">
                                    <div className="input-group">
                                        <MDBInput
                                            type="file"
                                            className="form-control custom-file-input input1"
                                            id="customFile"
                                            placeholder="From Devices"
                                            readOnly
                                            style={{
                                                width: "calc(100% - 0px)",
                                                height: "40px",
                                                borderRadius: "5px",
                                                border: "none",
                                                fontSize: "13.4px",
                                                boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                                                textAlign: "left",
                                                paddingLeft: "10px",
                                                borderTopRightRadius: "5px",
                                                borderBottomRightRadius: "5px",
                                                borderTopLeftRadius: "0",
                                                borderBottomLeftRadius: "0",
                                            }}
                                        />
                                        <label
                                            className="custom-file-label btn-choose"
                                            htmlFor="customFile"
                                            style={{
                                                width: "100px",
                                                height: "40px",
                                                color: "#ffffff",
                                                backgroundColor: "#60579b",
                                                display: "flex",
                                                fontSize: "14px",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "5px",
                                                cursor: "pointer",
                                                position: "absolute",
                                                zIndex: 1,
                                            }}
                                        >
                                            Choose
                                        </label>
                                    </div>
                                </div>

                                <div className='upload_text'>
                                    <h6>(Only PNG, PDF, JPG, JPEG, DOC, tiff file are allowed.)</h6>
                                </div>
                            </MDBCol>
                            <MDBCol md="4" id='btn_container'>
                                <MDBBtn color="success" className="upload_btn">
                                    UPLOAD
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    );
}

export default Vault;
