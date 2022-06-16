let color = 'black';


function generateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((square) => square.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;


    for(let i = 0; i< (size*size); i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseenter',colorSquare);
        square.style.backgroundColor = 'white';
        square.style.border = '1px solid black';
        board.insertAdjacentElement('beforeend',square)
    }
}


function changeSize(input) {
    if(input >= 2 && input <= 100 ) {
        generateBoard(input);
    }

    else {
        alert("Invalid amount of squares")
    }
}

function colorSquare () {
    if(color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
    }
    else {
        this.style.backgroundColor = color;
    }

}

function changeColor(choice) {
    color = choice
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((square)  => {
        square.style.backgroundColor = 'white';
    });
}