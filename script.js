function computerPlay(){

    let randomComputerChoice = Math.floor(Math.random() * (3 - 0)) + 0;
    if (randomComputerChoice === 0){
        return("rock");
    }
    else if (randomComputerChoice === 1){
        return("paper");
    }
    else {
        return("scissors");
    }
}

function roundGame(playerSelection, computerSelection){

    console.log("Computer choice: " + computerSelection);
    let playerInput = prompt("What do you want to choose: Rock, Paper or Scissors");

    console.log("Player choice: " + playerInput);
    playerSelection = playerInput.toLowerCase();

    let roundsPlayerWon = false;

    if (playerSelection === computerSelection){
        console.log("It's a tie");
    }

    else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            console.log("You lose, rock vs paper");
        }
        else {
            roundsPlayerWon = true;
            console.log("You win, rock vs scissors");
        }
    }

    else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            roundsPlayerWon = true;
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
            roundsPlayerWon = true;
            console.log("You win, scissors vs paper");
        }
    }
    return roundsPlayerWon;
}

const playerSelection = "rock";
let computerSelection;
let scorePlayer = 0;
let scoreComputer = 0;

function game(){
    
    for (let i = 0; i < 5; i++){
            console.log("New Game");   
            computerSelection = computerPlay();
            let playerWon = roundGame(playerSelection, computerSelection);

            if (playerWon === true){
                scorePlayer++;
            }else{
                scoreComputer++;
            }
            console.log("Player score: " + scorePlayer);
            console.log("Computer score: " + scoreComputer);
    }
    if (i = 5){
        console.log("Game finished");
        if(scorePlayer < scoreComputer){
            console.log("You've lost againts the computer");
        }
    }
}

game(playerSelection, computerSelection);