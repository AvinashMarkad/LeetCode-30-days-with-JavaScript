var create = function (n) {
    var count = n;
    return function () {
        return count ++;
    }
};

var create = create(10);
console.log(create()); // 5
console.log(create()); // 5
console.log(create()); // 5