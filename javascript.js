    // RULES OF GAME
    // Rock beats Scissors, loses to Paper.
    // Paper beats Rock, loses to Scissors.
    // Scissors beats Paper, loses to Rock.
    // If both same choice - Draw.

function getComputerChoice() {

    // Randomly choose number from 1 to 3. Store result in variable choice.
    let choice = Math.floor(Math.random() * 3) + 1;
    // If choice is 1, return rock
    // If choice is 2, return to paper
    // If choice is 3, return to scissors 
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }

}

// Function should take two parameters. Players choice and the computers
function playRound(playerChoice, computerChoice) {
    

    // Player choice should be case insensitive. 
    playerChoice = playerChoice.toLowerCase();

    // Compare players choice with computers.
    // Return a string that declares the winner of the round
    if (playerChoice === computerChoice) {
        return `Draw! Computer also chose ${playerChoice}!`;
    }

    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return "You lose! Paper beats Rock!";
        } else if (computerChoice === "scissors") {
            return "You win! Rock beats Scissors"
        }
    }

    if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            return "You win! Paper beats Rock!";
        } else if (computerChoice === "scissors") {
            return "You lose! Scissors beats Paper"
        }
    }

    if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            return "You win! Scissors beats Paper!";
        } else if (computerChoice === "rock") {
            return "You lose! Rock beats Scissors"
        }
    }
}

function playerChoice() {
    return prompt("Please enter you choice: Rock, Paper or Scissors!");
}

function game() {
    // initalise two variables to keep track of the score. 
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        
        let score = playRound(playerChoice(), getComputerChoice());

        if (score.includes("win")) {
            console.log(score);
            playerScore++
        } else if (score.includes("lose")) {
            console.log(score);
            computerScore++;
        } else {
            console.log(score);
            playerScore++;
            computerScore++
        }
    }
    console.log(playerScore + " " + computerScore);
}

game();
//console.log(playRound(playerChoice(), getComputerChoice()));