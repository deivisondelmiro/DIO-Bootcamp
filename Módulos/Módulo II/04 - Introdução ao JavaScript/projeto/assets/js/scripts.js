/*
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

*/


/* currentNumber.addEventListerner("click", currentNumber + 1 , false); */

/* Primeiro contador*/

currentNumberIncrement = document.getElementById('increment');
currentNumberDecrement = document.getElementById('decrement');
currentNumberSpan = document.getElementById("currentNumberSpan")
var currentNumber = 0;

currentNumberIncrement.addEventListener('click', function() {
    currentNumber = currentNumber + 1;
    if (currentNumber >= 0, currentNumber <= 10) {
        button.disabled = true;
    }
    currentNumberSpan.innerHTML = currentNumber;
});

currentNumberDecrement.addEventListener('click', function() {
    currentNumber = currentNumber - 1;
    if (currentNumber < 0) {
        button.disabled = true;
    }
    currentNumberSpan.innerHTML = currentNumber;
});

/* Segundo contador */
currentNumberIncrement_2 = document.getElementById('increment_2');
currentNumberDecrement_2 = document.getElementById('decrement_2');
currentNumberSpan_2 = document.getElementById("currentNumberSpan_2")
var currentNumber_2 = 0;

currentNumberIncrement_2.addEventListener('click', function() {
    currentNumber_2 = currentNumber_2 + 1;
    if (currentNumber_2 >= 0) {
        document.getElementById("currentNumberSpan_2").style.color = "black";
    }
    currentNumberSpan_2.innerHTML = currentNumber_2;
});

currentNumberDecrement_2.addEventListener('click', function() {
    currentNumber_2 = currentNumber_2 - 1;
    if (currentNumber_2 < 0) {
        document.getElementById("currentNumberSpan_2").style.color = "red";
    }
    currentNumberSpan_2.innerHTML = currentNumber_2;
});