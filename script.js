let firstNumber;
let operator;
let secondNumber;
//let result;
let arrVal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let alldispValue = "";
let dispVal = "";
let number1 = "";
let number2 = "";
let result = 0;

const display = document.querySelector(".display");
//Declaring the buttons
const btnOne = document.querySelector(".one");
const btnTwo = document.querySelector(".two");
const btnThree = document.querySelector(".three");
const btnFour = document.querySelector(".four");
const btnFive = document.querySelector(".five");
const btnSix = document.querySelector(".six");
const btnSeven = document.querySelector(".seven");
const btnEight = document.querySelector(".eight");
const btnNine = document.querySelector(".nine");
const btnZero = document.querySelector(".zero");
const btnClear = document.querySelector(".clear");
const btnPlus = document.querySelector(".plus");
const btnMinus = document.querySelector(".minus");
const btnFois = document.querySelector(".fois");
const btnDivideBy = document.querySelector(".divide-by");
const btnEqual = document.querySelector(".equal");

//function of the math basic operations
/*function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}*/

//Function operate to call the appropriate function based on the operator
function operation(ops, nb1, nb2){
    if(ops === '+'){
        //add(nb1, nb2);
        return nb1 + nb2;
    } else if(ops === '-'){
        //subtract(nb1, nb2);
        return nb1 - nb2;
    } else if(ops === '*'){
        //multiply(nb1, nb2);
        return nb1 * nb2
    } else if(ops === '/'){
        //divide(nb1, nb2);
        return nb1 / nb2;
    }
}

//Function for the display when clicking the digits
function clickingDigits(btnVal){
    display.textContent += arrVal[btnVal];
    dispVal += arrVal[btnVal]
}

//Getting the digit buttons to work
btnOne.addEventListener("click", () => {
    clickingDigits(1);
})

btnTwo.addEventListener("click", () => {
    clickingDigits(2);
})

btnThree.addEventListener("click", () => {
    clickingDigits(3);
})

btnFour.addEventListener("click", () => {
    clickingDigits(4);
})

btnFive.addEventListener("click", () => {
    clickingDigits(5);
})

btnSix.addEventListener("click", () => {
    clickingDigits(6);
})

btnSeven.addEventListener("click", () => {
    clickingDigits(7);
})

btnEight.addEventListener("click", () => {
    clickingDigits(8);
})

btnNine.addEventListener("click", () => {
    clickingDigits(9);
})

btnZero.addEventListener("click", () => {
    clickingDigits(0);
})

//Getting the clear button to work
btnClear.addEventListener("click", () => {
    display.textContent = '';
})

//Getting the operators buttons to work
btnPlus.addEventListener("click", () => {
    operator = '+';
    alldispValue += dispVal + '+';
    display.textContent = '';
    dispVal = '';
})

btnMinus.addEventListener("click", () => {
    operator = '-';
    alldispValue += dispVal + '-';
    display.textContent = '';
    dispVal = '';
})

btnFois.addEventListener("click", () => {
    operator = '*';
    alldispValue += dispVal + '*';
    display.textContent = '';
    dispVal = '';
})

btnDivideBy.addEventListener("click", () => {
    operator = '/';
    alldispValue += dispVal + '/';
    display.textContent = '';
    dispVal = '';
})

//Getting the Equal button to work
btnEqual.addEventListener("click", () => {
    alldispValue += dispVal;
    dispVal = '';
    let indOfOperator = alldispValue.indexOf(operator);
        for(let i = 0; i < indOfOperator; i++){
            number1 += alldispValue[i];
        }
    firstNumber = Number(number1);
        for(let j = indOfOperator + 1; j < alldispValue.length; j++){
            number2 += alldispValue[j];
        }
    secondNumber = Number(number2);
    //result = 
    display.textContent = operation(operator, firstNumber, secondNumber);
    
    alldispValue = '';
})