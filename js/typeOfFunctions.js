//type of functions

//1. Named Function

function addNumber(num1, num2) {
  return num1 + num2;
}
console.log(addNumber(10, 20));

console.log("=====================================================");

//2. Anonymous function

let multiplyNumbers = function (num1, num2) {
  return num1 * num2;
};
console.log(multiplyNumbers(10, 20));

console.log("=====================================================");

//3. Arrow Function

let subsNumbers = (num1, num2) => {
  console.log("Inside Arrow Function");
  return num1 - num2;
};
console.log(subsNumbers(20, 10));

console.log("=====================================================");

//arrow function eke function body ek 1 line ekk wtrkanm pahala tyena wdhta krnn pluwn

let subsNumber = (num1, num2) => num1 - num2;

console.log(subsNumber(30, 10));

console.log("=====================================================");

//4. Constructor Function  --> object ekak instanciate kraddi ekta values initialze krnn use krnne constructor

function Student(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}

let student1 = new Student("kamal", 20, "sami@gamil.com");
console.log(student1);

let student2 = new Student("kamal", 20);
console.log(student2);

//multiple consctrucotors na javascript wala
//hadala tyenwnm awasanata tyena constructor ek thama print krgnne
//single constructor tyenne

console.log("=====================================================");

//5. Callback functions

function myFunction(callback) {
  console.log(typeof callback);
  if (typeof callback === "function") {
    callback();
  }
  //   console.log(callback);
  // callback();  // function ekk wtrai nm call krnne
}

let person = {
  name: "kamal",
  age: 40,
};

let numbersArray = [1, 2, 3, 4, 5];

function secondFunction() {
  console.log("second function");
}
myFunction(secondFunction);
// myFunction(person)     ----> error enw bcz of callback() method in 67 line
// myFunction(numbersArray)   ----> error enw bcz of callback()  method in 67 line   ---> e error ek hadanna thama udin if ekk dala check krnne function ekkd kiyala

//function ekakta thawa function ekak unath pass krnn pluwn

console.log("=====================================================");

//after if clause  there were no errors

myFunction(person)
myFunction(numbersArray)

console.log("=====================================================");

//6. Recursive functions

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

console.log("=====================================================");
