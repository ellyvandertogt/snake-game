//https://www.youtube.com/watch?v=baBq5GAL0_U&ab_channel=KennyYipCoding
//X and Y
var blockSize = 25;//What 25 is refering to, px?
var rows = 20;
var cols = 20;
var board;
var context;

//Snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

//Food
var foodX;
var foodY;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //use for drawing in the board

    placeFood();
    document.addEventListener("keyup", changeDirection);
    //update();
    setInterval(update, 1000/10); //100 milliseconds
}

function update() {
    context.fillStyle = "black"; // why don't we style in CSS. eg background color
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "lime";
    snakeX += velocityX * blockSize;//moving a unit of blocksize
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
}

function changeDirection(e) {
    if (e.code == "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    }
}

function placeFood() {
    //0-1 * cols -> (0-19.999) with math.floor -> (0-19) 25
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}