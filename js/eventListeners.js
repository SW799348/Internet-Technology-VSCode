document.getElementById("btnAdd").addEventListener("click", function () {
  // console.log('Added to Cart');
  alert("added to cart");
});

//2. mouseover event
document.getElementById("box").addEventListener("mouseover", () => {
  console.log("mouseover....");
});

//3. mouseout

document.getElementById("box").addEventListener("mouseout", () => {
  console.log("mouseout...");
});

//exercise
let box = document.getElementById("box");

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "green";
});

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "red";
});

//4. keydown event
let usernameField = document.getElementById("username");
usernameField.addEventListener("keydown", (event) => {
  console.log("key down..."+ event.keyCode);
});

//4. keyup event
usernameField = document.getElementById("username");
usernameField.addEventListener("keyup", (event) => {
  console.log("key up..."+ event.key);
});

//5.submit event
document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault()      //prevent the refresh after submit
    console.log('form submitted');
})
