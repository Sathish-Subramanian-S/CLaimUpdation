import React, { useState, useEffect } from "react";
import axios from "axios";
import Claim from "./Claim";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const ClaimsList = () => {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => response.data)
      .then((claims) => {
        console.log(claims);
        setClaims(claims);
      });
  }, []);

  let renderClaims = () => {
    return claims.map((claim, idx) => {
      if (claim.claimNumber != null && claim.empId != null) {
        return (
          <Claim key={idx} claim={claim} />
        );
      }
    });
  };

  return (
    <div className="container-fluid">
      <div>
        <div>
          <form>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th>EmployeeId</th>
                  <th>Employee Name</th>
                  <th>Claim Number</th>
                  <th>Claim Type</th>
                  <th>Claim Program</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {renderClaims()}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClaimsList;
