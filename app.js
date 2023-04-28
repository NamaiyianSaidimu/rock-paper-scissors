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
        return ("You win! Rock beats Scissors.");
    }
    else if (playerChoice == 'paper' && computerSelection == 'rock') {
        return ("You win! Paper covers Rock.");
    }
    else if (playerChoice == 'scissors' && computerSelection == 'paper') {
        return ("You win! Scissors cuts paper.");
    }
    else if (playerChoice == 'scissors' && computerSelection == 'rock') {
        return ("You lose! Rock beats Scissors.");
    }
    else if (playerChoice == 'rock' && computerSelection == 'paper') {
        return ("You lose! Paper covers Rock.");
    }
    else if (playerChoice == 'paper' && computerSelection == 'scissors') {
        return ("You lose! Scissors cuts Paper.");
    }
}
// console.log(oneRound('scissORS'));
