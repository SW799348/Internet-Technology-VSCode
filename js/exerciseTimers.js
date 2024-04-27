// let count = 0;
// let interval =setInterval(() => {
//     console.log(count++);
//     if (count === 11) {
//         clearInterval(interval)
//     }
// }, 2000);

let interval = setInterval(() => {
  console.log("hellow");
}, 500);

setTimeout(() => {
  clearInterval(interval);
}, 5000);

