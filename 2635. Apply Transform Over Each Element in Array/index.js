var array = [1, 2, 3, 4, 5];

let map = function (array, fun) {
    let newArray = [];
    for (let i = 0;i<array.length;i++) {
        newArray.push(fun(array[i]));
    }
    return newArray;
}

let fun = function (element) {
    return element + 1;
}

console.log(map(array, fun)); // Returns: [2, 3, 4, 5, 6]