var gameOver = false;
var currentPlayer = 'X';
var totalMoves = 0;
function placeMarker(spotId){
    if (!gameOver){
    //get the spotId
    var spot = document.getElementById(spotId);
    //if the spot is empty then change spot.innerHTML to mark the spot
    //  if (currentPlayerWon()){
    //    updateGameStatus();
    // }
    // else{
        //totalMoves++;
        //switch the player
    //}
    //else, do nothing
    }
}

function currentPlayerWon(){
    //8 getElementById to check each solution
    var s1 = document.getElementById('1');
    var s2 = document.getElementById('2');
    var s3 = document.getElementById('3');
    var s4 = document.getElementById('4');
    var s5 = document.getElementById('5');
    var s6 = document.getElementById('6');
    var s7 = document.getElementById('7');
    var s8 = document.getElementById('8');
    var s9 = document.getElementById('9');

    //if s1.innerHTML === &&& s2.innerHTML === s3.innterHTML <=first row
    // || (second row) || (third row) ......
    // || (s3.innerHTML === s5.innnerHTML && s7.innerHTML)
    //  gameOver =true;
    //}
    //else{ gameOver=false;}

    //if (!gameOver){
        //we need to check if it is a tie
        //check the counter: totalMoves
        //if it is a tie, gameOver= true;
        //
    //}
    return gameOver;
}

function updateGameStatus(){
    var statusBoard = document.getElementById('status');
    //if (gameOver){
    // some message
    //}
    //else{
    // if not a tie, prompt user to make a move
    // else, display the message
    //}
}

