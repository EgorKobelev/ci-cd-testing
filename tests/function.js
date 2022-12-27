const validateValue = (value) => {
    if (value > 100 && value < 0) {
        return false;
    }
    return true
}

module.exports = validateValue

