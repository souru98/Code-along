var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];

const player1_Button = document.getElementById('player-1');
const player2_Button = document.getElementById('player-2');

console.log(player1_Button);
console.log(player2_Button);

player1_Button.addEventListener('click', rollDice_1);
player2_Button.addEventListener('click', rollDice_2);

var player1 = ["ProGrad", 0, 1000];
var player2 = ["FacePrep", 0, 1000];


function rollDice_1() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player one rolls", position);
    changeposition_1(player1[1], position);
}

function changeposition_1(old, currentpos) {
    var newposition = old + currentpos;
    player1[1] = newposition;
    console.log(player1[1]);
    updatemoney_1(player1[1]);
}


function updatemoney_1(p1) {
    var updatemoney = 0;
    if (p1 < board.length)
        updatemoney = player1[2] - board[p1 - 1];
    else {
        p1 = p1 % 15;
        updatemoney = player1[2] - board[p1 - 1];
    }
    updatemoney = player1[2] -
        board[p1 - 1];
    console.log(updatemoney);
}

function rollDice_2() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player two rolls", position);
    changeposition_2(player2[1], position);
}

function changeposition_2(old, currentpos) {
    var newposition = old + currentpos;
    player2[1] = newposition;
    console.log(player2[1]);
    updatemoney_2(player2[1]);
}


function updatemoney_2(p2) {
    var updatemoney = 0;
    if (p2 < board.length)
        updatemoney = player2[2] - board[p2 - 1];
    else {
        p2 = p2 % 15;
        updatemoney = player2[2] - board[p2 - 1];
    }
    updatemoney = player2[2] -
        board[p2 - 1];
    console.log(updatemoney);
}