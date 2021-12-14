const num = document.querySelectorAll(".num");
const op = document.querySelectorAll(".op");
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#dec");
const button = document.querySelector("button");
const display = document.querySelector(".display");
const equals = document.querySelector("#equals");

var num1 = '';
var num2 = '';
var solution = '';
var operator = "0";
const content = document.createElement('h1');
content.textContent = '0';
display.appendChild(content);

//Store the operand
function operand(){
    for (let i = 0; i <= 4; i++) {
        op[i].addEventListener('click', () => {
            operator = op[i].value;
            content.textContent = operator;
            display.appendChild(content); 
            return operator;
        });
    };
};

operand();

//Assign numbers from buttons to the first and second variable
function assignNum(){
    num.forEach( function(item){
        item.addEventListener('click', () => {
            if (operator === "0"){
                num1 += item.value;
                content.textContent = num1;
                display.appendChild(content); 
                return num1;
            } else {
                num2 += item.value;
                content.textContent = num2;
                display.appendChild(content); 
                return num2;
            };   
        });
    });
};

assignNum();

// Run operate function based on inputs

function calculate (){
    equals.addEventListener('click', () => {
        if(operator === "/" && (num1 === "0" || num2 === "0")){
            solution = "nice try";
            content.textContent = solution;
            display.appendChild(content);
            num1 = '';
            num2 = '';
            operator = '0';
            return solution;

        } else {
            solution = +(operate(operator, num1, num2)).toFixed(2);
            content.textContent = solution;
            display.appendChild(content);
            num1 = '';
            num2 = '';
            operator = '0';
            return solution;
        };
        
    });
};

calculate();

// Clear button functionality
function clearAll () {
    clear.addEventListener('click', () => {
        num1 = '';
        num2 = '';
        operator = '0';
        solution = '';
        content.textContent = '0';
        display.appendChild(content);
    });
};  

clearAll();

//basic calculator functions
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

//function to trigger calculator functions
function operate(operator, num1, num2){
    var a = Number(num1)
    var b = Number(num2);
    if (operator === "+"){
        return addition(a, b);
    } else if (operator === "-"){
        return subtraction(a, b);
    } else if (operator === "*"){
        return multiply(a, b);
    } else {
        return divide(a, b);
    };
};