let box=document.getElementById('box')
// console.log(box);

//1. innerHTML              //sets or returns the HTML content (including HTML tags) of an element
console.log(box.innerHTML);

box.innerHTML = '<span>hello</span>'
console.log(box.innerHTML);

//2. textContent         //excluding html tags
console.log(box.textContent);
box.textContent = 'sunil shetty'
console.log(box.textContent);

//3. innerText
console.log(box.innerText);
box.innerText = 'hiii'
console.log(box.innerText);

//4. Applying Styles
let image = document.getElementById('image')
image.style.width = '100px'
image.style.height = '100px'

//5. setAttributes
image.setAttribute('src', '/assests/images/background.jpg')

// setTimeout(() => {
//     image.setAttribute('src', '/assests/images/background.jpg')
// }, 2000);

//6. classList
console.log(box.classList);
box.classList.add('xyz', 'aaa')
console.log(box.classList);

box.classList.remove('aaa')
console.log(box.classList);

box.classList.replace('xyz', 'mmm')

//7. append & appendChild
let parentDiv = document.createElement('div')
box.append(parentDiv)

let childDiv = document.createElement('div')
childDiv.setAttribute('attr','new')
parentDiv.appendChild(childDiv)

//8.remove & removeChild
parentDiv.removeChild(childDiv)
parentDiv.remove()