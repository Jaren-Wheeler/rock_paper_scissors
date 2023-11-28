/* Written by Jaren Wheeler - Nov. 27-2023 */

(function() {

    let choices = ["rock", "paper", "scissors"]; 

    // returns the computers choice
    function getComputerChoice() {
        let randomChoice = Math.floor(Math.random() * choices.length);
        return choices[randomChoice]
    };

    // goes through the choices to determine whether the player or computer wins a round
    function checkWinner(playerSelection,computerSelection) {
        if(playerSelection == computerSelection) {
            return "Tie";
        } else if (
            (playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")
        ) {
            return "Player";
        } else {
            return "Computer";
        }
    }

    // Returns win or lose messages after a round is played
    function playRound(playerSelection, computerSelection) {
        const result = checkWinner(playerSelection,computerSelection)
        if (result == "Tie") {
            return "It's a tie!"
        } else if (result == "Player") {
            return `You win! ${playerSelection} beats ${computerSelection}`
        } else {
            return `You lose! ${computerSelection} beats ${playerSelection}`
        }
    }

    // returns the players input. Checks whether or not the input is valid
    function getPlayerChoice() {
        let validatedInput = false;
        while(validatedInput == false) {
            const choice = prompt("Rock, paper, scissors? ");
            if (choice == null) {
                continue;
            }
            const choiceInLower = choice.toLowerCase();
            if (choices.includes(choiceInLower)) {
                validatedInput = true;
                return choiceInLower;
            }
        }
    }

    // The main running of the game. Loops previous functions 5 times to create 5 rounds, increasing score each time
    function game() {
        let scorePlayer = 0;
        let scoreComputer = 0;
        for (let i=0; i<5; i++) {
            const playerSelection = getPlayerChoice();
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
            if (checkWinner(playerSelection, computerSelection) == "Player") {
                scorePlayer++;
            } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
                scoreComputer++;
            }
        }
        console.log("Game over");
        if (scorePlayer > scoreComputer) {
            console.log("Player was the winner!");
        } else if (scorePlayer < scoreComputer) {
            console.log("Computer is the winner!");
        }
    }

    game();

})()