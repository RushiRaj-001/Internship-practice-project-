// 13/12/2003 
// 1.Hoisting :  
//we can use a variable or a function before it has been declared in your code. 

console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

sayHello(); // Output: "Hello World"

function sayHello() {
    console.log("Hello World");
}

// sayHi(); // Error: sayHi is not a function

// var sayHi = function() {
//   console.log("Hi!");
// };

// ----------------------------***--------------------------------------------------





