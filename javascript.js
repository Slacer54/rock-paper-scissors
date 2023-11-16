function getComputerChoice() {
    // Randomly choose number from 1 to 3. Store result in variable choice.
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log(choice);
    // If randomNumber is 1, return rock
    // If randomNumber is 2, return to paper
    // If randomNumber is 3, return to scissors 
}

getComputerChoice();