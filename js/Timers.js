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

let greet = () => {
    console.log('hellow world');
}

let interval=setInterval(greet, 1000);

//cancel the interval

clearInterval(interval)