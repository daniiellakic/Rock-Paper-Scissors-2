//  Initial scores
let playerScore = 0;
let computerScore = 0;

// Getting elements
const playerNumber = document.getElementById("playerNumber");
const computerNumber = document.getElementById("computerNumber");
const result = document.getElementById("result");


// Random computer play
function computerPlay() {
    let a = ['Rock', 'Paper', 'Scissors']
    return a[Math.floor(Math.random() * a.length)]
}


// Word capitalization
function toCapitalize(word) {
    let lower = word.toLowerCase();
    let first = lower.charAt(0).toUpperCase();
    let remaining = lower.slice(1);
    return first + remaining;
}

function play(id) {
    playRound(id, computerPlay());
}

// Main play
function playRound(playerselection, computerSelection) {

    let p = toCapitalize(playerselection);
    let c = toCapitalize(computerSelection);

    if (p === 'Paper' &&
        c === 'Rock') {

        result.textContent = 'You win! Paper beats Rock.';
        playerNumber.textContent = playerScore += 1;

    } else if (p === 'Rock' &&
        c === 'Scissors') {

        result.textContent = 'You win! Rock beats Scissors.';
        playerNumber.textContent = playerScore += 1;

    } else if (p === 'Scissors' &&
        c === 'Paper') {

        result.textContent = 'You win! Scissors beats Paper.';
        playerNumber.textContent = playerScore += 1;

    } else if (p === c) {

        result.textContent = 'Same choice. Try again.';

    } else {

        result.textContent = `You lose! ${c} beats ${p}.`;
        computerNumber.textContent = computerScore += 1;
    }
    displayResult();

}

// Check which player gets 5 points first.

function displayResult() {

    if (playerScore === 5) {

        result.textContent += ' Congratulations! You won the game.';

    } else if (computerScore === 5) {

        result.textContent += ' Sorry! The machine won the game.';

    }
}