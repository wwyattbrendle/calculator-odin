//initialize variables
let toShow = "0";
let initialized = false;
let firstNumber = toShow;
let secondNumber = toShow;

//display
const display = document.getElementById("display");
display.innerText = toShow;

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