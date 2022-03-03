
const stringLength = (str) => {
    const length = str.length;
    if (length === 0 || length > 10) {
        throw new Error('String must be less than 10 characters ');
    }

    return length;
}

const reverseString = (str) => {
    return str.split('').reverse().join('');
}

const capitalize = (str) => {
    return str.replace(/^\w/, (charac) => charac.toUpperCase());
}


module.exports = {
    stringLength,
    reverseString,
    capitalize,
};
