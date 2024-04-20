// function sayHello() {
//     console.log('hello world!!');
// }

// sayHello()

// console.log('=====================================================');

// function greetings(name) {                //using parameters
//     console.log('good morning ',name);
// }
// greetings('kamal')
// greetings()

// console.log('=====================================================');

// function greetings(firstName,lastName) {                //using parameters
//     console.log('good morning ', firstName, '', lastName);
//     return firstName + ' ' + lastName
// }
// greetings('kamal')
// greetings('kamal', 'perera')
// greetings(1, 2)

// let greetingReturnValue = greetings('amal', 'silva')
// console.log('return value :'.greetingReturnValue);

console.log("=====================exercise================================");

function addNumbers(num1, num2) {
  let add = num1 + num2;
  return add;
}

function subsNumbers(num1, num2) {
  let subs = num1 - num2;
  return subs;
}
function divideNumbers(num1, num2) {
  let divide = num1 - num2;
  return divide;
}
function multiplyNumbers(num1, num2) {
  let multiply = num1 - num2;
  return multiply;
}

let addNumValue = addNumbers(1, 2);
console.log(addNumValue);

let subNumberValue = subsNumbers(3, 1);
console.log(subNumberValue); 


let divideNumberValue = divideNumbers(3, 1);
console.log(divideNumberValue);

let multiplyNumberValue = multiplyNumbers(3, 1)
console.log(multiplyNumberValue);


console.log("=====================================================");

console.log(addNumbers(10, 'kamal'));

//NaN= Not a Number


function addNumbers(num1,num2) {
  if (num1>0) {
    let a = 'abc'
    console.log('a :' ,a);
  }
  // console.log('a :' ,a);  = error a is not defined
}
addNumbers(1,2)

// console.log("=====================================================");

// function addNumbers(num1) {
//   let a='abc';
//   if (num1>0) {
//     // console.log('a :' ,a);
//   }
//   console.log('a :' ,a);
// }




function addNumbers(num1,num2) {
  if (num1 > 0) {
    var a='abc';   // var is function scoped 
    // console.log('a :' ,a);
  }
  console.log('a :' ,a); 
}

addNumbers(1,2)

console.log("=====================================================");

function addNumbers(num1,num2) {
  var b='xyz'
  if (num1 > 0) {
    var a='abc';   // var is function scoped 
    console.log('b :' ,b);
  }
  console.log('a :' ,a); 
}

addNumbers(1,2)

console.log("=====================================================");

function addNumbers(num1,num2) {
  let b='xyz'
  if (num1 > 0) {
    var a='abc';   // var is function scoped 
    console.log('b :' ,b);
  }
  console.log('a :' ,a); 
}

addNumbers(1,2)