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
const backButton = document.getElementById("back-button");
const clearButton = document.getElementById("clear-button");
backButton.textContent = "<--";

//equals button
const equalButton= document.getElementById("equal");

//add event liseners to add to toShow string
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
        initialized = false;
        addition = true;
        operatorInitialized = true;
    } else {
        //if operator is already initialized, solution from last input mus become firstnumber
        //will have to come back to this part
        secondNumber = parseFloat(display.innerText);
        evaluate(firstNumber, secondNumber);
        firstNumber = parseFloat(display.innerText);
        initialized = false;
        addition = true;
    }
});

operatorSubtraction.addEventListener("click", () => {
    if (!operatorInitialized) {
        firstNumber = parseFloat(display.innerText);
        display.innerHTML = initial;
        initialized = false;
        subtraction = true;
        operatorInitialized = true;
    } else {
        //if operator is already initialized, solution from last input mus become firstnumber
        //will have to come back to this part
        secondNumber = parseFloat(display.innerText);
        evaluate(firstNumber, secondNumber);
        firstNumber = parseFloat(display.innerText);
        initialized = false;
        subtraction = true;
    }
});

operatorMultiplication.addEventListener("click", () => {
    if (!operatorInitialized) {
        firstNumber = parseFloat(display.innerText);
        display.innerHTML = initial;
        initialized = false;
        multiplication = true;
        operatorInitialized = true;
    } else {
        //if operator is already initialized, solution from last input mus become firstnumber
        //will have to come back to this part
        secondNumber = parseFloat(display.innerText);
        evaluate(firstNumber, secondNumber);
        firstNumber = parseFloat(display.innerText);
        initialized = false;
        multiplication = true;
    }
});

operatorDivision.addEventListener("click", () => {
    if (!operatorInitialized) {
        firstNumber = parseFloat(display.innerText);
        display.innerHTML = initial;
        initialized = false;
        division = true;
        operatorInitialized = true;
    } else {
        //if operator is already initialized, solution from last input mus become firstnumber
        //will have to come back to this part
        secondNumber = parseFloat(display.innerText);
        evaluate(firstNumber, secondNumber);
        firstNumber = parseFloat(display.innerText);
        initialized = false;
        division = true;
    }
});

function evaluate(a, b) {
    console.log("evaluate");
    switch (true) {
        case addition:
            display.innerHTML = firstNumber + secondNumber;
            console.log(firstNumber + secondNumber);
            addition = false;
            break;
        case subtraction:
            display.innerHTML = firstNumber - secondNumber;
            subtraction = false;
            break;
        case multiplication:
            display.innerHTML = firstNumber * secondNumber;
            multiplication = false;
            break;
        case division:
            display.innerHTML = firstNumber / secondNumber;
            division = false;
            break;
    }   
}