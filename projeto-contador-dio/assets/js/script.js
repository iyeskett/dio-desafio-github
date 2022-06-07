var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var adicionar = document.getElementById(adicionar);


function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 0){
        currentNumberWrapper.style.color ="black";
    }
    
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        currentNumberWrapper.style.color ="red";
    }
}

