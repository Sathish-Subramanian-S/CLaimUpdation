import React, { useState, useEffect } from 'react';
import formValidation from './formUpdationValidation';
import axios from "axios";
import { Router } from 'react-router-dom';

const useFormValidation = (validate) => {

    const [userData, setUser] = useState({
        userName: '',
        password: ''
    })

    const [successMsg, setSuccessMsg] = useState('')

    const [updatedUserData, setUpdatedUser] = useState({
        claimNumber: '',
        claimType: '',
        claimPrograms: '',
        startDate: '',
        endDate: '',
        empName: '',
        empId: ''
    })

    const [isSubmited, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [claims, setClaims] = useState([]);
    const [claim, setClaim] = useState({
        claimNumber: '',
        claimType: '',
        claimPrograms: '',
        startDate: '',
        endDate: '',
        empName: '',
        empId: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUser({
            ...userData,
            [id]: value
        })
    }

    const handleFormChange = (e) => {
        const { id, value } = e.target;
        setUpdatedUser({
            ...updatedUserData,
            [id]: value
        })
    }

    const handleClaimChange = (e) => {
        const { id, value } = e.target;
        setClaim({
            ...claim,
            [id]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(userData));
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // validations
        let updationFlag = false;
        setErrors(validate(claim));
        if (Object.keys(errors).length === 0) {
            axios.post("http://localhost:8080/api/products", claim);
            setSuccessMsg('Updated Successfully')
        }
    }

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/products")
            .then((response) => response.data)
            .then((claims) => {

                setClaims(claims);
                claims.map((claim, idx) => {
                    if (claim.claimNumber != null && claim.claimNumber == '123-456-789') {
                        setClaim(claim);
                    }
                });
            });
    }, []);

    return { handleChange, handleFormSubmit, handleSubmit, errors, userData, claim, handleFormChange, handleClaimChange, successMsg }
};

export default useFormValidation;