const cells = document.querySelectorAll("[data-cell]");
const gameStatus = document.getElementById("status");
const restartButton = document.getElementById("restart");

let currentPlayer = "x";
let gameBoard = ["", "", "", "", "", "", "", "", ""]; // yahn hum x & o ki input dalnege & niche wale 2D aray winning combination ke sath compare krenge
let gameWon = false;
let gameTie = false;
let movesCount = 0;

// making a 2D array for all winning combinations
const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];












gameStatus.textContent = `Current Player: ${currentPlayer}`