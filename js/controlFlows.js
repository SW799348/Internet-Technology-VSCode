//javascript Control Flows

//1. === if/else/else-if ===

let number = 3;
if (number > 0) {
  console.log("positive number");
} else if (number < 0) {
  console.log("negative number");
} else {
  console.log("zero number");
}

//2. === switch statement ===

let dayOfWeek = 10;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = "Monday";
    break;

  case 2:
    dayName = "Tuesday";
    break;

  case 3:
    dayName = "Wednesday";
    break;

  case 4:
    dayName = "Thursday";
    break;

  case 5:
    dayName = "Friday";
    break;

  case 6:
    dayName = "Saturday";
    break;

  case 7:
    dayName = "Sunday";
    break;

   default:
    dayName = "invalid";
    break;
}
console.log("day of week : ", dayName);


//. === Loops===


// // For loop
for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}

// While loop
let count = 0;
while (count < 3) {
  console.log("Count: " + count);
  count++;
}

// Do-while loop
let x = 0;
do {
  console.log("Value of x: " + x);
  x++;
} while (x < 3);

// Continue statement
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log("Iteration: " + i);
}

// Break statement
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log("Iteration: " + i);
 }