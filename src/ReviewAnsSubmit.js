import React from "react";
import './Summary.css';
import UpdatePage from "./UpdatePage";

const Claim = (props) => {

let {claim} = props;

  return (
    <table>
      <tr>
         <div>
            <td>
               <div class="flip-card">
                  <div class="flip-card-inner">
                     <header class="flip-card-header">Claim Summary</header>
                     <div>&nbsp;</div>
                     <div class="margin-div">
                        <div class="div-left"><label>Employee Id:</label></div>
                        <div class="label-value">{claim.empId}</div>
                     </div>
                     <div class="margin-div">
                        <div class="div-left"><label>Employee Name:</label></div>
                        <div class="label-value">{claim.empName}</div>
                     </div>
                     <div class="margin-div">
                        <div class="div-left"><label>Claim Number:</label></div>
                        <div class="label-value">{claim.claimNumber}</div>
                     </div>
                     <div class="margin-div">
                        <div class="div-left"><label>Claim Type:</label></div>
                        <div class="label-value">{claim.claimType}</div>
                     </div>
                     <div class="margin-div">
                        <div class="div-left"><label>Claim Program:</label></div>
                        <div class="label-value">{claim.claimPrograms}</div>
                     </div>
                     <div class="margin-div">
                        <div class="div-left"><label>Claim Start Date:</label></div>
                        <div class="label-value">{claim.startDate}</div>
                     </div>
                     <div class="margin-div">
                        <div class="div-left"><label>Claim End Date:</label></div>
                        <div class="label-value">{claim.endDate}</div>
                     </div>
                     <div>&nbsp;</div>
                     <div>
                        <div></div>
                        <div class="div-right"><a href='/updateClaimSummary'>Update Claim Details</a></div>
                     </div>
                  </div>
               </div>
            </td>
         </div>
      </tr>
 </table>
  );
};

export default Claim;
