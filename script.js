
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

getComputerChoice();