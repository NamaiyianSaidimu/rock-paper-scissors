// Getting the rock button by selector:
const rock = document.getElementById('rock');
// Getting the paper button by selector:
const paper = document.getElementById('paper');
// Getting the scissors button by selector:
const scissors = document.getElementById('scissors');
// Getting the computer score by selector:
const compScore = document.getElementById('computer-score');
// Getting the player score by selector:
const playScore = document.getElementById('player-score');
// Getting the results div by selector:
const results = document.querySelector('.results');

const playerChoices =  [rock, paper, scissors];

// Declaration of variables to store the scores of both parties:
const gameScores = {computerScore: 0, playerScore: 0};


// A function that gets the choice of our computer:
const getComputerChoice = () => {
    const choiceArray = ['rock', 'paper', 'scissors'];
    const choiceNumber = Math.floor(Math.random() * 3);
    return (choiceArray[choiceNumber]);
}

let getResult = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) {
        return ("Tie!")
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        gameScores.playerScore += 1;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        gameScores.playerScore += 1;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        gameScores.playerScore += 1;
    }
    else {
        gameScores.computerScore += 1;
    }
    compScore.textContent = `${gameScores.computerScore}`;
    playScore.textContent = `${gameScores.playerScore}`;
    if (gameScores.computerScore == 5) {
        results.innerText = "GAME OVER! BETTER LUCK NEXT TIME..."
    }
    if (gameScores.playerScore == 5) {
        results.innerText = "CONGRATULATIONS! YOU BROKE THE WORLD RECORD."
    }
}

// Adding action to our buttons:
function onClickButton(playerSelection) {
    console.log(playerSelection);
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    getResult(playerSelection, computerSelection);
    console.log(gameScores.playerScore);
    console.log(gameScores.computerScore);
}

// Looping through the buttons to add events
function play () {
    playerChoices.forEach(playerChoice =>
        playerChoice.onclick = () => onClickButton(playerChoice.id));
}
console.log(play());