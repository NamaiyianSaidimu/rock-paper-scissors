// Create an array containing all the available choices:
const choiceArray = ['rock', 'paper', 'scissors'];

// A function that gets the choice of our computer:
const getComputerChoice = (choices) => {
    return (choices[Math.floor(Math.random() * choices.length)]);
}
// console.log(getComputerChoice(choiceArray));