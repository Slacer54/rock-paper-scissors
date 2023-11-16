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
console.log(getComputerChoice());