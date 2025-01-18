var expect = function (val) {
    
    return {
        toBe: function (expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error ("Not Equal");
            }
        },
        notToBe: function (expected) { 
            if (val !== expected) { 
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};

var resultOne = expect(10).toBe(20);
var resultTwo = expect(10).notToBe(10);
console.log(resultOne);
console.log(resultTwo);