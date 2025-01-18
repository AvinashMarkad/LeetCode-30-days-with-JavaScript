var createHelloWorldFunction = function () { 
    return function() { 
        return "Hello World";
    };
};

let helloWorld = createHelloWorldFunction(1);

console.log(helloWorld()); // Returns: "Hello World"