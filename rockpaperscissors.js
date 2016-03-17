////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var plamov = (move && null);
    if (plamov === null) {
        plamov = getInput();
    }
    return plamov;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var commov = (move && null);
    if (Ccommov === null) {
        commov = randomPlay();
    }
    return commov;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
        switch (plamov) {
        case 'rock':
            switch (commov) {
                case 'rock':
                    winner = 'tie';
                    break;
                case 'scissors':
                    winner = 'player';
                    break;
                case 'paper':
                    winner = 'computer';
                    break;
                default:
                winner = null;
            }
        break;
        case 'scissors':
            switch (commov) {
                case 'rock':
                    winner = 'computer';
                    break;
                case 'scissors':
                    winner = 'tie';
                    break;
                case 'paper':
                    winner = 'player';
                    break;
               default:
               winner = null;
            }
        break;
            case 'paper':
            switch (commov) {
                case 'rock':
                    winner = 'player';
                    break;
                case 'scissors':
                    winner = 'computer';
                    break;
                case 'paper':
                    winner = 'tie';
                    break;
                default:
                winner = null;
            }
        break;
        default:
        winner = null;
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

