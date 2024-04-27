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
let box=document.getElementsByClassName('box')    //if u want to get elements in the same class name ,use this selecter
console.log(box);

//tag selecter
let heading1 = document.getElementsByTagName('h1')
console.log(heading1);

//query selecter
let button = document.querySelector('btnClick')
console.log(button);

let testdiv = document.querySelector('.test-div')
console.log(testdiv);

//give a first value in that class name
let box1 = document.querySelector('.box')
console.log(box1);

//query selector all
let all = document.querySelectorAll('.box') 
console.log(all); 

//by path
let boxexa=document.querySelector('.container .box')  //slow
console.log(boxexa);