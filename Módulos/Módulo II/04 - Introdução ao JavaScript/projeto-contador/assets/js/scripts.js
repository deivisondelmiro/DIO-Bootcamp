/* Primeiro contador*/

currentNumberIncrement = document.getElementById('increment');
currentNumberDecrement = document.getElementById('decrement');
currentNumberSpan_1 = document.getElementById('currentNumberSpan_1');
var currentNumber = 0;

currentNumberIncrement.addEventListener('click', function() {
    currentNumber = currentNumber + 1;
    if (currentNumber < 0, currentNumber >= 10) {
        document.getElementById('increment').disabled = true;
    } else {
        document.getElementById('decrement').disabled = false;
    }
    currentNumberSpan_1.innerHTML = currentNumber;
});

currentNumberDecrement.addEventListener('click', function() {
    currentNumber = currentNumber - 1;
    if (currentNumber <= 0) {
        document.getElementById('decrement').disabled = true;
    } else if (currentNumber >= 0) {
        document.getElementById('increment').disabled = false;
    }
    currentNumberSpan_1.innerHTML = currentNumber;
});

/* Segundo contador */

currentNumberIncrement_2 = document.getElementById('increment_2');
currentNumberDecrement_2 = document.getElementById('decrement_2');
currentNumberSpan_2 = document.getElementById('currentNumberSpan_2');
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

/* No primeiro contador, foi usado o addEventListener e condicionais. Enquanto no segundo, além do que foi realizado no primeiro contador, foi adicionado a mudança de cor quando o número fosse negativo */

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