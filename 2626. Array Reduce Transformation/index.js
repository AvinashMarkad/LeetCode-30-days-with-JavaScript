let arr = [1, 2, 3, 4];

var reduce = function (arr, fn, init) {
    let sum = init;
    for (let i = 0; i < arr.length; i++) { 
        sum = fn(sum, arr[i]);
    }
    return sum;
}

var fn = function (a, z) {
    return a + z;
}

console.log(reduce(arr, fn, 0)); // 10