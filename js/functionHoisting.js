greet()               //not error
function greet() {                            
    console.log('hello! , good afternoon');
}


console.log('======================================================');

console.log(addNumbers(10,20));  //hoisting does not work with arrow functions
var addNumbers = (num1, num2) => {
    return num1 + num2
}

console.log('======================================================');

console.log(addNumbers(10,20));   //hoisting does not work with arrow functions 
let addNumbers = (num1, num2) => {
    return num1 + num2
}