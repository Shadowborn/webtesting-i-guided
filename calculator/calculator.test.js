const calculator = require('./calculator.js');

// test away!

describe('calculator.js', function() {
    //tests or nested describes here

    it('can run the tests', () => {
        // const expected = 4;
        // const actual = calculator.add(2, 2);
        
        // // assertion
        // expect(actual).toBe(expected);
        // // .toBe() is a matcher
        expect(calculator.add(2, 2)).toBe(4)
        expect(calculator.add(2, 3)).toBe(5)
    });

    it('it should return the provided value if only one number given', () => {
        expect(calculator.add(2)).toBe(2)
        expect(calculator.add(3)).toBe(3)
    });

    it('should return the sum of any number of values passed', () => {
        expect(calculator.add(1, 2, 3)).toBe(6);
        expect(calculator.add(1, 0, 3)).toBe(4);
        expect(calculator.add(1, 0, 3, 1, 2, 4)).toBe(11);
        expect(calculator.add(1)).toBe(1);
        expect(calculator.add(1, -1)).toBe(0);
    });
    it('should return 0 if called with no arguments', () => {
        expect(calculator.add()).toBe(0);
    });

    it('should return the sum of an array of numbers', () => {
        expect(calculator.add([1, 2, 3])).toBe(6);
    });


});

// add two numbers

// passing only 1 value

// adding any number values passed (separated by comma)

// should return 0 if called with no arguments
// sum an array of numbers