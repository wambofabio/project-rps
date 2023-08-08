let playerScore = 0;
let computerScore = 0;
let div = document.querySelector("#result");
let scoreDiv = document.querySelector("#score");

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function play(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      result = "You lose! Paper beats Rock";
    } else {
      playerScore++;
      result = "You win! Rock beats Scissors";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      result = "You lose! Scissors beats Paper";
    } else {
      playerScore++;
      result = "You win! Paper beats Rock";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      result = "You lose! Rock beats scissors";
    } else {
      playerScore++;
      result = "You win! Scissors beats Paper";
    }
  }

  div.textContent = result;
  scoreDiv.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    let winner = playerScore === 5 ? "Player" : "Computer";
    div.textContent = `${winner} wins the game!`;
    playerScore = 0;
    computerScore = 0;
  }
}

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;

//   let playerSelection = prompt("Rock, Paper, or Scissors?");
//   let computerSelection = getComputerChoice();
//   let result = play(playerSelection, computerSelection);
//   console.log(result);
//   if (result.includes("win")) {
//     playerScore++;
//   } else if (result.includes("lose")) {
//     computerScore++;

//   }
//   if (playerScore > computerScore) {
//     console.log("You win the game!");
//   } else if (playerScore < computerScore) {
//     console.log("You lose the game!");
//   } else {
//     console.log("It's a tie!");
//   }
// }

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();
    play(playerSelection, computerSelection);
  });
});

//print the results to the console
//console.log(getComputerChoice());
