export default function formValidation(userData) {

    let claimNum = userData.claimNumber;
    let claimPrgm = userData.claimPrograms;
    let startDate = userData.startDate;
    let endDate = userData.endDate;
    let errors = {}
    let lettersAlphaNumeric = /^[0-9a-zA-Z-]+$/;
    let claimNumVal = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    let dateReg = /^\d{4}([./-])\d{2}\1\d{2}$/

    if (!claimNum.match(lettersAlphaNumeric)) {
        errors.claimNumberValidateMsg = "No Special Characters allowed";
    }
    if (!claimNum.match(claimNumVal)) {
        errors.claimNumberValidateMsg = "Please enter number in specified format";
    }
    if (claimPrgm.length > 20) {
        errors.claimProgramsValidateMsg = "Please enter maximum of 20 digits";
    }
    if (claimPrgm.length == 0) {
        errors.claimProgramsValidateMsg = "This field is required";
    }
    if (!startDate.match(dateReg)) {
        errors.startDateValidateMsg = "Please enter the valid date";
    }
    if (!endDate.match(dateReg)) {
        errors.endDateValidateMsg = "Please enter the valid date";
    }
    return errors;
}


