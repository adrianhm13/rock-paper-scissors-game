function computerPlay(){

    let computerChoice;
    let randomComputerChoice = Math.floor(Math.random() * (3 - 0)) + 0;
    console.log(randomComputerChoice);

    if (randomComputerChoice === 0){
        return("rock");
    }
    else if (randomComputerChoice === 1){
        return("paper");
    }
    else {
        return("scissors");
    }
    console.log(computerPlay);
}

function roundGame(playerSelection, computerSelection){
    console.log("Computer choice: " + computerSelection);
    let playerInput = prompt("What do you want to choose: Rock, Paper or Scissors");

    console.log(playerInput);
    playerSelection = playerInput.toLowerCase();

    if (playerSelection === computerSelection){
        console.log("It's a tie");
    }

    else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            console.log("You lose, rock vs paper");
        }
        else {
            console.log("You win, rock vs scissors");
        }
    }

    else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            console.log("You win, paper vs rock");
        }
        else{
            console.log("You lose, paper vs scissors");
        }
    }

    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            console.log("You lose, scissors vs rock");
        }
        else{
            console.log("You win, scissors vs paper");
        }
    }
    //Return the results with return var;
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(roundGame(playerSelection, computerSelection));


