export default function validatePwd(userData) {
    let errors = {}
    let name = userData.userName;
    let password = userData.password;

    let alphaNumericValidtion = /^[0-9a-zA-Z]+$/;
    let flag = true;
    
    if (name == null) {
        errors.userNameValidateMsg = "Username cannot be empty";
        flag = false;
    }
    if (!name.match(alphaNumericValidtion)) {
        errors.userNameValidateMsg = "Username is not allowed with special characters";
        flag = false;
    }
    if (password.length < 4) {
        errors.pwdValidateMsg = "Password should be atleast 4 characters";
        flag = false;
    }
    if (flag) {
        window.location.href = "/summary";//router navigation
    }
    return errors;
}
