//initialize variables
let initial = 0;
let initialized = false;
let firstNumber = 0;
let secondNumber = 0;
let operatorInitialized = false;
let addition = false;
let subtraction = false;
let multiplication = false;
let division = false;
let decimalTrigger = false;

//display
const display = document.getElementById("display");
display.innerHTML = initial;

//number buttons
const numberOne = document.getElementById("one");
const numberTwo = document.getElementById("two");
const numberThree = document.getElementById("three");
const numberFour = document.getElementById("four");
const numberFive = document.getElementById("five");
const numberSix = document.getElementById("six");
const numberSeven = document.getElementById("seven");
const numberEight = document.getElementById("eight");
const numberNine = document.getElementById("nine");
const numberZero = document.getElementById("zero");

//operator buttons
const operatorAddition = document.getElementById("addition");
const operatorSubtraction = document.getElementById("subtraction");
const operatorMultiplication = document.getElementById("multiplication");
const operatorDivision = document.getElementById("division");

//special buttons
const decimalButton = document.getElementById("decimal");
const backButton = document.getElementById("back-button");
const clearButton = document.getElementById("clear-button");
backButton.textContent = "<--";

//equals button
const equalButton = document.getElementById("equal");

//add event liseners to add to string
numberOne.addEventListener("click", () => {
    if (!initialized) {
        display.innerText = "1";
        initialized = true;
    } else {
        display.innerText += "1";
    }
});

numberTwo.addEventListener("click", () => {
    if (!initialized) {
        display.innerText = "2";
        initialized = true;
    } else {
        display.innerText += "2";
    }
});

numberThree.addEventListener("click", () => {
    if (!initialized) {
        display.innerText = "3";
        initialized = true;
    } else {
        display.innerText += "3";
    }ne
});

numberFour.addEventListener("click", () => {
    if (!initialized) {
        display.innerText = "4";
        initialized = true;
    } else {
        display.innerText += "4";
    }
});

numberFive.addEventListener("click", () => {
    if (!initialized) {
        display.innerText = "5";
        initialized = true;
    } else {
        display.innerText += "5";
    }
});

numberSix.addEventListener("click", () => {
    if (!initialized) {
        display.innerText = "6";
        initialized = true;
    } else {
        display.innerText += "6";
    }
});

numberSeven.addEventListener("click", () => {
    if (!initialized) {
        display.innerText = "7";
        initialized = true;
    } else {
        display.innerText += "7";
    }
});

numberEight.addEventListener("click", () => {
    if (!initialized) {
        display.innerText = "8";
        initialized = true;
    } else {
        display.innerText += "8";
    }
});

numberNine.addEventListener("click", () => {
    if (!initialized) {
        display.innerText = "9";
        initialized = true;
    } else {
        display.innerText += "9";
    }
});

numberZero.addEventListener("click", () => {
    if (!initialized) {
        display.innerText = "0";
        initialized = true;
    } else {
        display.innerText += "0";
    }
});

//add operator event listeners
operatorAddition.addEventListener("click", () => {
    if (!operatorInitialized) {
        firstNumber = parseFloat(display.innerText);
        display.innerHTML = initial;
        operatorInitialized = true;
    } else {
        secondNumber = parseFloat(display.innerText);
        evaluate(firstNumber, secondNumber);
        firstNumber = parseFloat(display.innerText);
    }
    initialized = false;
    addition = true;
    decimalTrigger = false;
});

operatorSubtraction.addEventListener("click", () => {
    if (!operatorInitialized) {
        firstNumber = parseFloat(display.innerText);
        display.innerHTML = initial;
        operatorInitialized = true;
    } else {
        secondNumber = parseFloat(display.innerText);
        evaluate(firstNumber, secondNumber);
        firstNumber = parseFloat(display.innerText);
    }
    initialized = false;
    subtraction = true;
    decimalTrigger = false;
});

operatorMultiplication.addEventListener("click", () => {
    if (!operatorInitialized) {
        firstNumber = parseFloat(display.innerText);
        display.innerHTML = initial;
        operatorInitialized = true;
    } else {
        secondNumber = parseFloat(display.innerText);
        evaluate(firstNumber, secondNumber);
        firstNumber = parseFloat(display.innerText);
    }
    initialized = false;
    multiplication = true;
    decimalTrigger = false;
});

operatorDivision.addEventListener("click", () => {
     if (!operatorInitialized) {
        firstNumber = parseFloat(display.innerText);
        display.innerHTML = initial;
        operatorInitialized = true;
    } else {
        secondNumber = parseFloat(display.innerText);
        evaluate(firstNumber, secondNumber);
        firstNumber = parseFloat(display.innerText);
    }
    initialized = false;
    division = true;
    decimalTrigger = false;
});

//equal button event listener needs to reset operaterInitialized
equalButton.addEventListener("click", () => {
    if (operatorInitialized) {
        secondNumber = parseFloat(display.innerText);
        evaluate(firstNumber, secondNumber);
        firstNumber = parseFloat(display.innerText);
        operaterInitialized = false;
    } else {
        firstNumber = parseFloat(display.innerText);
    }
    initialized = false;
    decimalTrigger = false;
});

//special button event listeners
clearButton.addEventListener("click", () => {
    initialize();
})

backButton.addEventListener("click", () => {
    let len = display.innerHTML.length
    display.innerHTML = display.innerHTML.slice(0, len - 1);
});

decimalButton.addEventListener("click", () => {
    if (!decimalTrigger && !initialized) {
        display.innerHTML = ".";
    } else if (!decimalTrigger) {
        display.innerHTML += ".";
    }
    decimalTrigger = true;
    initialized = true;
})

//functions
function evaluate(a, b) {
    switch (true) {
        case addition:
            display.innerHTML = a + b;
            addition = false;
            break;
        case subtraction:
            display.innerHTML = a - b;
            subtraction = false;
            break;
        case multiplication:
            display.innerHTML = Math.round((a * b) * 10000000) / 10000000;
            multiplication = false;
            break;
        case division:
            display.innerHTML = Math.round((a / b) * 10000000) / 10000000;
            division = false;
            break;
    }   
}

function initialize() {
    initial = 0;
    initialized = false;
    firstNumber = 0;
    secondNumber = 0;
    operatorInitialized = false;
    addition = false;
    subtraction = false;
    multiplication = false;
    division = false;
    decimalTrigger = false;
    display.innerHTML = initial;
}