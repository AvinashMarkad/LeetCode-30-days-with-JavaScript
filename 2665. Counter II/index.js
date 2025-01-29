var createCounter = function (init) {
    let currentValue = init;
    return {
        increment: function (){
            currentValue += 1;
            return currentValue;
        },
        decrement: function (){
            currentValue -= 1;
            return currentValue;
        },
        reset: function () {
            
            return currentValue =init;
        }
    }
    
};

const call = createCounter(10);

console.log(call.increment());
console.log(call.decrement());
console.log(call.reset());