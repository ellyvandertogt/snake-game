//https://www.youtube.com/watch?v=baBq5GAL0_U&ab_channel=KennyYipCoding
//X and Y
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//Snake
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //use for drawing in the board
    update();
}

function update() {
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "lime";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
}