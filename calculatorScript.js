let operation = []

function display() {
    let content = document.querySelector(".screen");
    let buttons = document.querySelectorAll("button");



    let number;
    let first;
    let second;
    buttons.forEach((button) =>
        button.addEventListener('click',function () {
            let x = (parseInt(content.textContent[content.textContent.length -1]))

            if(this.value !== "=" ) {
                content.textContent += this.value;
            }

            if(this.className === "operation" && Number.isInteger(x)) {
                operation.push(this.value);
                console.log(operation);
            }

            if(this.value === "clear") {
                content.innerHTML = '';
                operation = [];
            }

            if(this.value === "=") {
                number = content.textContent.split(operation);
                first = number[0];
                second = number[1]
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
    let result = (a / b).toFixed(2);

    content.textContent = result.toString();
}

function operate(a,b, operator) {
    let content = document.querySelector(".screen");
    a = parseFloat(a);
    b = parseFloat(b);


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
            content.innerHTML = '';
            operation = [];
        }
        else {
            divide(a,b)
        }

    }
}


