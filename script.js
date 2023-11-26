/* Written by Jaren Wheeler */

// The computers choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

// Goes through a round of the game and builds the logic of which choices win
function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "paper" ) {
        return computerSelection + " beats " + playerSelection + ", you lose!"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return computerSelection + " beats " + playerSelection + ", you lose!"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return computerSelection + " beats " + playerSelection + ", you lose!"
    } else if (playerSelection == computerSelection) {
        return "You have both chosen " + playerSelection + ". Keep playing!"
    } else {
        return playerSelection + " beats " + computerSelection + ", you win!"
    }
}

// Carries out the logic of scoring in the game
function game(playerSelection, computerSelection) {
    let computerScore = 0;
    let playerScore = 0;
    let roundWinner = playRound(playerSelection, computerSelection)
    while (playerScore < 5 || computerScore < 5) {
        if (roundWinner == computerSelection + " beats " + playerSelection + ", you lose!" ) {
            computerScore++;
            //return [playerScore,computerScore];
        } else if (roundWinner == playerSelection + " beats " + computerSelection + ", you win!") {
            playerScore++;
            //return [playerScore, computerScore];
        } else {
            message = "carry on"
            return message
            //return [playerScore, computerScore];
        }
        return [playerScore, computerScore]
    }
}

// Determines if the game should continue

function continueGame(playerScore, computerScore) {
    if (playerScore > 5) {
        let continueGame = False;
        let message = "You're the winner!";
        return message
    } else if (computerScore > 5) {
        let continueGame = False;
        let message = "You Lost. Better luck next time!"
        return message
    } else {
        let continueGame = True;
    }
    return continueGame;
} 
//Main execution of the game
function main() {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Rock, paper or scissors? ").toLowerCase();
    let round = playRound(playerChoice, computerChoice);
    let [playerScore, computerScore] = game(playerChoice, computerChoice);
    console.log("The computer has " + computerScore + " points and you have " + playerScore);
    console.log(round);
}

main()

