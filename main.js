let myScore = 0 
let oppScore = 0 

let swordButton = document.getElementById("rock")
let shieldButton = document.getElementById("paper")
let bowButton = document.getElementById("scissor")

swordButton.addEventListener("click", function(){
 playRound("rock")
})
shieldButton.addEventListener("click", function(){
  playRound("paper")
})
bowButton.addEventListener("click", function(){
  playRound("scissor")
})

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
  let result = null;
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()
  if (playerSelection == "rock" && computerSelection == "rock") {
    result = null;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    result = false;
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    result = true;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    result = true;
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    result = null;
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    result = false;
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    result = false;
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    result = true;
  } else if (playerSelection == "scissor" && computerSelection == "scissor") {
    result = null;
  }
 return result 
}

function playRound(userInput) {
//for (let i = 0; i < 5; i++) {
 //   let userInput = prompt("Please Make A Selection")
    let computerInput = computerPlay()

  let result =  singleRound(userInput, computerInput)
  
  if (result == true ) {
    myScore++ 
  }

else if(result == false) {
  oppScore++
}



document.getElementById("myscore").innerHTML = `My Score: ${myScore}`;
document.getElementById("oppscore").innerHTML = `Opponent's Score: ${oppScore}`;

if (myScore >= 5 ) {
  myScore = 0 
  oppScore = 0
  document.getElementById("myscore").innerHTML = `My Score: ${myScore}`;
document.getElementById("oppscore").innerHTML = `Opponent's Score: ${oppScore}`;

  alert ("You Win!")
}

else if (oppScore >= 5) {
  myScore = 0 
  oppScore = 0
  document.getElementById("myscore").innerHTML = `My Score: ${myScore}`;
document.getElementById("oppscore").innerHTML = `Opponent's Score: ${oppScore}`;

  alert ("Opponent Wins!")
}

// }
}
//playRound()

