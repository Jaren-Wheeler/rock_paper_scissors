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


//Main execution of the game
function main() {
    computerChoice = getComputerChoice();
    playerChoice = prompt("Rock, paper or scissors? ").toLowerCase()
    round = playRound(playerChoice, computerChoice)
    return round
}

main()

