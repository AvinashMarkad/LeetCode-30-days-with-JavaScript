let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var filter = function (array, fn) {
    let newArray = [];
    for (let i = 0; i < array.length; i++){

        if (fn(array[i], i)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

var fn = function (element) {
    return element > 10;
}

console.log(filter(array, fn)); // Returns: [11, 12, 13, 14, 15]