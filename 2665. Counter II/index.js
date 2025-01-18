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
        reset: function (){
            return currentValue;
        }
    }
    
};

const call = createCounter(10);

call.increment()
call.decrement()
call.reset()