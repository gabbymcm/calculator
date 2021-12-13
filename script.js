function addition (a, b){
    return a + b;
};

function subtraction (a, b){
    return a - b;
};

function multiply (a, b){
    return a * b;
};

function divide (a, b){
    return a / b;
};

function operate(operator, num1, num2){
    if (operator === "+"){
        return addition(num1, num2);
    } else if (operator === "-"){
        return subtraction(num1, num2);
    } else if (operator === "*"){
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    };
};

var display = [];

function addDisplay(num){
    display.push(num);
};

document.querySelector('#one').addEventListener('click', () => {
    addDisplay(1);
});
document.querySelector('#two').addEventListener('click', () => {
    addDisplay(2);
});
document.querySelector('#three').addEventListener('click', () => {
    addDisplay(3);
});
document.querySelector('#four').addEventListener('click', () => {
    addDisplay(4);
});
document.querySelector('#five').addEventListener('click', () => {
    addDisplay(5);
});
document.querySelector('#six').addEventListener('click', () => {
    addDisplay(6);
});
document.querySelector('#seven').addEventListener('click', () => {
    addDisplay(7);
});
document.querySelector('#eight').addEventListener('click', () => {
    addDisplay(8);
});
document.querySelector('#nine').addEventListener('click', () => {
    addDisplay(9);
});
document.querySelector('#zero').addEventListener('click', () => {
    addDisplay(0);
});

var operator;

document.querySelector("#sum").addEventListener('click', () => {
    operator = "+";
});
document.querySelector("#subtract").addEventListener('click', () => {
    operator = "-";
});
document.querySelector("#multiply").addEventListener('click', () => {
    operator = "*";
});
document.querySelector("#divide").addEventListener('click', () => {
    operator = "/";
});

