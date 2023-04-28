// Create an array containing all the available choices:
const choiceArray = ['rock', 'paper', 'scissors'];

// Declaration of variables to store the scores of both parties:
let playerScore = 0;
let computerScore = 0;

// A function that gets the choice of our computer:
const getComputerChoice = (choices) => {
    return (choices[Math.floor(Math.random() * choices.length)]);
}
// console.log(getComputerChoice(choiceArray));

let oneRound = (playerSelection, computerSelection = getComputerChoice(choiceArray).toLowerCase()) => {
    //computerSelection = getComputerChoice(choiceArray).toLowerCase();
    let playerChoice = playerSelection.toLowerCase();
    if (playerChoice == computerSelection) {
        return ("Tie!")
    }
    else if (playerChoice == 'rock' && computerSelection == 'scissors') {
        playerScore += 1;
        return ("You win! Rock beats Scissors.");
    }
    else if (playerChoice == 'paper' && computerSelection == 'rock') {
        playerScore += 1;
        return ("You win! Paper covers Rock.");
    }
    else if (playerChoice == 'scissors' && computerSelection == 'paper') {
        playerScore += 1;
        return ("You win! Scissors cuts paper.");
    }
    else if (playerChoice == 'scissors' && computerSelection == 'rock') {
        computerScore += 1;
        return ("You lose! Rock beats Scissors.");
    }
    else if (playerChoice == 'rock' && computerSelection == 'paper') {
        computerScore += 1;
        return ("You lose! Paper covers Rock.");
    }
    else if (playerChoice == 'paper' && computerSelection == 'scissors') {
        computerScore += 1;
        return ("You lose! Scissors cuts Paper.");
    }
}
// console.log(oneRound('scissORS'));

function game () {
    for (i = 1; i <= 5; i++) {
        oneRound(playerSelection = prompt("rock, paper or scissors?", computerSelection = getComputerChoice(choiceArray).toLowerCase()));
        console.log(`Player's Score: ${playerScore}`);
        console.log(`Computer's Score: ${computerScore}`);
    }
    if (computerScore > playerScore) {
        return ("You lose! Try again.")
    }
    else if (computerScore < playerScore) {
        return ("You Win! Congratulations.")
    }
    else {
        return ("It's a tie!")
    }
}
// console.log(game());
