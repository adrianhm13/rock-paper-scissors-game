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
    //Function of the round Game
    console.log("Computer choice: " + computerSelection);
    let playerInput = playerSelection;

    console.log("Player choice: " + playerInput);
    playerSelection = playerInput.toLowerCase();

    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        console.log("test" + playerSelection);
        let roundsPlayerWon = "lose";

        if (playerSelection === computerSelection) {
            roundsPlayerWon = "tie";
            document.getElementById("resultText").innerHTML = "So, we are more similars than you thought, huh?, a TIE!"
        }

        else if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                scoreComputer++;
                document.getElementById("resultText").innerHTML = "MUAHAHAH YOU'VE LOST"
            }
            else {
                roundsPlayerWon = "win";
                scorePlayer++;
                document.getElementById("resultText").innerHTML = "Meh, you won the round."
            }
        }

        else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                roundsPlayerWon = "win";
                scorePlayer++;
                document.getElementById("resultText").innerHTML = "Geez I'm more than a computer! I can't lose this!"
            }
            else {
                scoreComputer++;
                document.getElementById("resultText").innerHTML = "You think you can bet me? you are just a person!"
            }
        }

        else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                scoreComputer++;
                document.getElementById("resultText").innerHTML = "Such a shame, scissors can't do anything againts rocks!"
            }
            else {
                roundsPlayerWon = "win";
                scorePlayer++;
                document.getElementById("resultText").innerHTML = "Well, I'll give you this one..."
            }
        }

        //Creation of a div with the score, only the first time it's triggered
        if (!scoreBoard.classList.contains("scoreDiv")) {
            const scoreBoard = document.querySelector("#scoreBoard");

            const contentScore = document.createElement("divScore");

            scoreBoard.classList.add("scoreDiv");

            const scoreText = document.createElement("h3");
            scoreText.id = "scoreh3";
            scoreText.textContent = scorePlayer + " : " + scoreComputer;

            scoreBoard.appendChild(contentScore);
            contentScore.appendChild(scoreText);
        } else {
            document.getElementById("scoreh3").innerHTML = scorePlayer + " : " + scoreComputer;
            return roundsPlayerWon;

        }
    } //End of if condition if the inputValue it's correct
    else {
        alert("Choice not available, try again");
    }
}

const playerSelection = "rock";
let computerSelection;
let scorePlayer = 0;
let scoreComputer = 0;

function checkGame() {

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


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {  //Add an event, for when it's clicked
    button.addEventListener('mouseenter', function (e) { //When mouse hover, different messages
        console.log(e);
        if (e.target.id === "rock") {
            document.getElementById("resultText").innerHTML = "I bet you know you are doing.";
        }
        else if (e.target.id === "paper") {
            document.getElementById("resultText").innerHTML = "Paper? the weak choice of a weak person..."
        }
        else {
            document.getElementById("resultText").innerHTML = "Surely scissors it's a dangerous choice."
        }
    });
    button.addEventListener('mouseleave', function () {
        document.getElementById("resultText").innerHTML = "I'm waiting..."
    })
    button.addEventListener("click", function () {  //Use of anonymous function so it doesn't trigger right away the roundGame function
        roundGame(button.id, computerPlay())
    });
});

