const mathOperations = require("./exercise 4")

describe("Calculator tests"()=>{
    test('adding 1+2 should return 3',()=>{
        var result=mathOperations.sum(1,2)expect(result).toBe(3);
    });
    test('difference 2-1 should return 1',()=>{
        var result=mathOperations.diff(1,2)expect(result).toBe(1);
    });
    test('multiplying 1*2 should return 2',()=>{
        var result=mathOperations.product(1,2)expect(result).toBe(2);
    });
})