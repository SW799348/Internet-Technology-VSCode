function addNumbers(num1, num2) {
  return num1 + num2;
}

const addNumbersArrowFunc = (num1, num2) => {
  return num1 + num2;
};

const sayHello = () => "hello world";

console.log(addNumbers(10, 20));
console.log(addNumbersArrowFunc(10, 20));
console.log(sayHello());

//Converting Named functions to arrow functions

const addNumber = (num1, num2) => num1 + num2;
console.log(addNumber(10, 20));

console.log("=====================================================");

//Converting Anonymous functions to arrow functions

let multiplyNumbers = (num1, num2) => num1 * num2;
console.log(multiplyNumbers(10, 20));

console.log("=====================================================");

//Converting Constructor functions to arrow functions

//syntax wise this is possible
//BUT, DON'T DO THIS
//Not supports 'this', 'new' when using arrow functions

let Student = (name, age, email) => {
  this.name = name;
  this.age = age;
  this.email = email;
};

let student1 = new Student("kamal", 20, "sami@gamil.com");
console.log(student1);

//Converting Callback functions to arrow functions

let myFunction = (callback) => callback();

let person = {
  name: "kamal",
  age: 40,
};
myFunction(person);

//ek parameter ekk tynew nm () nthuw danna pluwn        let myFunction = callback => callback()
//ek parameter ekkwth naththam aniwren ()  danna one    let myFunction = () => callback()
