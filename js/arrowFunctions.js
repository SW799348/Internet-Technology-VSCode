function addNumbers(num1, num2) {
    return num1+num2
}

const addNumbersArrowFunc = (num1, num2) =>{
    return num1 + num2
}

const sayHello=()=> "hello world"

console.log(addNumbers(10, 20));
console.log(addNumbersArrowFunc(10, 20));
console.log(sayHello());