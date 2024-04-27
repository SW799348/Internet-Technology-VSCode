//DOM MANIPULATION


console.log("Hey there!");
//ID selecter

let clickButton = document.getElementById("btnClick");
console.log(clickButton);
clickButton.style.backgroundColor = 'pink'
clickButton.style.color='white'

//button click event listener
clickButton.addEventListener('click', () => {
    console.log('hellow world');
    alert('hellow')
})



//class selecter
let box=document.getElementsByClassName('box')
console.log(box);

//tag selecter
let heading1 = document.getElementsByTagName('h1')
console.log(heading1);