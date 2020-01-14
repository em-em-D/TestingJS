const calculator = require('./calculator')

test ('Testing aremethic operations on numbers',() =>{
    expect(calculator.add(2,3)).toBe(5);
    expect(calculator.divide(10,2)).toBe(5);
    expect(calculator.multiply(3,3)).toBe(9);
    expect(calculator.subtract(8,4)).toBe(4);
});
