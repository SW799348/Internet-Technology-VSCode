//1.using var

console.log(number);    //not error

var number = 100;

//with var, variable declarations are hoisted to the top of their containing function
//or global scope,which means you can access the variable before it's declared wihtout
//causing an error, although its value will be undefined until it's assigned


//2.using let

console.log(firstName);   //  error (hoist wenawa but initialized wennah)
let firstName = 'samadhi';


//3.using const

console.log(lastName);   //error (hoist wenawa but initialized wennah)
const lastName='Perera'
