// There are 6 types in Javascript

// 1. String
let firstName = 'Kamal'
console.log('Type of firstName : ', typeof firstName)

// 2. Number
let age = 30;
console.log('Type of age : ', typeof age)

let distancekm = 3.25
console.log('Type of distanceKm : ', typeof distancekm)

// 3. Boolean
let isAdded = true
console.log('Type of isAdded : ', typeof isAdded)

let isDeleted = false
console.log('Type of isDeleted : ', typeof isDeleted)

// 4. Undefined
let address;
console.log('Type of address : ', typeof address)

let email = undefined
console.log('Type of email : ', typeof email)

// 5. Null - Represents the intentional absence of any object value. It is a primitive value that represents the absence of a value or an empty value
let phoneNumber = null
console.log('Type of phoneNumber : ', typeof phoneNumber)

// 6. Symbol - Introduced in ECMAScript 6 (ES6), symbols are unique and immutable primitive values. They are often used as unique identifiers.
let symbol = Symbol('First Name')
console.log('Type of symbol : ', typeof symbol)