const { test, expect } = require('@jest/globals');
const { stringLength } = require('./index.js');

test('check length of string', () => {
    expect(stringLength('hello')).toEqual(5);
    expect(stringLength('developer')).toEqual(9);
});

test('check if length is greater than 1 but less than or equal to 10', () => {
    expect(() => stringLength('').toThrow());
    expect(() => stringLength('The world is beautiful').toThrow())
})
