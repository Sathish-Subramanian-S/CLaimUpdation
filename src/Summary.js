import React, { Component, useState, useEffect } from 'react';
import './Summary.css';
import axios from "axios";
import Claim from "./Claim";

const Summary = () => {

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
      if (claim.claimNumber != null && claim.claimNumber == '123-456-789') {
        return (
          <Claim key={idx} claim={claim} />
        );
      }
    });
  };


  return (
    <div>
      <div>
        {renderClaims()}
      </div>
    </div>

  );

};
export default Summary; 