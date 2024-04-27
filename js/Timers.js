//1. setTimeout - execute a function once after aspecific delay
// 1 s => 1000 ms
//setTimeout(callback,delay)

let timeout = setTimeout(function () {
  //anonymous function
  console.log("hellow...");
}, 3000);

// setTimeout(() => {
//   //using arrow function
//   console.log("hellow...");
// }, 3000);

//also we can claer timesout

clearTimeout(timeout);

console.log('======================================================================================');

//2. setInterval

// setInterval(callback,interval)

let interval=setInterval(() => {
    console.log('heyyyy');
}, 1000);

//clear interval

clearInterval(interval)