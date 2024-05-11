//numbers only validation

let inputNumber = document.getElementById('inputField');

inputNumber.addEventListener('keydown', (event)=> {
    if (event.key > 0 || event.key > 9) {
       console.log(inputNumber.value);
    } else {
        event.preventDefault();
        alert('error')
   }
})


//sir

document.getElementById('inputNumber').addEventListener('keydown', (event) => {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        
    } else {
        event.preventDefault();
        alert('numbers only')
    }
})
