import React, { Component } from 'react';
import './Summary.css';
import useFormValidation from './useFormValidation';
import formValidation from './formUpdationValidation';

const UpdatePage = () => {

    const { errors, handleFormSubmit, claim, handleClaimChange, successMsg } = useFormValidation(formValidation);

    return (
        <div>
            <div class="update-card">
                <h2 class="mainheader-style">Update Claim Information</h2>
                <form>
                    <div id="personal-pannel-edit" class="show-pannel">

                        <div class="updatecard-div-left">
                            <table>
                                <tr>
                                    <td>
                                        <label for="EmployeeId">Employee Id</label>
                                    </td>
                                    <td>
                                        <input type="text" id="empId" value={claim.empId} disabled></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="EmployeeName">Employee Name</label>
                                    </td>
                                    <td>
                                        <input type="text" id="empName" value={claim.empName} disabled></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="ClaimNumber">Claim Number</label>
                                    </td>
                                    <td>
                                        <input type="text" id="claimNumber" contentEditable="true" value={claim.claimNumber} onChange={handleClaimChange} placeholder="xxx-xxx-xxx"></input>
                                        <span className="text-danger">{errors.claimNumberValidateMsg}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="ClaimType">Claim Type</label>
                                    </td>
                                    <td>
                                        <select name="claimType">
                                            <option value={claim.claimType} onChange={handleClaimChange}>{claim.claimType}</option>
                                            {/* <option value="“Pending”">Pending</option>
                                    <option value="”Received”">Received</option>
                                    <option value="More Info Required">More Info Required</option>
                                    <option value="“Pending”">Denied</option>
                                    <option value="”Received”">Rejected</option>
                                    <option value="More Info Required">Paid</option> */}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="ClaimPrograms">Claim Program</label>
                                    </td>
                                    <td>
                                        <input type="text" value={claim.claimPrograms} id="claimPrograms" onChange={handleClaimChange} placeholder="Maximum of 20 digits" required></input>
                                        <span className="text-danger">{errors.claimProgramsValidateMsg}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="StartDate">Start Date</label>
                                    </td>
                                    <td>
                                        <input type="date" value={claim.startDate} id="startDate" onChange={handleClaimChange} name="StartDate"></input>
                                        <span className="text-danger">{errors.startDateValidateMsg}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="End Date">End Date</label>
                                    </td>
                                    <td>
                                        <input type="date" value={claim.endDate} id="endDate" onChange={handleClaimChange} name="EndDate"></input>
                                        <span className="text-danger">{errors.endDateValidateMsg}</span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="div-height"></div>
                        {/* <div><button type="button" class="cancel-button">Cancel</button> */}
                        <button type="button" class="update-button" onClick={handleFormSubmit}>UPDATE</button>
                        <div class="div-height"></div>
                        <span class="success">{successMsg}</span>
                        {/* </div> */}
                    </div>
                </form>
            </div>
        </div>
    );

};
export default UpdatePage; 