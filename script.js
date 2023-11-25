/* Written by Jaren Wheeler */

// The computers choice
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

// Goes through a round of the game and builds the logic of which choices win
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper" ) {
        return computerSelection + " beats " + playerSelection + ", you lose!"
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return computerSelection + " beats " + playerSelection + ", you lose!"
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
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
    playerChoice = prompt("Rock, paper or scissors? ")
    round = playRound(playerChoice, computerChoice)
    return round
}

main()

