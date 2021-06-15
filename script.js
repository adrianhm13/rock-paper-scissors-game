function computerPlay() {

    let randomComputerChoice = Math.floor(Math.random() * (3 - 0)) + 0;
    if (randomComputerChoice === 0) {
        return ("rock");
    }
    else if (randomComputerChoice === 1) {
        return ("paper");
    }
    else {
        return ("scissors");
    }
}

function roundGame(playerSelection, computerSelection) {

    console.log("Computer choice: " + computerSelection);
    let playerInput = playerSelection;

    console.log("Player choice: " + playerInput);
    playerSelection = playerInput.toLowerCase();

    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        console.log("test" + playerSelection);
        let roundsPlayerWon = "lose";

        if (playerSelection === computerSelection) {
            roundsPlayerWon = "tie";
            console.log("It's a tie");
        }

        else if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                console.log("You lose, rock vs paper");
            }
            else {
                roundsPlayerWon = "win";
                console.log("You win, rock vs scissors");
            }
        }

        else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                roundsPlayerWon = "win";
                console.log("You win, paper vs rock");
            }
            else {
                console.log("You lose, paper vs scissors");
            }
        }

        else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                console.log("You lose, scissors vs rock");
            }
            else {
                roundsPlayerWon = "win";
                console.log("You win, scissors vs paper");
            }
        }
        return roundsPlayerWon;

    } //End of if condition if the inputValue it's correct
    else {
        alert("Choice not available, try again");
        game(playerSelection, computerSelection);
    }
}

const playerSelection = "rock";
let computerSelection;
let scorePlayer = 0;
let scoreComputer = 0;

function game() {

    for (let i = 0; i < 5; i++) {
        console.log("New Game");
        computerSelection = computerPlay();
        let playerWon = roundGame(playerSelection, computerSelection);

        if (playerWon === "win") {
            scorePlayer++;
        }
        else if (playerWon === "lose") {
            scoreComputer++;
        }
        else {
            console.log("No points for anyone");
        }
        console.log("Player score: " + scorePlayer);
        console.log("Computer score: " + scoreComputer);
    }
    if (i = 5) {
        console.log("Game finished");
        if (scorePlayer < scoreComputer) {
            console.log("You've lost againts the computer");
        }
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {  //Add an event, for when it's clicked
        button.addEventListener('mouseenter', function(e){
            console.log(e);
            if (e.target.id === "rock"){
                document.getElementById("resultText").innerHTML = "I bet you know you are doing.";
            }
            else if (e.target.id === "paper"){
                document.getElementById("resultText").innerHTML = "Paper? the weak choice of a weak person..."
            }
            else {
                document.getElementById("resultText").innerHTML = "Surely scissors it's a dangerous choice."
            }
        });
        button.addEventListener('mouseleave', function (){
                document.getElementById("resultText").innerHTML = "I'm waiting..."
        })
        button.addEventListener("click", function () {  //Use of anonymous function so it doesn't trigger right away the roundGame function
        roundGame(button.id, computerPlay())
    });
});

