const { stringLength, reverseString } = require('./index.js');
const Calculator = require('./Calculator.js');
const exp = require('constants');
const { expect } = require('@jest/globals');

describe('stringLength and reverse String test', () => {
    test("check length of string", () => {
      expect(stringLength("hello")).toEqual(5);
      expect(stringLength("developer")).toEqual(9);
    });

    test("check if length is greater than 1 but less than or equal to 10", () => {
      expect(() => stringLength("").toThrow());
      expect(() => stringLength("The world is beautiful").toThrow());
    });

    test("reverse string", () => {
      expect(reverseString("hello")).toBe("olleh");
      expect(reverseString("developer")).toBe("repoleved");
    });

})


describe('Test for Calcutor class', () => {

    test('find the sum of two numbers', () => {
        expect(new Calculator(10, 5).add()).toBe(15);
        expect(new Calculator(2, 7).add()).toBe(9);
    });

    test('find the difference between two given numbers', () => {
        expect(new Calculator(4, 1).substract()).toBe(3);
        expect(new Calculator(4, 7).substract()).toBe(-3);
    });

    test('find the product of two numbers', () => {
        expect(new Calculator(3, 6).multiply()).toBe(18);
        expect(new Calculator(-2, 6).multiply()).toBe(-12);
    });

    test('find the dividend of two numbers', () => {
        expect(new Calculator(12, 3).divide()).toBe(4);
        expect(new Calculator(6, 3).divide()).toBe(2);
    })
})