function computerPlay() {
  let number = Math.floor(Math.random() * 3) + 1;
  let turn = "";
  if (number == 1) {
    turn = "rock";
  } else if (number == 2) {
    turn = "paper";
  } else if (number == 3) {
    turn = "scissor";
  }
  return turn;
}

function singleRound(playerSelection, computerSelection) {
  let result = "";
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()
  if (playerSelection == "rock" && computerSelection == "rock") {
    result = "The Match Is Tied!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    result = "You Lose! Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    result = "You Win! Rock beats Scissor";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    result = "You Win! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    result = "The Match Is Tied!";
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    result = "You Lose! Scissor beats Paper";
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    result = "You Lose! Rock beats Scissor";
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    result = "You Win! Scissor beats Paper";
  } else if (playerSelection == "scissor" && computerSelection == "scissor") {
    result = "The Match Is Tied!";
  }
 return result 
}

function game() {
for (let i = 0; i < 5; i++) {
    let userInput = prompt("Please Make A Selection")
    let computerInput = computerPlay() 
  let result =  singleRound(userInput, computerInput)
  console.log(result)
 }
}
game()

