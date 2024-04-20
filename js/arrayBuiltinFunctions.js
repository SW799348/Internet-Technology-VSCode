let studentNames = ["kamal", "namal", "amal"];
console.log("Student array :", studentNames);

//Built - In functions -js walin apita deela tyena functions

//1.push- add one or more elements to the end of array

studentNames.push("john", "ami");
console.log("student array after push :", studentNames);

console.log("---------------------------------------------------");

//2.pop- removes the last element from an array and returns that element

let poppedName = studentNames.pop();
console.log("popped element : ", poppedName);
console.log("student array after popped :", studentNames);

console.log("---------------------------------------------------");

//3. shift removes the first element from an array and returns that element

let shiftedName = studentNames.shift();
console.log("shifted name :", shiftedName);
console.log("student array after shifted :", studentNames);
console.log("first name(0 index) after shifted :", studentNames[0]);

console.log("---------------------------------------------------");

//4. add one or more elements to the start of array

studentNames.unshift("Shain");
console.log("student array after unshifted :", studentNames);

console.log("---------------------------------------------------");

//5. concat - combines two or more arrays and returns a new array without modifying the existing array

let maleNames = ["kusal", "dimuth", "pathum"];
let femaleNames = ["chamari", "nimali", "shewmi"];

let cricketers = maleNames.concat(femaleNames);
console.log("new array after concat :", cricketers);
console.log("without assign to the variable :", maleNames.concat(femaleNames));

console.log("---------------------------------------------------");

//6.slice - returns a copy of a portion of an array into a new array

let fruits = ["mango", "apple", "orange", "avecado"];
console.log("array after sliced from 0 index :", fruits.slice(0));
console.log("array after sliced from 1 index :", fruits.slice(1));
console.log("array after sliced from 2 index :", fruits.slice(2));
console.log("array after sliced from 3 index :", fruits.slice(3));

console.log("---------------------------------------------------");

//7.splice -

let fruitsArray = ["apple", "mango", "orange", "avacado"];
fruitsArray.splice(2, 1, "mangose");
console.log("Array after spliced from 0 index:", fruits.splice(0));
console.log("Array after spliced from 0 index:", fruits.splice(1));
console.log("Array after spliced from 0 index:", fruits.splice(2));

console.log("---------------------------------------------------");

//8.reverse

let letters = ["a", "b", "c", "d"];
console.log("reversed array :", letters);
console.log("reversed letters array : ", letters.reverse());

console.log("---------------------------------------------------");

//9.sort

let numbers = [10, 40, 50, 100, 20];
console.log("numbers array :", numbers);
console.log("numbers array after sorted :", numbers.sort());

console.log("---------------------------------------------------");

//descending order
console.log('Numbers array after sorted descending :',numbers.sort().reverse());
let testingArray = ['kamal', 'nimal', 'amal', 100];
console.log('testing array 0 index :', typeof testingArray[0]);
console.log('testing array  3 index :', typeof testingArray[3]);
console.log('testing array 1 index :' ,typeof testingArray[1]);
