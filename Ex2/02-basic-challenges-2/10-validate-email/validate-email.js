function validateEmail(str) {
    const regex = /[\w]+@[\w]+\.[\w]+/g
    return regex.test(str);
}

module.exports = validateEmail;
