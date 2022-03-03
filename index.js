
const stringLength = (str) => {
    const length = str.length;
    if (length === 0 || length > 10) {
        throw new Error('String must be less than 10 characters ');
    }

    return length;
}



module.exports = {
    stringLength
};
