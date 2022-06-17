function display() {
    let content = document.querySelector(".screen");
    let buttons = document.querySelectorAll("button");

    let opp = document.getElementsByClassName("operation");
    opp.disabled = true;


    let operation = []
    let number;
    let first;
    let second;
    buttons.forEach((button) =>
        button.addEventListener('click',function () {

            content.textContent += this.value;

            if(this.className === "operation") {
                operation.push(this.value);
            }

            if(this.value === "clear") {
                content.innerHTML = '';
                operation = [];
            }

            console.log(operation);
            if(this.value === "=") {
                number = content.textContent.split(operation);
                first = number[0];
                second = number[1].slice(0,-1);
                operate(first,second, operation.pop());
            }

            if(operation.length > 1) {
               number = content.textContent.slice(0,-1).split(operation[0]);
               first = number[0];
               second = number[1];
               operate(first,second,operation.shift());
               content.textContent+=operation[0];
            }

    }));


}

display();



function add (a,b) {
    let content = document.querySelector(".screen");
    let result = a + b;

    content.textContent = result.toString();
}

function substract (a,b) {
    let content = document.querySelector(".screen");
    let result = a - b;

    content.textContent = result.toString();
}

function multiply (a,b) {
    let content = document.querySelector(".screen");
    let result = a * b;

    content.textContent = result.toString();
}

function divide (a,b) {
    let content = document.querySelector(".screen");
    let result = a / b;

    content.textContent = result.toString();
}

function operate(a,b, operator) {
    a = parseInt(a);
    b = parseInt(b);


    if(operator === "+") {
        add(a,b)
    }

    if(operator === "-") {
        substract(a,b)
    }

    if(operator === "x") {
        multiply(a,b)
    }

    if(operator === "÷") {
        if(b === 0) {
            alert("Cannot divide with zero");
        }
        else {
            divide(a,b)
        }

    }
}


