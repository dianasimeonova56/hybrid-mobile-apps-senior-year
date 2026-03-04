function validatePassword(password) {
    const regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
    return regex.test(password)
}

module.exports = validatePassword;
