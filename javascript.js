function getComputerChoice() {
    // Randomly choose number from 1 to 3. Store result in variable choice.
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log(choice);
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

function playRound(playerChoice, computerChoice) {
    // Function should take two parameters. Players choice and the computers
    // Player choice should be case insensitive. Initalise variable playerChoiceNoCase
    // Initalise boolean variable playerWin.
    // Compare players choice with computers.
    // If players choice beats computer, set playerWin to True.
    // Otherwise playerWin is set to False
    // Return a string that declares the winner of the round
}

const playerChoice = "rock";

console.log(getComputerChoice());