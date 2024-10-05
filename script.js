const cells = document.querySelectorAll("[data-cell]");
const gameStatus = document.getElementById("status");
const restartButton = document.getElementById("restart");

let currentPlayer = "X";
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


function handleClicks(event){
    movesCount++;
    const cell = event.target;
    const index = Array.from(cells).indexOf(cell);

    if(gameBoard[index] === "" && !gameWon){
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;

        checkWin();

        if(!gameTie && !gameWon){
            switchPlayer()
        }
    }
}

// after every move switching player
function switchPlayer(){
    currentPlayer = currentPlayer === "X" ? "O" : "X"
    gameStatus.textContent = `Current Player: ${currentPlayer}`
}

//after every move checking koi jeeta ki nhi
function checkWin(){
    for (let i = 0; i < winningCombinations.length; i++){
        const [a,b,c] = winningCombinations[i];
        if(gameBoard[a] && 
            gameBoard[a] === gameBoard[b] && 
            gameBoard[a] === gameBoard[c]){
                gameWon = true;
                cells[a].classList.add("winner");
                cells[b].classList.add("winner");
                cells[c].classList.add("winner");
                gameStatus.textContent = ` ${gameBoard[a]} has won!!🎇🎇🥇🏆`;
                break;

            }
    }

    if(!gameBoard.includes("") && !gameWon){
        gameTie = true;
        gameStatus.textContent = ` The Game Has Tied 🥲`;
        return;
    }
}


function restartGame(){
    movesCount = 0;
    currentPlayer = "X";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameWon = false;
    gameTie = false;

    cells.forEach((cell) => {
        cell.textContent = "";
        cell.classList.remove("winner")
    })

    gameStatus.textContent = `Current Player: ${currentPlayer}`;

}


cells.forEach((cell) => {
    cell.addEventListener("click", handleClicks)
})


restartButton.addEventListener("click", restartGame)


gameStatus.textContent = `Current Player: ${currentPlayer}`