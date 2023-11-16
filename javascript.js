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
    console.log(playerChoice);
    // Initalise boolean variable playerWin.
    // Compare players choice with computers.
    // If players choice beats computer, set playerWin to True.
    // Otherwise playerWin is set to False
    // Return a string that declares the winner of the round
}

const playerChoice = "PAPER";

playRound(playerChoice, getComputerChoice());