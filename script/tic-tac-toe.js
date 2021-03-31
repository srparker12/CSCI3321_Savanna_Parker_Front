var updateGameStatus = document.querySelector('.gameStatus');

var gameOver = false;
var currentPlayer = 'X';
var boardState= ["","","","","","","","",""];


var winMsg = () => 'Player ${currentPlayer} WON!';
var tieMsg= () => 'Tie game';
var playerTurn = () => "It's ${currentPlayer}'s turn";

updateGameStatus.innerHTML = playerTurn();

var winCondition = [
    [1,2,3]
    [4,5,6]
    [7,8,9]
    [1,4,7]
    [2,5,8]
    [3,6,9]
    [1,5,9]
    [3,5,7]
];


function placeMarker(cellClicked, cellIndex){
    boardState[cellIndex] = currentPlayer;
    cellClicked.innerHTML = currentPlayer;
}

function playerSwitch(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    updateGameStatus.innerHTML = playerTurn();
}

function currentPlayerWon(){
    var result = false;
    for (let i=0;i<=7; i++){
        var winner = winCondition[i];
        var a = boardState[winner[0]];
        var b = boardState[winner[1]];
        var c = boardState[winner[2]];
        if (a === '' || b === '' || c === ''){
            continue;
        }
        if (a === b && b === c) {
            result = true;
            break;
        }
    }
    if (result) {
        updateGameStatus.innerHTML = winMsg();
        gameOver = true;
        return;
    }

    var tie = !boardState.includes("");
    if (tie) {
        updateGameStatus.innerHTML = tieMsg();
        gameOver = true;
        return;
    }

    playerSwitch();
}

function spotClaim(clickedSpot){
    var cellClicked = clickedSpot.target;
    var cellIndex = parseInt(cellClicked.getAttribute('square-index'));

    if (boardState[cellIndex] !== "" || gameOver) {
        return;
    }

    placeMarker(cellClicked, cellIndex);
    currentPlayerWon();
}



