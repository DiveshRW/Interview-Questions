//1) Length of an array Method in JS in different ways

// Method1:Using the spread operator:
var arr = [1, 2, 3, 4];
console.log(...arr); //1,2,3,4
console.log(...arr.length); //4

// Method2: Using the Array.from() method:
var arr = [1, 2, 3, 4];
console.log(Object.keys(arr).length); // 4

// Method3: Using the Array.from() method:

var arr = [1, 2, 3, 4];
console.log(Array.from(arr).length); // 4
