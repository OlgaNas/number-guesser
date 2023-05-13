let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}
function compareGuesses(human, computer, target) {
    if (Math.abs(target - human) <= Math.abs(target - computer)) {
        return true;
    } else {
        return false;
    }
}

function updateScore() {
    if (compareGuesses() === true) {
        humanScore++;
    } else {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber = currentRoundNumber++;
    return currentRoundNumber;
}
