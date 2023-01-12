//////////Before ES6

// hello = function () {
// 	return "Hello World!";
// }

function add(a, b) {
  return a + b;
}

console.log(add(1,2));
// document.getElementById("demo").innerHTML = hello();

//////////////SE6
//An arrow function in JavaScript is a shorthand way of defining a function.
// It uses the "=>" operator to define the function,
//instead of the traditional "function" keyword.

const add1 = (a, b) => {
  return a + b;
}
console.log(add1(1,4));
////////////////////////////
const add11 = a => {
  return a + 10;
}
console.log(add11(1));

//If the function only has one line of code,
//the curly braces and "return" keyword can be omitted:
const add2 = (a,b) => a+b;
console.log(add2(10,20));