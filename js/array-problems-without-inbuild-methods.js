//1) Length of an array without (length) Method in JS
 //Method1 : Using a for loop
let array = [1,2,3,5,"a"];
let count=0;

for(let i in array){
	count++;
}
console.log(count);

//Explaination: //use a loop to iterate through the array and increment a counter until the end of the array is reached.
// The counter will then hold the number of elements in the array.
